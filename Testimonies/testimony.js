let slideIndex = 1;

slider(slideIndex);

function slider(n) {
  const slides = document.querySelectorAll(".mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(b) {
  slider((slideIndex += b));
}

function currentSlide(c) {
  slider((slideIndex = c));
}

function autoSlide() {
  plusSlides(1);
}

// setInterval(autoSlide, 3000);
