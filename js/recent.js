import data from '../data/articles.js';
import refs from './refs.js';

const {overlay, content} = refs;

const newModalElement = `<div class='recentModalBlock'>
<ul class='recentModalList'></u>
</div>`;

const newElement = `<div class='recentListBlock'>
                        <ul class='recentList'></u>
                    </div>`;

document.getElementById('recents').insertAdjacentHTML('beforeend', newElement);

for(let i = 0; i < 3; i++){
    let listElement = createElement(i);
    document.querySelector('.recentList').insertAdjacentHTML('beforeend', listElement);
}

function createElement(id){
    return `<li class='${data[id].id}'>
                <div class="paddingText">
                <img src ="${data{}}">
                <h1 class="title">${data[id].title}</h1>
                <p class="description">${data[id].description}</p>
                <button type='button' class='buttonMore'>${data[id].linkLabel}</button>
                </div>
            </li>`
}



 const openModal = document.querySelector('.button.btnViewAllR');

 openModal.addEventListener('click', () => {
    content.style.width="fit-content";
    content.style.height="fit-content";
    overlay.classList.remove('ifHidden')  
   document.querySelector('.content').insertAdjacentHTML('afterbegin', newModalElement);
   const list =  createModalList(data);
   document.querySelector('.recentModalList').insertAdjacentHTML('beforeend', list);
 })

 overlay.addEventListener("click", (event) =>{
   if(
     event.target.workshopList.contains('overlay') ){ overlay.classList.add('ifHidden');
     content.removeChild(document.querySelector('.recentModalBlock'));
     content.removeAttribute('style');
  }})

 window.addEventListener('keydown', (e) =>{
   console.log("DOWN", e.code, e.key);
   console.log(e.code === 'Escape');
 if(e.code === 'Escape'){
   overlay.workshopList.add('ifHidden');
 }


   e.code === 'Escape' && overlay.workshopList.add('ifHidden');
 })





 function createModalList(data) { 
     return data.map((el) => {
          return `<li class='${el.id}'>
                      <h1>${el.title}</h1>
                      <p>${el.description}</p>
                      <button type='button'>${el.linkLabel}</button>
                  </li>`
          }).join(''); 
}