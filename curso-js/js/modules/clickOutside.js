export default function clickOutside(element, callback) {
  const html = document.documentElement;
  const clicked = 'data-clicked';

  if(!element.hasAttribute(clicked)) {
    html.addEventListener('click', handleOutsideClick);
    html.addEventListener('touchstart', handleOutsideClick);
    element.setAttribute(clicked, '');
  }

  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(clicked);
      html.removeEventListener('click', handleOutsideClick);
      html.removeEventListener('touchstart', handleOutsideClick);
      callback();
    }
  }
}