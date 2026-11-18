document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.hamb'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('show');io.unobserve(item.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));