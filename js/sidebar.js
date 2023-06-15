const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

openBtn.addEventListener('click', () => {
  sidebar.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.left = '-400px';
});