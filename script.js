document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if(btn && nav){
  btn.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    btn.textContent='☰';
  }));
}

const items = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const ob = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        ob.unobserve(e.target);
      }
    });
  }, {threshold:.12});
  items.forEach(i=>ob.observe(i));
}else{
  items.forEach(i=>i.classList.add('visible'));
}
