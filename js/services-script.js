"use strict";

const servicesListRef = document.querySelector('.js-services-list');

servicesListRef.addEventListener('click', e => {
    const servicesItemsRef = document.querySelectorAll('.js-services-list > li');
    const contentItems = document.querySelectorAll('.js-services-content > div');
    const cursorTarget = e.target;

    servicesItemsRef.forEach(item => {
        if (item.classList.contains('services-item--active')) {
            item.classList.remove('services-item--active');
        }
    })

    cursorTarget.classList.add('services-item--active');

    contentItems.forEach(item => {
        item.classList.remove('services-description--active');
        item.classList.add('services-description--hide');
        if (item.dataset.services.toLowerCase() === cursorTarget.dataset.services.toLowerCase()) {
            item.classList.remove('services-description--hide');
            item.classList.add('services-description--active');
        }
    })
});