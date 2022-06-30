import refs from "./refs.js";

const {
    btnLearnMore, btnAboutSkills, btnCloseModal,
    modal, modalWrap,
    act,
} = refs;

btnLearnMore.addEventListener('click', showModal);

btnAboutSkills.addEventListener('click', showModal);


function showModal(e){

    console.log(act);
    // return;
    modal.style.opacity = '1';
    modal.style.transition = 'all 300ms ease-in-out';

    modal.style.pointerEvents = "auto";
    modalWrap.style.opacity = '1';
    modalWrap.style.transform = 'scale(1)';

    modalWrap.style.transition = 'opacity 250ms 500ms ease, transform 350ms 500ms ease';
    // if(!e.target.closest('.btnLEarnMore')){
    // console.log(e.target);}
}

function closeModal(e){
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 250ms 700ms ease';
    modal.style.pointerEvents = "none";
}

document.addEventListener('keydown', (e) =>{
    if(e.keyCode == 27){
        closeModal();
    }
})

// hero.addEventListener('click', (e) =>{
//     console.log('hero');
//     e.stopPropagation();
// })

//Close modal by click on place around modal wrapper
modal.addEventListener('click', closeModal, {"capture": false});

//Close modal by click on close modal button
btnCloseModal.addEventListener('click', closeModal, {"capture": false});

//prevent modal close by click on modal wrapper
modalWrap.addEventListener('click', (e) =>{
    // console.log('modalWrap');
    e.stopPropagation();
});
