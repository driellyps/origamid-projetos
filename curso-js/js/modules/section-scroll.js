export default function initSectionAnimation () {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
    const halfWindow = window.innerHeight * 0.6;
    
    function showSection() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfWindow) < 0;
    
        if(isSectionVisible) section.classList.add('active')
      })
    };
    
    showSection(); 
    
    window.addEventListener('scroll', showSection);
  }
}