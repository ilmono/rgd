$(document).ready(function() {
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slide: 'div',
        cssEase: 'linear'
    });
});