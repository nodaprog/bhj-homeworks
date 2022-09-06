'use strict';

const interests = document.querySelectorAll('.interest');

interests.forEach((el) => {
    const elems = el.querySelectorAll('.interest__check');

    elems[0].addEventListener('change', func);

    function func(elem) {
        if (elem.currentTarget.checked) {
            elems.forEach((elem) => (elem.checked = true));
        } else if (!elem.currentTarget.checked) {
            elems.forEach((elem) => (elem.checked = false));
        }
    }
});
