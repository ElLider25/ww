const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const music = document.getElementById('music');

yesBtn.addEventListener('click', () => {
  message.textContent = "¡Te amo! 💖";
  music.play();
});

noBtn.addEventListener('mouseover', () => {
  const container = document.querySelector('.container');
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
