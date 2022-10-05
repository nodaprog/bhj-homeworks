'use strict';

const signin = document.querySelector('#signin');
const welcome = document.querySelector('#welcome');
const login = document.querySelector('input[type="text"]');
const pass = document.querySelector('input[type="password"]');
const user = document.querySelector('#user_id');
const logout = document.querySelector('#logout__btn');

if (localStorage.getItem('id'))
{
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    user.innerText = localStorage.getItem('id');
} 

document.forms.signin__form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    localStorage.clear();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', (evt) => {
        if (xhr.readyState === xhr.DONE && JSON.parse(xhr.response).success === true)
        {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            user.innerText = JSON.parse(xhr.response).user_id;
            localStorage.setItem('id', JSON.parse(xhr.response).user_id);
        }
        if (xhr.readyState === xhr.DONE && JSON.parse(xhr.response).success === false)
        {
            alert('Неверные логин и пароль!');
        }
    })

    xhr.open('POST', String(evt.target.getAttribute('action')));
    const formData = new FormData(evt.target);
    formData.append('login', login.value);
    formData.append('pass', pass.value);
    xhr.send(formData);
})

logout.addEventListener('click', (evt) => {
    evt.preventDefault();

    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');

    document.forms.signin__form.reset();
    localStorage.clear();
})