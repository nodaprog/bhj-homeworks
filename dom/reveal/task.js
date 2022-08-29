'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const reveal = document.querySelector('.reveal');
    window.addEventListener('scroll', () => {
        const viewport = window.innerHeight;
        const elemTop = reveal.getBoundingClientRect().top;
        const elemBottom = reveal.getBoundingClientRect().bottom;

        if (elemTop < (viewport / 2))
        {
            reveal.classList.add('reveal_active');  
        }
        if (elemBottom < (viewport / 3) || elemTop > (viewport / 1.5))
        {
            reveal.classList.remove('reveal_active');
        }
    })

})