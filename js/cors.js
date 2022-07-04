import data from '../data/courses.js';
import refs from './refs.js';

const {overlay, content} = refs;

const newModalElement = `<div class='coursesModalBlock'>
<ul class='courseModalList'></u>
</div>`;

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



const openModal = document.querySelector('.button.btnViewAll');

openModal.addEventListener('click', () => {
    content.style.width="fit-content";
    content.style.height="fit-content";
  overlay.classList.remove('ifHidden')  
  document.querySelector('.content').insertAdjacentHTML('afterbegin', newModalElement);
  const list =  createModalList(data);
  document.querySelector('.courseModalList').insertAdjacentHTML('beforeend', list);

})

overlay.addEventListener("click", (event) =>{
    if(
    event.target.classList.contains('overlay') ){ overlay.classList.add('ifHidden');
    content.removeChild(document.querySelector('.coursesModalBlock'));
    content.removeAttribute('style');
 }})

window.addEventListener('keydown', (e) =>{
  console.log("DOWN", e.code, e.key);
  console.log(e.code === 'Escape');
if(e.code === 'Escape'){
  overlay.classList.add('ifHidden');
}


  e.code === 'Escape' && overlay.classList.add('ifHidden');
})





function createModalList(data) { 
    return data.map((el) => {
         return `<li class='${el.id}' wi>
                    <img src='${el.image}' width='393px height="197"'>
                    <p>${el.prices.regularPrice}</p>
                     <p>${el.label}</p>
                    <p>${el.tutor}</p>
                     <button type='button'>${el.linkLabel}</button>
                 </li>`
         }).join(''); 
}