// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (menu && menu.classList.contains('open')) {
      if (!e.target.closest('.main-nav')) {
        menu.classList.remove('open');
      }
    }
  });
});
