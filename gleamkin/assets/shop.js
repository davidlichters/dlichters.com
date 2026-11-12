// GleamKin Vorschau: Stufenwahl, Lieferdatum, Bestellschluss, Galerie-Punkte, Sticky-Kaufleiste, Kaufknopf ohne Kasse.
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function stufeSetzen() {
    var a = $('input[name="menge"]:checked');
    if (!a) return;
    $$('[data-preis-anzeige]').forEach(function (el) { el.textContent = a.dataset.preis; });
    $$('[data-titel-anzeige]').forEach(function (el) { el.textContent = a.dataset.titel; });
  }
  $$('input[name="menge"]').forEach(function (i) { i.addEventListener('change', stufeSetzen); });
  stufeSetzen();

  // Lieferdatum: heute + Bearbeitung (Werktage) + Laufzeit (Werktage, wie in Jonas' Versandrichtlinie: 1 bis 3 und 8 bis 15
  // Werktage), ohne Thanksgiving, 25.12. und 1.1.; gleiche Rechnung wie bau/bauen.py
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function frei(d) { var m = d.getMonth(), t = d.getDate(), w = d.getDay(); return w === 0 || w === 6 || (m === 10 && w === 4 && t >= 22 && t <= 28) || (m === 11 && t === 25) || (m === 0 && t === 1); }
  function werktage(d, n) { d = new Date(d); while (n > 0) { d.setDate(d.getDate() + 1); if (!frei(d)) n--; } return d; }
  function tage(d, n) { d = new Date(d); d.setDate(d.getDate() + n); return d; }
  function fmt(d) { return MON[d.getMonth()] + ' ' + d.getDate(); }
  $$('[data-lieferung]').forEach(function (el) {
    var b = el.dataset.bearb.split(',').map(Number), l = el.dataset.lauf.split(',').map(Number), h = new Date();
    el.textContent = fmt(werktage(werktage(h, b[0]), l[0])) + ' to ' + fmt(werktage(werktage(h, b[1]), l[1]));
  });

  // Bestellschluss Weihnachten: letzter Tag mit spaetester Ankunft am 24.12.; ist das vorbei, bleibt der Satz weg
  $$('[data-weihnacht]').forEach(function (el) {
    var b = el.dataset.bearb.split(',').map(Number), l = el.dataset.lauf.split(',').map(Number);
    var h = new Date(); h.setHours(12, 0, 0, 0);
    var ziel = new Date(h.getFullYear(), 11, 24, 12), d = new Date(ziel);
    function zuSpaet(x) { return werktage(werktage(x, b[1]), l[1]) > ziel; }
    while (d > h && zuSpaet(d)) d = tage(d, -1);
    if (d < h || zuSpaet(d)) return;
    $$('[data-schluss]', el).forEach(function (x) { x.textContent = fmt(d); });
    el.hidden = false;
  });

  var toast = $('#toast'), zeit;
  $$('[data-kauf]').forEach(function (k) {
    k.addEventListener('click', function () {
      toast.textContent = 'Preview only: checkout is not connected yet.';
      toast.classList.add('zeigen');
      clearTimeout(zeit);
      zeit = setTimeout(function () { toast.classList.remove('zeigen'); }, 2600);
    });
  });

  var band = $('#galerie'), punkte = $$('#punkte a').concat($$('#daumen a'));
  if (band && punkte.length) {
    var anz = $$('#punkte a').length || punkte.length;
    punkte.forEach(function (p, j) {
      var i = j % anz;
      p.addEventListener('click', function (e) {
        e.preventDefault();
        band.scrollTo({ left: band.clientWidth * i, behavior: 'smooth' });
      });
    });
    band.addEventListener('scroll', function () {
      var i = Math.round(band.scrollLeft / band.clientWidth);
      punkte.forEach(function (p, k) { p.classList.toggle('aktiv', k % anz === i); });
    }, { passive: true });
  }

  var sticky = $('#sticky'), kauf = $('#kauf .knopf');
  if (sticky && kauf) {
    var lauf = false;
    var pruefen = function () {
      lauf = false;
      // Leiste erst zeigen, wenn der Kaufknopf nach oben aus dem Bild gescrollt ist, nie beim Laden
      var unten = kauf.getBoundingClientRect().bottom < 0;
      sticky.classList.toggle('zeigen', unten);
      sticky.setAttribute('aria-hidden', unten ? 'false' : 'true');
      $('button', sticky).tabIndex = unten ? 0 : -1;
    };
    window.addEventListener('scroll', function () { if (!lauf) { lauf = true; requestAnimationFrame(pruefen); } }, { passive: true });
    pruefen();
  }
})();
