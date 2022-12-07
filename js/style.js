// Nav Style
let menu = document.querySelector("#icon-toggle");
let nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
    nav.classList.toggle("active");
});

window.onscroll = () => {
    nav.classList.remove("active");
};