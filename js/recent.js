import data from '../data/articles.js';
import createListMarkup from "./helpers/createList.js";
import refs from './refs.js';

const {overlay, content, recentBlock } = refs;
const previewArray = data.slice(0, 3);
const previewList = createListMarkup(previewArray, createItem, "recentList");
recentBlock.insertAdjacentHTML("afterbegin", previewList);
const openModal = document.querySelector(".button.btnViewAllR");

openModal.addEventListener("click", () => {
  const list = createListMarkup(data, createItem, "recentModalList");
  content.insertAdjacentHTML("afterbegin", list);
  overlay.classList.remove("ifHidden");
});
overlay.addEventListener("click", (event) => {
  if(event.target.classlist.contains("overlay")){
    overlay.classList.add("ifHidden");
    content.removeChild(document.querySelector(".recentModalList"));
  }
});

function createItem(el){
  return `<li class='${el.id}'>
  <img src="${el.image}" width="373px">
  <p>${el.label}</p>
   <p>${el.author}</p>
</li>`;
}
