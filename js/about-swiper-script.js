"use strict";

new Swiper('.gallery-top', {
    loop: true,
    navigation: {
        nextEl: '.swiper-custom-button--right',
        prevEl: '.swiper-custom-button--left',
    },
    thumbs: {
        swiper: {
            el: '.gallery-thumbs',
            spaceBetween: 30,
            slidesPerView: 4,
            slideToClickedSlide: true,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});

