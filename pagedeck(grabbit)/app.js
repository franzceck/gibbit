const footer = document.querySelector('.footer');

window.addEventListener('scroll', ()=> {
  const scrollTop = window.scrollY;

  if(scrollTop >= 930) {
    footer.classList.add('active');
  }
  else {
    footer.classList.remove('active');
  }
})