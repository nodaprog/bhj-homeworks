'use strict';

const textarea = document.querySelector('#editor');
const btn = document.querySelector('#reset');

if (localStorage.getItem('text'))
{
    textarea.value = localStorage.getItem('text');
} 

textarea.addEventListener('keyup', (evt) => {
    evt.preventDefault();
    if (evt.keyCode === 13)
    {
        localStorage.clear();
        localStorage.setItem('text', textarea.value);
    }
})


btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    textarea.value = '';
})
