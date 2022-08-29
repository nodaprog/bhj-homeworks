'use strict';

const dropdown_value = document.querySelector('.dropdown__value');
const dropdown_link = document.querySelectorAll('.dropdown__link');

let dropdown = function () 
{
    this.nextElementSibling.classList.toggle('dropdown__list_active');
};

for (let link of dropdown_link) 
{
    link.addEventListener('click', (evt) => {
        evt.preventDefault();
        dropdown_value.innerHTML = link.textContent;
        if (dropdown_value.nextElementSibling.className.includes('dropdown__list_active'))
        {
            dropdown_value.nextElementSibling.classList.remove('dropdown__list_active');
        }
    });
}

dropdown_value.addEventListener('click', dropdown);
