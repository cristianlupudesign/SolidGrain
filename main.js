/* SOLID GRAIN — Shared JS */
function toggleMobileNav(){document.getElementById('mobileNav').classList.toggle('open')}
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open')}

/* Scroll reveal */
document.addEventListener('DOMContentLoaded',function(){
  var obs=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting){en.target.classList.add('vis');obs.unobserve(en.target)}})},{threshold:.08});
  document.querySelectorAll('.rv').forEach(function(el){obs.observe(el)});

  /* FAQ toggle */
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      this.closest('.faq-item').classList.toggle('open');
    });
  });
});

/* Form submit (Formspree fallback) */
function handleSubmit(e){
  e.preventDefault();
  var b=e.target.querySelector('.fbtn');
  b.textContent="Sent — we'll be in touch shortly.";
  b.style.background='#D14836';
  b.disabled=true;
  setTimeout(function(){b.textContent='Send Quote Request';b.style.background='';b.disabled=false;e.target.reset()},4000);
}
