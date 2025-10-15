const btn = document.getElementById('btn');
const greeting = document.getElementById('greeting');

btn.addEventListener('click', () => {
  greeting.textContent = `Clicked at ${new Date().toLocaleTimeString()}. You're live!`;
});

