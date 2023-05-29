const nav = document.querySelector(".header__nav");
const btn = document.querySelector(".header__burger");
const lists = document.querySelectorAll(".header__list");
const body = document.querySelector('body');
const btnSign = document.querySelector(".btn-sign");
const btnSteam = document.querySelector(".btn-3");
const btnUser = document.querySelector(".btn-15");
const title = document.querySelector(".new-text");
const logout = document.querySelector(".logout");
const coins = document.querySelector(".block-list");
const numberCoins = document.querySelector(".link-coin");
// Send Messege
const userName = document.querySelector(".name");
const userMessege = document.querySelector(".messege");
const sendMessege = document.querySelector(".btn-contact");
const token = "6046178440:AAHUC9l6HTPjtggXqEbo-aO8CyCDv6LKmqA";
const admin = 5189048174;

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
    try {
        if (localStorage.getItem('NameCSGO').length > 0 && localStorage.getItem('LoginCSGO').length > 0) {
            title.textContent = localStorage.getItem('NameCSGO');
            btnUser.style.display = 'flex';
            coins.style.display = 'flex';
            btnSteam.style.display = 'none';
            numberCoins.textContent = localStorage.getItem('MoneyCSGO');
        } else {
            console.log("true");
        }
    } catch (error) {
        console.log(error);
    }
}

newText()

logout.addEventListener("click", () => {
    delete localStorage.NameCSGO;
    delete localStorage.LoginCSGO;
    delete localStorage.PasswordCSGO;
    delete localStorage.MoneyCSGO;
    location.reload();
})

sendMessege.addEventListener("click", async (e) => {
    e.preventDefault()
    try {
        if (userName.value.length > 0 && userMessege.value.length > 0) {
            const messege = `User Messege: %0A <strong> 👤 User name: </strong> ${userName.value} %0A <strong> 📧 User Messege: </strong> ${userMessege.value}`;
            await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${admin}&text=${messege}&parse_mode=html`);
            sendMessege.textContent = `✅ Send`;
            userName.value = "";
            userMessege.value = "";
        } else {
            sendMessege.textContent = `❌ Send`
        }
    } catch (error) {
        console.log(error);
    }

})