import refs from "./refs.js";

const {
    btnLearnMore, btnAboutSkills, btnCloseModal, btnContactUs,
    modal, modalWrap, modalAbout, modalAboutWrap, modalContactUs, modalContactUsWrap,
    act,
} = refs;

btnLearnMore.addEventListener('click', showModal);

btnAboutSkills.addEventListener('click', showModalAbout);

btnContactUs.addEventListener('click', showModalContactUs);


function showModal(e){

    modal.style.opacity = '1';
    modal.style.transition = 'all 300ms ease-in-out';

    modal.style.pointerEvents = "auto";
    modalWrap.style.opacity = '1';
    modalWrap.style.transform = 'scale(1)';

    modalWrap.style.transition = 'opacity 250ms 500ms ease, transform 350ms 500ms ease';
    // if(!e.target.closest('.btnLEarnMore')){
    // console.log(e.target);}
    console.log('modal');
};

function showModalAbout(e){

    // console.log(act);
    // return;
    modalAbout.style.opacity = '1';
    modalAbout.style.transition = 'all 300ms ease-in-out';

    modalAbout.style.pointerEvents = "auto";
    modalAboutWrap.style.opacity = '1';
    modalAboutWrap.style.transform = 'scale(1)';

    modalAboutWrap.style.transition = 'opacity 250ms 500ms ease, transform 350ms 500ms ease';
    // if(!e.target.closest('.btnLEarnMore')){
    // console.log(e.target);}
    console.log('modalAbout');
};

function showModalContactUs(e){

    // console.log(act);
    // return;
    modalContactUs.style.opacity = '1';
    modalContactUs.style.transition = 'all 300ms ease-in-out';

    modalContactUs.style.pointerEvents = "auto";
    modalContactUsWrap.style.opacity = '1';
    modalContactUsWrap.style.transform = 'scale(1)';

    modalContactUsWrap.style.transition = 'opacity 250ms 500ms ease, transform 350ms 500ms ease';
    // if(!e.target.closest('.btnLEarnMore')){
    // console.log(e.target);}
    console.log('modalAbout');
};

function closeModal(e){
    modal.style.opacity = '0';
    modalAbout.style.opacity= '0';
    modalContactUs.style.opacity= '0';
    modal.style.transition = 'opacity 250ms 700ms ease';
    modal.style.pointerEvents = "none";
    modalAbout.style.transition = 'opacity 250ms 700ms ease';
    modalAbout.style.pointerEvents = "none";
    modalContactUs.style.transition = 'opacity 250ms 700ms ease';
    modalContactUs.style.pointerEvents = "none";
}

document.addEventListener('keydown', (e) =>{
    if(e.keyCode == 27){
        closeModal();
    }
});



//Close modal by click on place around modal wrapper
modal.addEventListener('click', closeModal, {"capture": false});

//Close modal by click on place around modal wrapper
modalAbout.addEventListener('click', closeModal, {"capture": false});

//Close modal by click on place around modal wrapper
modalContactUs.addEventListener('click', closeModal, {"capture": false});

//Close modal by click on close modal button
btnCloseModal.addEventListener('click', closeModal, {"capture": false});

//prevent modal close by click on modal wrapper
modalWrap.addEventListener('click', (e) =>{
    // console.log('modalWrap');
    e.stopPropagation();
});

//prevent modal close by click on modal wrapper
modalAboutWrap.addEventListener('click', (e) =>{
    // console.log('modalWrap');
    e.stopPropagation();
});

modalContactUsWrap.addEventListener('click', (e) =>{
    // console.log('modalWrap');
    e.stopPropagation();
});