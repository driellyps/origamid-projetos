import clickOutside from './clickOutside'

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    clickOutside(this, () => {
      this.classList.remove('active')
    });
  }
  
  dropdownMenus.forEach(menu => {
    menu.addEventListener('click', handleClick);
    menu.addEventListener('touchstart', handleClick);
    
    /* THIS COULD ALSO BE WRITTEN AS:
    ['click', 'touchstart'].forEach(eventType => {
      menu.addEventListener(eventType, handleClick)
    })
    */
  })
}


