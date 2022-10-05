'use strict';

const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    document.cookie = 'modal=close';
    modal.classList.remove('modal_active');
});

if (document.cookie.length == 0) 
{
    modal.classList.add('modal_active');
}
