"use strict";

const worksListRef = document.querySelector('.works-list');
const loadBtnRef = document.querySelector('.load-btn');
const firstPageItems = document.querySelectorAll('.works-content__item:nth-child(-n+12)');
const secondPageItems = document.querySelectorAll('.works-content__item:nth-child(n+13):nth-child(-n+24)');
const thirdPageItems = document.querySelectorAll('.works-content__item:nth-child(n+25)');
const firstAndSecondPageItems = document.querySelectorAll('.works-content__item:nth-child(-n+24)');
const allPageItems = document.querySelectorAll('.works-content__item');

const preloaderRef = document.querySelector('.preloader');

let clickedBtnCounter = 0;

worksListRef.addEventListener('click', e => {
    const worksItemsRef = document.querySelectorAll('.works-item');
    worksItemsRef.forEach(item => {
        if (item.classList.contains('works-item--active')) {
            item.classList.remove('works-item--active');
        }
        e.target.classList.add('works-item--active');
    })

    const fadingItems = items => {
        items.forEach(item => {
            const targetElAttribute = e.target.dataset.works;
            const elAttribute = item.dataset.works;

            if (elAttribute === targetElAttribute && targetElAttribute !== 'all') {
                item.classList.remove('works-content__item--hidden');
                item.classList.add('works-content__item--fade');
                loadBtnRef.classList.add('works-content__item--hidden');
            } else {
                item.classList.add('works-content__item--hidden');
            }

            if (targetElAttribute === 'all') {
                item.classList.remove('works-content__item--hidden');
                item.classList.add('works-content__item--fade');
                loadBtnRef.classList.remove('works-content__item--hidden');
            }
        })
    }

    if (clickedBtnCounter === 0) {
        fadingItems(firstPageItems);
    } else if (clickedBtnCounter === 1) {
        fadingItems(firstAndSecondPageItems);
    } else {
        fadingItems(allPageItems);
    }
});

loadBtnRef.addEventListener('click', () => {
    loadBtnRef.classList.add('preloader--hide');
    preloaderRef.classList.remove('preloader--hide');

    setTimeout(() => {
        preloaderRef.classList.add('preloader--hide');
        loadBtnRef.classList.remove('preloader--hide');

        const removeHidden = items => {
            items.forEach(item => item.classList.remove('works-content__item--hidden'));
        }

        if (clickedBtnCounter === 0) {
            removeHidden(secondPageItems)
        } else {
            removeHidden(thirdPageItems)
            loadBtnRef.remove();
            preloaderRef.remove();
        }
        clickedBtnCounter++;
    }, 2000);
});

