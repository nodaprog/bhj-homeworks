"use strict";

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const holes = document.getElementsByClassName("hole");

function reload() {
    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i = 1; i <= holes.length; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            if (+dead.textContent >= 9) {
                alert('win');
                reload();
            } else {
                dead.textContent = +dead.textContent + 1;
            }
        } else {
            if (+lost.textContent >= 99) {
                alert('lost');
                reload();
            } else {
                lost.textContent = +lost.textContent + 1;
            }
        }
    };
}
