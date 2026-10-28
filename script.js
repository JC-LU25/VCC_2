// greet button on the home page
const btn = document.getElementById('greet-btn');
const out = document.getElementById('greeting');

btn.addEventListener('click', () => {
  out.textContent = 'Hey! Thanks for clicking.';
});
