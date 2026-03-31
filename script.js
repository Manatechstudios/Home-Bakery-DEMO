/* ============================================
   SWEET CRUMBS HOME BAKERY — script.js
   ============================================ */

'use strict';

/* ===== NAVBAR SCROLL BEHAVIOUR ===== */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();

/* ===== MOBILE NAV TOGGLE ===== */
(function initMobileNav() {
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger
    toggle.classList.toggle('active');
    const spans = toggle.querySelectorAll('span');
    if (toggle.classList.contains('active')) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('active');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.classList.remove('active');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });
})();

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ===== SCROLL REVEAL (Intersection Observer) ===== */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    revealEls.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
})();

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ===== GALLERY LIGHTBOX (minimal) ===== */
(function initGalleryLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  // Create lightbox overlay
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.innerHTML = `
    <div class="lb-backdrop"></div>
    <div class="lb-box">
      <button class="lb-close" aria-label="Close">&times;</button>
      <div class="lb-content"></div>
      <p class="lb-caption"></p>
    </div>
  `;

  const lbStyles = `
    #lightbox { position:fixed; inset:0; z-index:9999; display:flex; align-items:center; justify-content:center; opacity:0; visibility:hidden; transition:opacity 0.3s ease, visibility 0.3s ease; }
    #lightbox.active { opacity:1; visibility:visible; }
    .lb-backdrop { position:absolute; inset:0; background:rgba(46,31,26,0.9); backdrop-filter:blur(8px); }
    .lb-box { position:relative; z-index:1; max-width:min(700px, 90vw); width:100%; padding:1.5rem; }
    .lb-close { position:absolute; top:-1rem; right:-1rem; width:36px; height:36px; border-radius:50%; background:#fff; border:none; cursor:pointer; font-size:1.25rem; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 12px rgba(0,0,0,0.2); color:#2E2E2E; transition:transform 0.2s; z-index:2; }
    .lb-close:hover { transform:scale(1.1); }
    .lb-content { border-radius:16px; overflow:hidden; aspect-ratio:4/3; }
    .lb-content > div { width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem; }
    .lb-content span { font-size:5rem; display:block; }
    .lb-content p { display:none; }
    .lb-caption { text-align:center; margin-top:1rem; color:#fff; font-family:'Poppins',sans-serif; font-size:0.9rem; font-weight:500; opacity:0.8; }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = lbStyles;
  document.head.appendChild(styleEl);
  document.body.appendChild(lightbox);

  const lbContent = lightbox.querySelector('.lb-content');
  const lbCaption = lightbox.querySelector('.lb-caption');
  const lbClose   = lightbox.querySelector('.lb-close');
  const lbBackdrop = lightbox.querySelector('.lb-backdrop');

  const openLightbox = (item) => {
    const placeholder = item.querySelector('.gallery-placeholder').cloneNode(true);
    const captionEl   = item.querySelector('.gallery-overlay p');
    lbContent.innerHTML = '';
    lbContent.appendChild(placeholder);
    lbCaption.textContent = captionEl ? captionEl.textContent : '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  items.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
  });

  lbClose.addEventListener('click', closeLightbox);
  lbBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
})();

/* ===== HERO PARALLAX (subtle) ===== */
(function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  // Only on desktop to avoid performance issues on mobile
  if (window.innerWidth < 768) return;

  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    heroBg.style.transform = `translateY(${offset * 0.3}px)`;
  }, { passive: true });
})();

/* ===== COUNTER ANIMATION (if needed in future) ===== */
function animateCount(el, target, duration = 1500) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

/* ===== WHATSAPP FLOAT — PULSE ANIMATION ===== */
(function initWAFloat() {
  const wa = document.querySelector('.whatsapp-float');
  if (!wa) return;

  // Add pulse ring effect
  const pulseStyle = document.createElement('style');
  pulseStyle.textContent = `
    .whatsapp-float::before {
      content: '';
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      border: 2px solid rgba(37, 211, 102, 0.4);
      animation: waPulse 2.5s ease-out infinite;
    }
    @keyframes waPulse {
      0% { transform: scale(1); opacity: 0.7; }
      100% { transform: scale(1.6); opacity: 0; }
    }
  `;
  document.head.appendChild(pulseStyle);
})();

/* ===== PAGE LOAD ANIMATION ===== */
(function initPageLoad() {
  document.documentElement.style.setProperty('--load-delay', '0s');
  
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;

  // Hero content enters with staggered animation
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(40px)';

  requestAnimationFrame(() => {
    setTimeout(() => {
      heroContent.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      heroContent.style.opacity   = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  });
})();

/* ===== CARD TILT EFFECT (subtle) ===== */
(function initCardTilt() {
  if (window.innerWidth < 768) return; // skip on mobile

  document.querySelectorAll('.card, .review-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const cx     = rect.width  / 2;
      const cy     = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -4;
      const rotateY = ((x - cx) / cx) *  4;

      card.style.transform    = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.transition   = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.5s ease, box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s cubic-bezier(0.4,0,0.2,1)';
    });
  });
})();

/* ===== TESTIMONIAL SCROLL HINT ===== */
(function initReviewsScroll() {
  const grid = document.querySelector('.reviews-grid');
  if (!grid) return;

  if (window.innerWidth <= 480) {
    grid.style.overflowX    = 'auto';
    grid.style.scrollSnapType = 'x mandatory';
    grid.style.display       = 'flex';
    grid.style.gap           = '1rem';
    grid.style.paddingBottom = '1rem';
    grid.querySelectorAll('.review-card').forEach(card => {
      card.style.minWidth     = '85vw';
      card.style.scrollSnapAlign = 'start';
    });
  }
})();

/* ===== CONSOLE GREETING ===== */
console.log(
  '%c🧁 Sweet Crumbs Home Bakery %c\nFreshly Baked Happiness at Your Doorstep\nHyderabad, India\n\nBuilt with ❤️ by Design Spaces',
  'color: #6D4C41; font-size: 1.2rem; font-weight: bold;',
  'color: #E8AFA6; font-size: 0.85rem;'
);
