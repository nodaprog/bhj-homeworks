"use strict";

const modal_main = document.getElementById("modal_main");
const modal_close = document.querySelectorAll("div.modal__close");
const show_success = document.querySelector(".show-success");
const modal_success = document.getElementById("modal_success");

function removeClass(elem) {

  elem.classList.remove("modal_active");
  elem.style.overflow = "hidden";

}

function addClass(elem) {

  elem.classList.add("modal_active");

}

addClass(modal_main);

show_success.onclick = () => {

  removeClass(modal_main);
  addClass(modal_success);
  
};

for (let i = 0; i < modal_close.length; i++) {
    
    modal_close[i].onclick = () => {
        let parent = modal_close[i].closest('.modal_active');
        removeClass(parent);
    }
}
