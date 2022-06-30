import data from '../data/courses.js';
import refs from './refs.js';

const {overlay, content} = refs;

const newElement = `<div class='coursesListBlock'>
                        <ul class='courseList'></u>
                    </div>`;

document.getElementById('courses').insertAdjacentHTML('beforeend', newElement);

for(let i = 0; i < 3; i++){
    let listElement = createElement(i);
    document.querySelector('.courseList').insertAdjacentHTML('beforeend', listElement);
}

function createElement(id){
    return `<li class='${data[id].id}'>
                <img src='${data[id].image}' width='393px'>
                <div class="paddingText">
                <p class="label">${data[id].label}</p>
                <p>${data[id].tutor}</p>
                <p class="price">${data[id].prices.regularPrice}</p>
                <button type='button' class='buttonMore'>${data[id].linkLabel}</button>
                </div>
            </li>`
}






//modalwindow
//function createModalList(data) { 
    // return data.map((el) => {
        // return `<li class='${el.id}'>
                    // <img src='${el.image}' width='200px'>
                    // <p>${el.prices.regularPrice}</p>
                    // <p>${el.label}</p>
                    // <p>${el.tutor}</p>
                    // <button type='button'>${el.linkLabel}</button>
                // </li>`
        // }).join(''); 
// }