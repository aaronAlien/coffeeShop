
    // HAMBURGER MENU

document.getElementById("hamburger-btn").addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-left ul");
  navMenu.classList.toggle("active");
});

    // HERO - CAROUSEL

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-image');

    let currentIndex = 0;

    function nextSlide() {
        //remove
        slides[currentIndex].classList.remove('active');

        //update
        currentIndex = (currentIndex + 1) % slides.length;

        //add
        slides[currentIndex].classList.add('active');
    }

    setInterval(nextSlide, 3000);
})


    // MODAL






// https://placehold.co/600x400
