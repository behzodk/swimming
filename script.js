  document.addEventListener('DOMContentLoaded', function () {
    // SCROLL LOGIC FOR HEADER
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });

    // MOBILE MENU TOGGLE
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    hamburgerMenu.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      // Toggle hamburger icon to X
      hamburgerMenu.classList.toggle('change');

      // If menu is open, freeze body scroll; else restore
      if (navMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Sub-menu toggling on mobile
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', e => {
        if (window.innerWidth <= 992) {
          e.stopPropagation();
          item.classList.toggle('open');
        }
      });
    });
  });

  