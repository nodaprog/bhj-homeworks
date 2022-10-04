'use strict';

const title = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

let answers = [];
let stats = [];
let id = 0;

function clear(elem)
{
    elem.innerHTML = '';
}

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    clear(pollAnswers);
    
    if (xhr.readyState === xhr.DONE)
    {
        title.innerHTML = JSON.parse(xhr.responseText).data.title;
        answers = JSON.parse(xhr.responseText).data.answers;
        id = JSON.parse(xhr.responseText).id;
        
        answers.forEach(answer => {
            pollAnswers.innerHTML +=   `<button class="poll__answer">
                                            ${answer}
                                        </button>
                                        `

        })  
    }

    const buttons = document.querySelectorAll('.poll__answer');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Спасибо, ваш ответ принят!');
            
            let index = Array.from(buttons).indexOf(btn);

            const xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', () => {
                if (xhr.readyState === xhr.DONE)
                {
                    clear(pollAnswers);
                    
                    stats = JSON.parse(xhr.responseText).stat;
                    
                    let total = 0;
                    
                    stats.forEach(stat => {
                        total += stat.votes;
                    })

                    stats.forEach(stat => {
                        pollAnswers.innerHTML +=    `<div class="stat">
                                                        <div>${stat.answer}:&nbsp;</div>
                                                        <div class="bold">${((stat.votes / total) * 100).toFixed(2)}%</div>
                                                    </div>`
                    })
                }
            })

            xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(`vote=${id}&answer=${index}`);
        })
    })
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

