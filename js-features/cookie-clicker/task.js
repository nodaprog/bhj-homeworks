"use strict";

const clicker_counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("speed");
let counter = +clicker_counter.textContent;
let start = 0;
let end = 0;

function clickerCounter() {
	counter++;
	clicker_counter.textContent = counter;
}
function clickTimer() {
	start = end;
	end = new Date();
	let result = 1000 / (end - start);
	speed.textContent = result.toFixed(2);
}
function changeSize() {
	if (counter % 2 !== 0) {
		cookie.width += 20;
	} else {
		cookie.width -= 20;
	}

	clickerCounter();
	clickTimer();
} 

cookie.onclick = changeSize;
