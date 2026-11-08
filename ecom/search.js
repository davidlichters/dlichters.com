(function(){var q=document.getElementById('q'),r=document.getElementById('res'),idx=null,base=document.body.dataset.base;
function load(cb){if(idx)return cb();fetch(base+'search.json').then(function(x){return x.json()}).then(function(d){idx=d;cb()})}
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function run(){var v=q.value.trim().toLowerCase();if(v.length<2){r.innerHTML='';return}
load(function(){var w=v.split(/\s+/),out=[];idx.forEach(function(e){var t=e.t.toLowerCase(),h=(e.h+' '+e.s).toLowerCase(),sc=0;
for(var i=0;i<w.length;i++){var a=t.indexOf(w[i])>=0,b=h.indexOf(w[i])>=0;if(!a&&!b){sc=-1;break}sc+=a?3:1}
if(sc>0)out.push([sc,e])});out.sort(function(a,b){return b[0]-a[0]});
r.innerHTML=out.length?'<ul class="list">'+out.slice(0,30).map(function(o){var e=o[1];return '<li><a href="'+base+e.u+'"><span class="n">'+esc(e.c)+'</span><span class="t">'+esc(e.t)+'</span><span class="d">'+esc(e.s.slice(0,160))+'</span></a></li>'}).join('')+'</ul>':'<p class="stats">No results.</p>'})}
q.addEventListener('input',run);if(q.value)run()})();
