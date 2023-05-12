const nav = document.querySelector(".header__nav");
const btn = document.querySelector(".header__burger");
const lists = document.querySelectorAll(".header__list");
const body = document.querySelector('body');
const btnSign = document.querySelector(".btn-sign");
const btnSteam = document.querySelector(".btn-3");
const btnUser = document.querySelector(".btn-15");
const title = document.querySelector(".new-text");
const logout = document.querySelector(".logout");

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


const newText = function () {
    if (localStorage.getItem('NameCSGO').length > 0 && localStorage.getItem('LoginCSGO').length > 0) {
        title.textContent = localStorage.getItem('NameCSGO');
        btnUser.style.display = 'flex';
        btnSteam.style.display = 'none';
    } else {
        console.log("true");
    }
}

newText()

logout.addEventListener("click", () => {
    delete localStorage.NameCSGO;
    delete localStorage.LoginCSGO;
    delete localStorage.PasswordCSGO;
    location.reload();
})