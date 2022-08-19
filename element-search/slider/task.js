'use strict';

const slides = document.querySelectorAll('.slider__item');
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const dots = document.querySelectorAll('.slider__dot');

let index = 0;

const activeSlide = function (n) 
{
    for (let slide of slides) 
    {
        slide.classList.remove('slider__item_active');
    }
    slides[n].classList.add('slider__item_active');
}

const activeDot = function (n) 
{
    for (let dot of dots) 
    {
        dot.classList.remove('slider__dot_active');
    }
    dots[n].classList.add('slider__dot_active');
}

const prepareCurrentSlide = function (ind)
{
    activeSlide(ind);
    activeDot(ind);
}

function nextSlide () 
{
    if (index === slides.length - 1)
    {
        index = 0;
        prepareCurrentSlide(index);
    }
    else 
    {
        index++;
        prepareCurrentSlide(index);
    }
}

function prevSlide () 
{
    if (index === 0)
    {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }
    else 
    {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.onclick = function() 
    {
        index = indexDot;
        prepareCurrentSlide(index);
    }
})

next.addEventListener('click', nextSlide);
prev.onclick = prevSlide;

setInterval(nextSlide , 2000);