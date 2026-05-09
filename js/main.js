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


    const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const terms = document.getElementById("terms").checked;

  if (!terms) {
    alert("You must accept the terms and conditions.");
    return;
  }

  console.log({
    name,
    email,
    phone,
    message
  });

  alert("Message sent successfully!");

  form.reset();
});