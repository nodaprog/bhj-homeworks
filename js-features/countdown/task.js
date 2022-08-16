'use strict';

const time = 59;
const timer = document.getElementById('timer');

let id = setInterval(() => {
  timer.textContent -= 1;

  if (timer.textContent < 0) {
    alert('Вы победили в конкурсе!');
    timer.textContent = time;
    clearInterval(id);
  }
}, 1000);
