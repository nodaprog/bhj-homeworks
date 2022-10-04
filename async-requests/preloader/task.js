'use strict';

const items = document.querySelector('#items');
const loader = document.querySelector('#loader');
let valutes = {};

if (localStorage.getItem('valutes'))
{
    loader.classList.remove('loader_active');
    valutes = JSON.parse(localStorage.getItem('valutes'));
    for (let key in valutes)
    {
        items.innerHTML += `<div class="item">
                                <div class="item__code">
                                    ${valutes[key].CharCode}
                                </div>
                                <div class="item__value">
                                    ${valutes[key].Value}
                                </div>
                                <div class="item__currency">
                                    руб.
                                </div>
                            </div>`
    }

    localStorage.clear();
}
else
{
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE)
        {
            loader.classList.remove('loader_active');
            valutes = JSON.parse(xhr.responseText).response.Valute;
            
        }
    
        for (let key in valutes)
        {
            items.innerHTML += `<div class="item">
                                    <div class="item__code">
                                        ${valutes[key].CharCode}
                                    </div>
                                    <div class="item__value">
                                        ${valutes[key].Value}
                                    </div>
                                    <div class="item__currency">
                                        руб.
                                    </div>
                                </div>`
        }
        localStorage.setItem('valutes', JSON.stringify(valutes));
    })
    
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();
}




