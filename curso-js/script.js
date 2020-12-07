initTabNav();
initAccordion();

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