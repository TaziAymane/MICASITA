// Product page categorie swiper 

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        grabCursor: true,
    });

    // Handle active state
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.addEventListener('click', function () {
            document.querySelectorAll('.swiper-slide').forEach(s => {
                s.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});