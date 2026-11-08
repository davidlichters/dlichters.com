(function(){var t=document.getElementById('top');if(t){addEventListener('scroll',function(){t.classList.toggle('on',scrollY>900)},{passive:true})}
function hint(){document.querySelectorAll('.tw').forEach(function(w){if(!w.dataset.h&&w.clientWidth&&w.scrollWidth>w.clientWidth+4){w.dataset.h=1;var n=w.querySelectorAll('tr:first-child>*').length,p=document.createElement('p');p.className='swipe';p.textContent='Swipe sideways to see all '+n+' columns \u2192';w.parentNode.insertBefore(p,w)}})}
hint();document.querySelectorAll('details').forEach(function(d){d.addEventListener('toggle',hint)});
var b=document.getElementById('openall'),ds=document.querySelectorAll('details.part');
if(b){b.addEventListener('click',function(){var o=b.textContent=='Open all';ds.forEach(function(d){d.open=o});b.textContent=o?'Close all':'Open all'})}
function hash(){var h=location.hash.slice(1);if(!h)return;var e=document.getElementById(decodeURIComponent(h));if(!e)return;var d=e.closest('details');if(d)d.open=true;if(e.tagName=='DETAILS')e.open=true;e.scrollIntoView()}
addEventListener('hashchange',hash);hash()})();
