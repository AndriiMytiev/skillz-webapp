import "./data/courses.js";
import "./js/cors.js";
import "./js/modalForEmail.js";
import "./js/modalForCartIcon.js";
import "./js/modalHeroAbout.js";
import "./js/response.js";
import "./js/work.js";

window.addEventListener("keydown", (e) => {
  e.code === "Escape" && overlay.classList.add("ifHidden");
});
