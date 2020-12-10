initTabNav();
initAccordion();
softScroll();

/* Nav by tabs */
function initTabNav () {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('active')


  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove('active')
    });
  
    tabContent[index].classList.add('active');
  }
  
  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab(index)
    });
  })
}
}

/* Accordion List */
function initAccordion () {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  if(accordionList.length) {
    function activeAccordion () {
      this.classList.toggle('active')
      this.nextElementSibling.classList.toggle('active')
    }
    
    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })

  }

}

/* Soft Scroll on Internal Links */
function softScroll() {
  const menuLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  if(menuLinks.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
    
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    
    menuLinks.forEach(link => {
      link.addEventListener('click', scrollToSection)
    })

  }
  
  
} 