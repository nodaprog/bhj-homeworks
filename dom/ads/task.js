'use strict';

const cases = document.querySelectorAll('span.rotator__case');
let counter = 0;

function removeClass ()
{
    const activeCase = document.querySelector('.rotator__case_active');
    activeCase.classList.remove('rotator__case_active');
}

function addActive ()
{
    if (counter < cases.length)
    {
        removeClass();
        cases[counter].style.color = cases[counter].dataset.color;
        cases[counter].classList.add('rotator__case_active');
        counter++;
    }
    else
    {
        counter = 0;
    }
}



setInterval(addActive, 1000);