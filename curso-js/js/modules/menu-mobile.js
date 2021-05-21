import clickOutside from './clickOutside.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add('active');
      menuButton.classList.add('active');

      clickOutside(menuList, ['click', 'touchstart'], () => {
        console.log('teste')
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      })

    }

    menuButton.addEventListener('click', openMenu)
    menuButton.addEventListener('touchstart', openMenu)

  }

}