const cursor = document.querySelector('.cursor');
const card = document.querySelector('.card');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 4 + 'px';
  cursor.style.top = e.pageY + 4 + 'px';
});

card.addEventListener('mouseenter', () => {
  cursor.classList.add('focus');
});

card.addEventListener('mouseleave', () => {
  cursor.classList.remove('focus');
});