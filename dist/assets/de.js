document.querySelectorAll('[id^="movement-btn-"]').forEach((button,index)=>button.addEventListener('click',()=>{
 document.getElementById('active-element-card').replaceWith(document.getElementById('movement-template-'+index).content.firstElementChild.cloneNode(true));
 document.querySelectorAll('[id^="movement-btn-"]').forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===index));b.classList.toggle('shadow-md',i===index);b.classList.toggle('scale-105',i===index);b.classList.toggle('border-gold-medium',i===index);});
}));
document.querySelectorAll('[id^="faq-toggle-"]').forEach(button=>button.addEventListener('click',()=>{
 const answer=document.getElementById(button.getAttribute('aria-controls')); const open=button.getAttribute('aria-expanded')!=='true';
 button.setAttribute('aria-expanded',String(open));answer.hidden=!open;answer.style.opacity=open?'1':'0';answer.style.maxHeight=open?'none':'0';
}));
['hero-cta-btn','pain-points-cta-btn','patient-testimonials-cta-btn','final-cta-checkout-btn'].forEach(id=>document.getElementById(id).addEventListener('click',()=>document.getElementById('pricing-section').scrollIntoView({behavior:'smooth'})));
