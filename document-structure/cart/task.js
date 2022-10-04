'use strict';

const addButton = document.querySelectorAll('.product__add');
const minusButton = document.querySelectorAll('.product__quantity-control_dec');
const plusButton = document.querySelectorAll('.product__quantity-control_inc');
const cart = document.querySelector('.cart__products');

addButton.forEach((elem) => {
    elem.addEventListener('click', addProductToCart);
});

let arr = [];

function addProductToCart() {
    const productID = this.closest('.product').dataset.id;
    const productQuantity = +this.closest('.product__quantity').querySelector(
        '.product__quantity-value'
    ).textContent;
    const productImg =
        this.closest('.product').querySelector('.product__image').src;
    const cartProducts = Array.from(cart.querySelectorAll('.cart__product'));

    if (arr.length == 0) {
        arr.push(productID);
    }

    if (arr.length > 0) {
        if (!arr.includes(productID)) {
            arr.push(productID);
        }

        if (arr.includes(productID)) {
            for (let i in cartProducts) {
                if (cartProducts[i].dataset.id == productID) {
                    let x = cartProducts[i].querySelector(
                        '.cart__product-count'
                    );
                    return (x.textContent = +x.textContent + productQuantity);
                }
            }
        }
    }

    return (cart.innerHTML += `
    <div class="cart__product" data-id="${productID}">
      <img class="cart__product-image" src="${productImg}">
      <div class="cart__product-count">${productQuantity}</div>
    </div>
  `);
}

minusButton.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (elem.nextElementSibling.textContent > 1) {
            return --elem.nextElementSibling.textContent;
        }
    });
});

plusButton.forEach((elem) => {
    elem.addEventListener('click', () => {
        return ++elem.previousElementSibling.textContent;
    });
});
