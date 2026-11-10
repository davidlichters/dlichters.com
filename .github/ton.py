#!/usr/bin/env python3
"""Erzeugt den fertigen Ton fuer Speak auf /ecom: je Post eine Datei, dazu die Startzeit jeder Slide.
Aufruf: ton.py "01-01-0:bm_george,01-01-1:bm_fable" """
import json
import os
import subprocess
import sys
import tempfile
import time
import urllib.request

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

BASIS = "https://dlichters.com/ecom/feed/"
AUS = "ecom/ton"
TEMPO = 1.3
PAUSE = 0.25


def holen(f):
    with urllib.request.urlopen(BASIS + "d/" + f + ".json") as r:
        return json.load(r)


def vorlese(s):
    """Genau derselbe Text wie vorlese() in der Seite."""
    if s.get("k") == "n":  # neues Slide-Design: der Vorlesetext liegt fertig in der Slide, die End-Slide ist stumm
        return s.get("v") or ""
    if s.get("k") == "t":
        return ". ".join(x for x in (s.get("t"), s.get("s")) if x)
    t = ((s["h"] + ". ") if s.get("h") else "") + s["t"].replace("\n", ". ")
    return t.replace("**", "")


def json_lesen(p, leer):
    try:
        with open(p, encoding="utf-8") as h:
            return json.load(h)
    except FileNotFoundError:
        return leer


def main():
    k = Kokoro("kokoro.onnx", "voices.bin")
    daten = {}
    gesamt_ton = gesamt_zeit = 0.0
    for teil in sys.argv[1].split(","):
        pid, stimme = teil.strip().split(":")
        f, n = pid[:5], int(pid[6:])
        daten.setdefault(f, holen(f))
        slides = daten[f]["p"][n]
        t0 = time.time()
        stuecke, marken, jetzt, sr, typ = [], [], 0.0, 24000, np.float32
        for s in slides:
            marken.append(round(jetzt, 2))
            text = vorlese(s).strip()
            if not text:  # stumme Slide (End-Slide): nur die Pause, die Marke steht trotzdem
                stuecke.append(np.zeros(int(PAUSE * sr), dtype=typ))
                jetzt += PAUSE
                continue
            a, sr = k.create(text, voice=stimme, speed=TEMPO, lang="en-gb")
            typ = a.dtype
            stille = np.zeros(int(PAUSE * sr), dtype=a.dtype)
            stuecke += [a, stille]
            jetzt += len(a) / sr + PAUSE
        os.makedirs(f"{AUS}/{f}", exist_ok=True)
        with tempfile.NamedTemporaryFile(suffix=".wav") as w:
            sf.write(w.name, np.concatenate(stuecke), sr)
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", w.name, "-ac", "1", "-c:a", "aac", "-b:a", "40k", "-movflags", "+faststart", f"{AUS}/{f}/{n}.m4a"], check=True)
        m = json_lesen(f"{AUS}/{f}/m.json", {})
        m[str(n)] = marken
        with open(f"{AUS}/{f}/m.json", "w", encoding="utf-8") as h:
            json.dump(m, h, separators=(",", ":"))
        liste = sorted(set(json_lesen(f"{AUS}/liste.json", [])) | {f})
        with open(f"{AUS}/liste.json", "w", encoding="utf-8") as h:
            json.dump(liste, h, separators=(",", ":"))
        z = time.time() - t0
        gesamt_ton += jetzt
        gesamt_zeit += z
        print(f"{pid} {stimme}: {len(slides)} Slides, {jetzt:.0f} s Ton in {z:.0f} s, {os.path.getsize(f'{AUS}/{f}/{n}.m4a') // 1024} KB", flush=True)
    print(f"GESAMT {gesamt_ton:.0f} s Ton in {gesamt_zeit:.0f} s, {gesamt_ton / gesamt_zeit:.2f}-fach", flush=True)


if __name__ == "__main__":
    main()
