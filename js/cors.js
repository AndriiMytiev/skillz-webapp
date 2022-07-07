import data from "../data/courses.js";
import refs from "./refs.js";
import createList from "./helpers/createList.js";

const { overlay, content } = refs;
const newElement = `<div class='coursesListBlock'></div>`;
document.getElementById("courses").insertAdjacentHTML("beforeend", newElement);
const previewArray = data.slice(0, 3);
const previewList = createList(previewArray, createItem, "coursesList");
const coursesBlock = document.querySelector(".coursesListBlock");
coursesBlock.insertAdjacentHTML("afterbegin", previewList);
const openModal = document.querySelector(".button.btnViewAll");

openModal.addEventListener("click", () => {
  const list = createList(data, createItem, "coursesModalList");
  content.insertAdjacentHTML("afterbegin", list);
  overlay.classList.remove("ifHidden");
});

overlay.addEventListener("click", (event) => {
  if (event.target.classList.contains("overlay")) {
    overlay.classList.add("ifHidden");
    content.innerHTML = "";
  }
});
function createItem(el) {
  return `<li class='${el.id}'>
  <img src='${el.image}' width='373px'>
  <p clas="price">${el.prices.regularPrice}</p>
   <p class="label">${el.label}</p>
  <p class="tutor">${el.tutor}</p>
   <button type='button'>${el.linkLabel}</button>
</li>`;
}
