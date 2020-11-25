"use strict"

const container = document.querySelector('.grid');
const imagesLoadBtnRef = document.querySelector('.js-img-btn');
const imagesPreloaderRef = document.querySelector('.js-images-preloader');
const hiddenGridItemsRef = document.querySelectorAll('.grid-item__img--hidden');

console.log(hiddenGridItemsRef);

let msnry;

imagesLoaded( container, function() {
    msnry = new Masonry(container, {
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true,
    });
});

imagesLoadBtnRef.addEventListener('click', () => {

    imagesLoadBtnRef.classList.add('preloader--hide');
    imagesPreloaderRef.classList.remove('preloader--hide');

    setTimeout(() => {
        imagesPreloaderRef.classList.add('preloader--hide');
        imagesLoadBtnRef.classList.remove('preloader--hide');
        container.style.height = '1790px';
        hiddenGridItemsRef.forEach(item => {
            item.classList.remove('grid-item__img--hidden');
            item.classList.add('grid-item__img--fade');
        })

        imagesLoadBtnRef.remove();
        imagesPreloaderRef.remove();

    }, 2000);

});
