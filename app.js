const compartir = document.querySelector('.compartir');
const redes = document.querySelector('.container-redes');
let timeoutId;

compartir.addEventListener('mouseover', () => {
  redes.classList.add('container-redes-activado');
  clearTimeout(timeoutId);
});

redes.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
});

redes.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    redes.classList.remove('container-redes-activado');
  }, 2000);
});

compartir.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    redes.classList.remove('container-redes-activado');
  }, 2000);
});
