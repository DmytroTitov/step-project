"use strict";

const worksListRef = document.querySelector('.works-list');
const loadBtnRef = document.querySelector('.load-btn');
const firstPageItems = document.querySelectorAll('.works-content__item:nth-child(-n+12)');
const secondPageItems = document.querySelectorAll('.works-content__item:nth-child(n+13):nth-child(-n+24)');
const firstAndSecondPageItems = document.querySelectorAll('.works-content__item:nth-child(-n+24)');

let clickedBtn = false;

worksListRef.addEventListener('click', e => {

    const fadingItems = items => {
        items.forEach(item => {
            const targetElAttribute = e.target.dataset.works;
            const elAttribute = item.dataset.works;

            if (elAttribute === targetElAttribute && targetElAttribute !== 'all') {
                item.classList.remove('works-content__item--hidden');
                item.classList.add('works-content__item--fade');
                loadBtnRef.setAttribute('disabled', 'disabled');
            } else {
                item.classList.add('works-content__item--hidden');
            }

            if (targetElAttribute === 'all') {
                item.classList.remove('works-content__item--hidden');
                item.classList.add('works-content__item--fade');
                loadBtnRef.removeAttribute('disabled');
            }
        })
    }

    if (!clickedBtn) {
        fadingItems(firstPageItems);
    } else {
        fadingItems(firstAndSecondPageItems);
    }
});

loadBtnRef.addEventListener('click', () => {
    clickedBtn = true;
    secondPageItems.forEach(item => {
        item.classList.remove('works-content__item--hidden');
    });

    loadBtnRef.remove();

})