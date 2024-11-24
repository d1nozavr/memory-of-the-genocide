document.querySelectorAll('.topic-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        if (content.style.display === 'block') {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        else {
            content.style.maxHeight = null;
        }
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    if (index >= slides.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = slides.length - 1;
    }

    else {
        currentSlide = index;
    }

    slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

showSlide(currentSlide);