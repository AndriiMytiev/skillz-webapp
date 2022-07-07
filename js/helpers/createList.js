export default function createListMarkup(array, callback, className) {
    const items = array.map((item) => callback(item)).join("");
    return `<ul class="${className}">${items}</ul>`;
  }