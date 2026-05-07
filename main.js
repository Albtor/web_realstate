const slides = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    let currentIndex = 0;

    function updateCarousel() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    setInterval(nextSlide, 5000);