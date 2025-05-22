const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => { slide.style.display = 'none' });

    if (index >= slides.length) currentSlide = 0;

    else if (index < 0) currentSlide = slides.length - 1;

    else currentSlide = index;

    slides[currentSlide].style.display = "block";
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

showSlide(currentSlide);
