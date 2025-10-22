// Dark Mode Toggle
const darkToggleButtons = document.querySelectorAll('#darkModeToggle');
darkToggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  });
});

// Mobile Navigation Toggle
const navToggles = document.querySelectorAll('.nav-toggle');
navToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const navList = toggle.parentElement.querySelector('.nav-list');
    navList.classList.toggle('show');
  });
});
