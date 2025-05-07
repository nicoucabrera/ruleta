const ruleta = document.getElementById('ruleta');
let ultimoResaltado = null;
let numRand = document.createElement('h2');
numRand.className = "textChange";
const giro = document.createElement('h2');
giro.className = "textChange";
giro.textContent = 'Girando...';

function random() {
  numRand.remove();
  const numero = Math.floor(Math.random() * 37); // de 0 a 36
  numRand.textContent = numero;

  ruleta.insertBefore(giro, aside);

  setTimeout(() => {
    giro.remove();
    ruleta.insertBefore(numRand, aside);
  }, 2500);

  if (ultimoResaltado) {
    ultimoResaltado.style.backgroundColor = "";
  }
  setTimeout(() => {
  const nuevo = document.querySelector(`.num${numero}`);
  if (nuevo) {
    nuevo.style.backgroundColor = "blue";
    ultimoResaltado = nuevo;
  }
}, 2500);
}