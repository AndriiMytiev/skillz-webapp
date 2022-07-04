import refs from "./refs.js";
import createEmailModal from "./helpers/createModalContent.js";
import hideModal from "./helpers/hideModalWindow.js"

const {overlay, content, emailInput, emailButton, sendEmailBlock} = refs;

const emailPattern = '^[A-z]+@([A-z][-A-z]+.)+[A-z]{2,4}$';

const errorPrompt = '<span class="emailErrorMesage ifHidden">* Invalid email entered</span>'

sendEmailBlock.insertAdjacentHTML('beforeend', errorPrompt);

const emailInvalidEmail = document.querySelector('.emailErrorMesage');

const errorMessage = {
    title: 'Invalid email entered',
    image: './img/footer/error_email_image.jpg',
    text: 'You entered an incorrect email address or left the field blank. Please enter valid data if you want to receive our newsletter.',
    author: 'Site administration'
}

const successfulMessage = {
    title: 'Email saved successfully',
    image: './img/footer/successful_email_image.jpg',
    text: 'You have successfully subscribed to our newsletter. Your email is saved in the database. The email you entered: ',
    author: 'Site administration'
}

// check email value
emailInput.addEventListener('input', () => {
    if(!getcheckValue(emailInput, emailPattern)){
        emailInput.style.border = '2px solid red';
        emailInvalidEmail.classList.remove('ifHidden');
    } else {
        emailInput.removeAttribute('style')
        emailInvalidEmail.classList.add('ifHidden');
    }      
})

// open modal window by click on button
emailButton.addEventListener('click', () => {
    overlay.classList.remove('ifHidden');
    content.classList.add('toShowModalContent');
    if(getcheckValue(emailInput, emailPattern)){
        content.insertAdjacentHTML("afterbegin", createEmailModal(successfulMessage, 'emailModalContent', 'emailModalTitle', 'emailModalText', 'emailModalAuthor'));
        document.querySelector('.emailModalText').innerHTML += `<b>${emailInput.value}</b>`;
    } else content.insertAdjacentHTML("afterbegin", createEmailModal(errorMessage, 'emailModalContent', 'emailModalTitle', 'emailModalText', 'emailModalAuthor'));
})

// hide modal window by click on overlay or press escape button
overlay.addEventListener('click', (event) => {
    event.target.classList.contains('overlay') && hideModal('emailModalContent');
    emailInput.value = '';
})

window.addEventListener('keydown', (event) => {
    event.code === 'Escape' && hideModal('emailModalContent');
    emailInput.value = '';
})

function getcheckValue(input, pattern){
    return input.value.match(new RegExp(pattern));
};