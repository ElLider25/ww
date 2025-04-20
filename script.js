const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const music = document.getElementById('music');

// Función que mueve el botón "No" a una posición aleatoria
function moveButton() {
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = container.clientWidth - btnWidth;
  const maxY = container.clientHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Evento para botón "Sí"
yesBtn.addEventListener('click', () => {
  message.textContent = "¡Te amo! 💖";
  music.play();
});

// Eventos para mover el botón "No"
noBtn.addEventListener('mouseover', moveButton);  // PC
noBtn.addEventListener('touchstart', moveButton); // Celulares
