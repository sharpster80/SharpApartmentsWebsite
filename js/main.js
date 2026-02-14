// Sharp Apartments — Main JS

document.addEventListener('DOMContentLoaded', function () {

  // === Mobile Nav Toggle ===
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('navMobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // === Active Nav Link ===
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // === GLightbox Init ===
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      openEffect: 'fade',
      closeEffect: 'fade',
    });
  }

  // === Contact Form ===
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Formspree handles submission — show success on redirect back
      // For AJAX submission without page reload:
      e.preventDefault();
      const data = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          const success = document.getElementById('formSuccess');
          if (success) {
            form.reset();
            success.style.display = 'block';
            success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          alert('Something went wrong. Please email us directly at contact@sharp-apartments.com');
        }
      }).catch(function () {
        alert('Something went wrong. Please email us directly at contact@sharp-apartments.com');
      });
    });
  }

});
