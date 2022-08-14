'use strict';

const timer = document.getElementById('timer');
let id = setInterval(() => {
    timer.textContent -= 1;
    
    if (timer.textContent < 0) {
        alert('Вы победили в конкурсе!');
        timer.textContent = 10;
        clearInterval(id);
    }
}, 1000)


