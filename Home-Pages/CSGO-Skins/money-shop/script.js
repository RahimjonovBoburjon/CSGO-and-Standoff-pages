const coinText = document.querySelector(".coin-text");
const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const btn4 = document.querySelector(".four");

function coinsNumber() {
    coinText.textContent = localStorage.getItem('MoneyCSGO');
};

coinsNumber()

btn1.addEventListener("click", () => {
    const numberCoins = Number(localStorage.getItem('MoneyCSGO')) + 2;
    localStorage.setItem('MoneyCSGO', numberCoins);
    function openPage() {
        window.location.href = '../';
    };
    openPage();
})

btn2.addEventListener("click", () => {
    const numberCoins = Number(localStorage.getItem('MoneyCSGO')) + 20;
    localStorage.setItem('MoneyCSGO', numberCoins);
    function openPage() {
        window.location.href = '../';
    };
    openPage();
})

btn3.addEventListener("click", () => {
    const numberCoins = Number(localStorage.getItem('MoneyCSGO')) + 100;
    localStorage.setItem('MoneyCSGO', numberCoins);
    function openPage() {
        window.location.href = '../';
    };
    openPage();
})

btn4.addEventListener("click", () => {
    const numberCoins = Number(localStorage.getItem('MoneyCSGO')) + 200;
    localStorage.setItem('MoneyCSGO', numberCoins);
    function openPage() {
        window.location.href = '../';
    };
    openPage();
})