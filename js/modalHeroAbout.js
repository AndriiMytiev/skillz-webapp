import comments from "../data/comments.js";
import refs from "./refs.js";

const {
    btnLearnMore, btnAboutSkills, modal, modalWrap
} = refs;

btnLearnMore.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(modalWrap);
    console.log(modal);

    modal.style.opacity = '1';
    modal.style.transition = 'all 300ms ease-in-out';

    modalWrap.style.opacity = '1';
    modalWrap.style.transform = 'scale(1)';
    modalWrap.style.transition = 'opacity 250ms 500ms ease, transform 350ms 500ms ease';
});

modal.addEventListener('click', )

btnAboutSkills.addEventListener('click', (e) => {
    console.log(e.target);
});
