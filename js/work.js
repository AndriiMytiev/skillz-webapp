import data from "../data/workshops.js";
import createListMarkup from "./helpers/createList.js";
import refs from "./refs.js";

const { overlay, content, workshopBlock } = refs;
const previewArray = data.slice(0, 3);
const previewList = createListMarkup(previewArray, createItem, "workshopList");
workshopBlock.insertAdjacentHTML("afterbegin", previewList);
const openModal = document.querySelector(".button.btnViewAllW");

openModal.addEventListener("click", () => {
  const list = createListMarkup(data, createItem, "workshopModalList");
  content.insertAdjacentHTML("afterbegin", list);
  overlay.classList.remove("ifHidden");
});
overlay.addEventListener("click", (event) => {
  if (event.target.classList.contains("overlay")) {
    overlay.classList.add("ifHidden");
    content.removeChild(document.querySelector(".workshopModalList"));
  }
});

function createItem(el) {
  return `<li class='${el.id}'>
                      <h1>${el.title}</h1>
                      <p>${el.description}</p>
                       <button type='button'>${el.linkLabel}</button>
                  </li>`;
}
