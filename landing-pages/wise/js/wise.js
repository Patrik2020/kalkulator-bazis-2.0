const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item => {
      const top = item.getBoundingClientRect().top;

      if (top < trigger) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        button.querySelector('span').textContent = '+';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        button.querySelector('span').textContent = '−';
      }
    });
  });

  const counters = document.querySelectorAll('[data-target]');

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        let current = 0;

        const update = () => {
          const increment = target / 60;

          if (current < target) {
            current += increment;
            el.textContent = Math.floor(current);
            requestAnimationFrame(update);
          } else {
            el.textContent = target;
          }
        };

        update();
        counterObserver.unobserve(el);
      }
    });
  });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 90;
    const y = (window.innerHeight / 2 - e.pageY) / 90;

    document.querySelectorAll('.hero-card, .feature-card').forEach(card => {
      card.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
});
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
