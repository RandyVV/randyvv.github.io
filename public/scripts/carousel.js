const carouselImages = document.querySelector('.carousel-images');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  } else if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }

  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 3000);
