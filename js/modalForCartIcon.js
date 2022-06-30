import refs from "./refs.js";

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
    content.insertAdjacentHTML("afterbegin", createElementOfContent(errorMessage));
    content.style.background = 'white';
    content.style.width = '450px';
    content.style.height = 'fit-content';
    content.style.borderRadius = '5%';
})

// to hide modal window by click on overlay or press escape button
overlay.addEventListener('click', (event) => {
    if(event.target.classList.contains('overlay')){
        overlay.classList.add('ifHidden'); 
        content.removeAttribute('style');
        content.removeChild(document.querySelector('.cartModalContent'));
    }
})

window.addEventListener('keydown', (event) => {
    if(event.code === 'Escape'){
        overlay.classList.add('ifHidden');
        content.removeChild(document.querySelector('.cartModalContent'));
        content.removeAttribute('style');
    }
})

// create new block for content 
function createElementOfContent(data){
    return `<div class='cartModalContent'>
                <p class='errorTitle'>${data.title}</p>
                <img src='${data.image}' width='400px' alt='error'>
                <p class='errorText'>${data.text}</p>
                <p class='errorAuthor'>${data.author}</p>
            </div>`
}