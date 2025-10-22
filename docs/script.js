/* script.js
   Handles:
   - theme toggle (icon) with localStorage
   - simple mobile nav toggle
*/

(function(){
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');

  function applyTheme(t){
    if(t === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    // update icon(s)
    document.querySelectorAll('.theme-icon').forEach(el=>{
      el.textContent = t === 'dark' ? '☀️' : '🌙';
      el.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  applyTheme(theme);

  // toggle button(s)
  document.addEventListener('click', e=>{
    if(e.target.matches('.theme-toggle, .theme-toggle *')){
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    }

    // mobile nav open
    if(e.target.matches('.nav-toggle, .nav-toggle *')){
      const mm = document.querySelector('.mobile-menu');
      if(!mm) return;
      if(mm.style.display === 'block'){ mm.style.display = 'none'; }
      else { mm.style.display = 'block'; }
    }

    // close mobile menu when clicking a link
    if(e.target.matches('.mobile-menu a')){
      const mm = document.querySelector('.mobile-menu');
      if(mm) mm.style.display = 'none';
    }
  });

  // close mobile menu on resize > mobile breakpoint
  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 720){
      const mm = document.querySelector('.mobile-menu');
      if(mm) mm.style.display = '';
    }
  });

})();
