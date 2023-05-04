//////Carousel//////
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items:3,
});

$('.slider__btn--next').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--prev').click(function() {
    owl.trigger('next.owl.carousel');
})

/////////Animation/////

AOS.init({
    duration: 1200,
});

/////////Nav Icon////////

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
    console.log('Click');
    menuIcon.classList.toggle('menu-icon--active');

};
