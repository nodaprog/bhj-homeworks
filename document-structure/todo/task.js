'use strict';

const form = document.querySelector('#tasks__form');
const input = document.querySelector('#task__input');
const list = document.querySelector('#tasks__list');

form.addEventListener('submit', addTask)
list.addEventListener('click', deleteTask);

if (localStorage.getItem('task'))
{
    list.innerHTML = localStorage.getItem('task');
}


function addTask(evt)
{
    evt.preventDefault();
    const task = `<div class="task">
                    <div class="task__title">${input.value}</div>
                    <a href="#" class="task__remove">&times;</a>
                </div>`

    if (input.value !== '')
    {
        list.insertAdjacentHTML('beforeend', task);
    }
    
    input.value = '';
    input.focus();

    saveHTML();
}

function deleteTask(evt)
{
    if (evt.target.className === 'task__remove')
    {
        let parent = evt.target.closest('.task');
        parent.remove();
    }

    saveHTML();
}


function saveHTML()
{
    localStorage.setItem('task', list.innerHTML);
}