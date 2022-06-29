import refs from "./refs.js";

const {overlay, content, cartBtn} = refs;

cartBtn.addEventListener('click', () => {
    overlay.classList.remove('ifHidden');
})