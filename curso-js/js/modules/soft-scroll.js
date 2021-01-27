/* Soft Scroll on Internal Links */
export default function initSoftScroll() {
  const menuLinks = document.querySelectorAll('[data-menu="soft"] a[href^="#"]');

  if (menuLinks.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    menuLinks.forEach(link => {
      link.addEventListener('click', scrollToSection)
    });
  }
} 