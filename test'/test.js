const slider = document.querySelector(".testimonial-slider");
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const slideWidth = slides[0].offsetWidth;

// Add event listener for swipe gesture
slider.addEventListener("touchstart", handleTouchStart, { passive: true });
slider.addEventListener("touchmove", handleTouchMove, { passive: true });

let startX, endX;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  endX = event.touches[0].clientX;
  const distance = endX - startX;

  if (distance > 50) {
    // Swipe right
    navigateSlides("previous");
  } else if (distance < -50) {
    // Swipe left
    navigateSlides("next");
  }
}

function navigateSlides(direction) {
  if (direction === "next") {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
  } else if (direction === "previous") {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
  }

  slider.scrollTo({
    left: currentSlide * slideWidth,
    behavior: "smooth",
  });
}
