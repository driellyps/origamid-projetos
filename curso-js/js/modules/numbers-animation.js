export default function initNumbersAnimate () {
  
  function animation() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach(number => {
      const total = Number(number.innerText);
      const increment = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 20 * Math.random())
    })
  }

  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animation();
    }
  }
  
  const obeserverTarget = document.querySelector('.numbers')
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(obeserverTarget, {attributes: true})

}
