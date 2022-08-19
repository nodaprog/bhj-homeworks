'use strict';

const links = document.querySelectorAll('.menu__link');


function showMenu() 
{
    const active = document.querySelector('.menu_active');
    if (active !== null) 
    {
        active.classList.toggle('menu_active');
        if (this.nextElementSibling) return false;
    }

    if (active !== this.nextElementSibling) 
    {
        this.nextElementSibling.classList.toggle('menu_active');
        return false;
    }
}

links.forEach(elem => elem.onclick = showMenu);
