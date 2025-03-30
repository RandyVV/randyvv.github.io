// Script pour gérer les interactions du portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Gestion du carrousel
  const carousel = document.querySelector('.carousel-images');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  
  if (carousel && items.length > 0) {
    // Initialiser le carrousel
    updateCarousel();
    
    // Fonction pour déplacer le carrousel
    window.moveSlide = (direction) => {
      currentIndex = (currentIndex + direction + items.length) % items.length;
      updateCarousel();
    };
    
    // Mettre à jour l'affichage du carrousel
    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Auto-rotation optionnelle
    let autoRotate = setInterval(() => moveSlide(1), 5000);
    
    // Arrêter la rotation au survol
    carousel.parentElement.addEventListener('mouseenter', () => {
      clearInterval(autoRotate);
    });
    
    // Reprendre la rotation quand la souris quitte
    carousel.parentElement.addEventListener('mouseleave', () => {
      autoRotate = setInterval(() => moveSlide(1), 5000);
    });
  }
  
  // Gestion du défilement fluide pour les liens internes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Offset pour la navigation fixe si nécessaire
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation au défilement
  const revealElements = document.querySelectorAll('.section-spacing');
  
  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
      const revealTop = element.getBoundingClientRect().top;
      
      if (revealTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }
  
  // Ajouter la classe reveal à tous les éléments
  revealElements.forEach(element => {
    element.classList.add('reveal');
  });
  
  // Vérifier au chargement et au défilement
  window.addEventListener('scroll', checkReveal);
  window.addEventListener('load', checkReveal);
});