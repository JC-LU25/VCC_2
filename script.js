// greet button on the home page
const btn = document.getElementById('greetBtn');
const out = document.getElementById('greeting');

btn.addEventListener('click', () => {
  out.textContent = 'Hey! Thanks for clicking.';
});
