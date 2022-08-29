'use strict';

// tab tab_active
// tab__content_active

const tabs = document.querySelectorAll('.tab');
const tabs_content = document.querySelectorAll('.tab__content');

let index = 0;

function activeTab (elems) 
{
    for (let elem of elems) 
    {
        elem.classList.remove('tab_active');
    }
}

function activeTabContent (elems) 
{
    for (let elem of elems) 
    {
        elem.classList.remove('tab__content_active');
    }
}

function active (i, str = '') {
    i.classList.add(str);
}

for (let i = 0; i < tabs.length; i++) 
{   
    tabs[i].addEventListener('click', () => {
        index = i;

        activeTab(tabs);
        activeTabContent(tabs_content);

        active(tabs[index], 'tab_active');
        active(tabs_content[index], 'tab__content_active');
        console.log(index);
    })
}