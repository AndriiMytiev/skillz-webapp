import refs from "./refs.js";

const {
    btnLearnMore, btnAboutSkills, stars
} = refs;

btnLearnMore.addEventListener('click', (e) => {
    console.log(e.target);
});

btnAboutSkills.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(stars);
    console.log(stars[0]);
});
