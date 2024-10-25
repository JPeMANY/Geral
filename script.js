let currentIndex = 0;

function slide(direction) {

    console.log(currentIndex)
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
