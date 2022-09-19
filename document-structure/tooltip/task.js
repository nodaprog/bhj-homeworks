'use strict';

const tooltip = document.querySelectorAll('.has-tooltip');

tooltip.forEach(elem => {
    let title = elem.getAttribute('title');
    let div = document.createElement('div');
    
    div.className = 'tooltip';
    div.innerText = title;
    
    elem.appendChild(div);
    
    elem.addEventListener('click', (evt) => {
        evt.preventDefault();

        let getElemCoords = elem.getBoundingClientRect();
        div.style.top = getElemCoords.top + 20 + 'px';
        div.style.left = getElemCoords.left + 'px';

        let active = document.querySelector('.tooltip_active');
        
        if (active) 
        {
            active.classList.remove('tooltip_active');
        }
        else
        {
            div.classList.toggle('tooltip_active');
        }
        
    })
})