// Function to scroll carousel to specific slide
function scrollToSlide(slideIndex) {
    const carousel = document.getElementById('carouselScroll');
    const slideWidth = carousel.offsetWidth;
    carousel.scrollLeft = slideWidth * slideIndex;
}

// Add smooth scrolling
function scrollToSlideSmooth(slideIndex) {
    const carousel = document.getElementById('carouselScroll');
    const slideWidth = carousel.offsetWidth;
    carousel.scrollTo({
        left: slideWidth * slideIndex,
        behavior: 'smooth'
    });
}