const nav = document.querySelector(".header__nav");
const btn = document.querySelector(".header__burger");
const lists = document.querySelectorAll(".header__list");
const body = document.querySelector('body');
const btnSign = document.querySelector(".btn-sign")

btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
});

lists.forEach((elem) => {
    elem.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
});

btnSign.addEventListener("click", () => {
    function openPage() {
        window.location.href = '.././Registration/CSGO-Login/';
    };
    openPage();
})