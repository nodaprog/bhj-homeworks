'use strict';

const controls = document.querySelectorAll('.font-size');
const content = document.querySelector('.book__content');

for (let i = 0; i < controls.length; i++) 
{
    controls[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (controls[i].dataset.size === 'small')
        {
            content.classList.remove('book_fs-big');
            content.classList.toggle('book_fs-small');
        }
        else if (controls[i].dataset.size === 'big')
        {
            content.classList.remove('book_fs-small');
            content.classList.toggle('book_fs-big');
        }
        else {
            content.classList.remove('book_fs-small');
            content.classList.remove('book_fs-big');
        }
    })
}