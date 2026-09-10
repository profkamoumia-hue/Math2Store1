const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.product-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  cards.forEach(card=>{
    const cat=card.dataset.category;
    const show=f==='all' || cat===f || (f==='free' && card.querySelector('.free-badge'));
    card.style.display=show?'flex':'none';
  });
}));
document.getElementById('year').textContent=new Date().getFullYear();
