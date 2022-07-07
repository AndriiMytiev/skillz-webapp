import refs from "./refs.js";
import createCartModal from "./helpers/createModalContent.js";
import hideModal from "./helpers/hideModalWindow.js"

const {overlay, content, cartBtn} = refs;

const errorMessage = {
    title: 'Such a page does not yet exist',
    image: './img/error_image.jpg',
    text: 'We apologize for the inconvenience. This page does not yet exist, it is under development. Stay with us and follow the news of the site development. Have a nice day.',
    author: 'Site administration'
}

// to show modal window by click on cart icon
cartBtn.addEventListener('click', () => {
    overlay.classList.remove('ifHidden');
    content.classList.add('toShowModalContent');
    content.insertAdjacentHTML("afterbegin", createCartModal(errorMessage, 'cartModalContent', 'errorTitle', 'errorText', 'errorAuthor'));
})

// to hide modal window by click on overlay or press escape button
overlay.addEventListener('click', (event) => {
    event.target.classList.contains('overlay') && hideModal('cartModalContent');
})

window.addEventListener('keydown', (event) => {
    event.code === 'Escape' && hideModal('cartModalContent');
})
