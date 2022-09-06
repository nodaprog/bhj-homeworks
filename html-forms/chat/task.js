'use strict';

const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

let arr = [];

const bot_messages = [
    'Да ты что?',
    'Иди в лес, кури',
    'Может бахнем?',
    'Кто о чем, а ты о своем!',
    "Let's get a show!",
    'Лучше звоните Саше!',
];

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
});

function scrollToLastMessage()
{
  const allMessages = document.querySelectorAll('.message');
  allMessages[allMessages.length - 1].scrollIntoView({block: "center", behavior: "smooth"})
}


function sendBotMessage(arr) 
{
    let randomeMessage = Math.floor(Math.random() * arr.length);
    setTimeout(() => {
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${new Date().toLocaleTimeString()}</div>
          <div class="message__text">
            ${arr[randomeMessage]}
          </div>
        </div>
      `;
      scrollToLastMessage();
    }, 2000);
}

function sendMessage(event) 
{
    if (event.code === 'Enter') 
    {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${new Date().toLocaleTimeString()}</div>
          <div class="message__text">
            ${input.value}
          </div>
        </div>
      `;
        input.value = '';
        sendBotMessage(bot_messages);
        scrollToLastMessage();
    }
}

input.addEventListener('keydown', sendMessage);

