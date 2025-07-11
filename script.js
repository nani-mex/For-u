// สร้างดาววิ้งๆ กระจายทั่วหน้าจอ
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  document.body.appendChild(star);
}
for (let i = 0; i < count; i++) {
  const angle = i * (2 * Math.PI / count);
  const x = 160 * Math.pow(Math.sin(angle), 3);
  const y = -130 * Math.cos(angle) + 50 * Math.cos(2 * angle) + 20 * Math.cos(3 * angle) + 10 * Math.cos(4 * angle);

  const span = document.createElement('span');
  span.innerText = text;
  span.style.left = `calc(50% + ${x}px)`;
  span.style.top = `calc(50% + ${y}px)`;
  heart