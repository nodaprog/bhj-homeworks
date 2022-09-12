'use strict';

const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach((elem) => {
    elem.addEventListener('click', (evt) => {
        evt.preventDefault();
        const active = document.querySelector('.tooltip_active');

        if (active) {
            active.remove();
        }

        const getElemCoords = elem.getBoundingClientRect();

        let div = document.createElement('div');
        div.innerText = elem.getAttribute('title');
        div.className = 'tooltip';
        div.classList.add('tooltip_active');

        div.style.top = getElemCoords.top + 20 + 'px';
        div.style.left = getElemCoords.left + 'px';

        elem.appendChild(div);
    });
});
