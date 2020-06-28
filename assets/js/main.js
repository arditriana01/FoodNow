$(function () {
    var navbarCollapse = function () {
        if ($('#mainNav').offset().top > 100) {
            $('#mainNav').addClass('navbar-shrink');
        } else {
            $('#mainNav').removeClass('navbar-shrink');
        }
    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})

jQuery(document).ready(function ($) {
    $('a[data-rel^=lightcase]').lightcase();
});


