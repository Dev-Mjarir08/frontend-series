
// Initialize particles.js
document.addEventListener('DOMContentLoaded', function () {
  // Particles.js configuration
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#3b82f6" },
      shape: { type: "circle" },
      opacity: { value: 0.2, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8b5cf6",
        opacity: 0.1,
        width: 1
      },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });

  // Typewriter effect
  const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 75,
  });

  typewriter
    .typeString('Full Stack Developer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('MERN Stack Developer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('JavaScript Expert')
    .pauseFor(1500)
    .deleteAll()
    .start();

  // Initialize elements with animation classes
  const fadeElements = document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right');
  const progressBars = document.querySelectorAll('.progress-bar');

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll animations
  function handleScrollAnimation() {
    fadeElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('show');
      }
    });

    // Handle progress bars animation
    progressBars.forEach(bar => {
      if (isInViewport(bar)) {
        const targetWidth = bar.classList.contains('js-progress') ? '85%' :
          bar.classList.contains('react-progress') ? '80%' :
            bar.classList.contains('node-progress') ? '65%' :
              bar.classList.contains('dsa-progress') ? '84%' :
                bar.classList.contains('css-progress') ? '94%' :
                  bar.classList.contains('mern-progress') ? '78%' : '0%';

        if (bar.style.width === '0%' || bar.style.width === '') {
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 300);
        }
      }
    });

    // Handle back to top button visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove('opacity-0', 'translate-y-10');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      backToTopBtn.classList.add('opacity-0', 'translate-y-10');
    }
  }

  // Initial check on page load
  handleScrollAnimation();

  // Check on scroll
  window.addEventListener('scroll', handleScrollAnimation);

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    // Change icon
    const icon = mobileMenuButton.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when clicking a link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.querySelector('i').classList.remove('fa-times');
      mobileMenuButton.querySelector('i').classList.add('fa-bars');
    });
  });

  // Back to top button functionality
  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
    }

    // Add shadow when scrolled
    if (scrollTop > 10) {
      navbar.classList.add('shadow-md');
    } else {
      navbar.classList.remove('shadow-md');
    }

    lastScrollTop = scrollTop;
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Custom cursor
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  document.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 300, fill: "forwards" });
  });

  // Cursor hover effects
  document.querySelectorAll('a, button, .project-card, .skill-card').forEach(element => {
    element.addEventListener('mouseenter', function () {
      cursorDot.style.transform = 'scale(1.5)';
      cursorOutline.style.transform = 'scale(1.5)';
      cursorOutline.style.borderColor = '#8b5cf6';
    });

    element.addEventListener('mouseleave', function () {
      cursorDot.style.transform = 'scale(1)';
      cursorOutline.style.transform = 'scale(1)';
      cursorOutline.style.borderColor = '#3b82f6';
    });
  });
});
