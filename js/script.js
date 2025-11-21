
function toggleNavbar() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show-nav-links');
    }

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide img");
  const totalSlides = slides.length;
  const carousel = document.getElementById("carousel");
  const carouselSlide = document.getElementById("carouselSlide");

  function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => moveSlide(-1));
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => moveSlide(1));
  }

  // === SWIPE PODPORA ===
  let startX = 0;
  let isSwiping = false;

  carouselSlide.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      isSwiping = true;
    }
  });

  carouselSlide.addEventListener("touchmove", (e) => {
    if (!isSwiping || e.touches.length > 1) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        moveSlide(1); // swipe left
      } else {
        moveSlide(-1); // swipe right
      }
      isSwiping = false;
    }
  });

  carouselSlide.addEventListener("touchend", () => {
    isSwiping = false;
  });

  // === FULLSCREEN FUNKCE ===
  function toggleFullscreen() {
    carousel.classList.toggle("fullscreen");
  }

  // Připoj event listener na fullscreen tlačítko, pokud máš
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", toggleFullscreen);
  }
});





