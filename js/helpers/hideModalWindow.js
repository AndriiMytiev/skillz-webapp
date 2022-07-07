import refs from "../refs.js";
const {overlay, content} = refs;

export default function hideModalWindow(elementClass){
    overlay.classList.add('ifHidden');
    content.classList.remove('toShowModalContent');
    content.removeChild(document.querySelector(`.${elementClass}`));
}