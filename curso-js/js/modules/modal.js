export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]')
  const btnClose = document.querySelector('[data-modal="close"]')
  const modalContainer = document.querySelector('[data-modal="container"]')
  
  if(btnOpen && btnClose && modalContainer) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle('active')
    
    }
    
    function clickOutsideContainer(event) {
      if(event.target === this) toggleModal(event)
    }
    
    btnOpen.addEventListener('click', toggleModal)
    btnClose.addEventListener('click', toggleModal)
    modalContainer.addEventListener('click', clickOutsideContainer)

  }
}