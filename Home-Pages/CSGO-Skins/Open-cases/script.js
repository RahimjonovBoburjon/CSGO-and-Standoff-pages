const numberCoins = document.querySelector(".money");
const coin = document.querySelector(".coin");
// OPENER BUTTON
const subtitle = document.querySelector(".subtitle");
const moneyBtn = document.querySelector(".money-btn");
const opener = document.querySelector(".opener");
// BTN
const btnTrue = document.querySelector(".btnTrue");
const btnCoin = document.querySelector(".btnCoin");

function money() {
    numberCoins.textContent = localStorage.getItem('MoneyCSGO');
};
money();

coin.addEventListener("click", () => {
    function coin() {
        window.location.href = '../money-shop/';
    }
    if (localStorage.getItem('MoneyCSGO').length > 0) {
        coin()
    } else {
        return false
    }
})

moneyBtn.addEventListener("click", () => {
    if (localStorage.getItem('MoneyCSGO') >= "10") {
        localStorage.setItem("54601", "true");
        const number = Number(localStorage.getItem('MoneyCSGO')) - 10;
        localStorage.setItem('MoneyCSGO', number);
        location.reload();
    } else {
        localStorage.setItem("54601", "false");
        subtitle.style.display = "block";
    };
});

function validate() {
    if (localStorage.getItem("54601") === "true") {
        moneyBtn.style.display = "none";
        opener.style.display = "block";
        subtitle.style.display = "none";
    } else {
        moneyBtn.style.display = "block";
        opener.style.display = "none";
    };
};

validate()

opener.addEventListener("click", () => {
    localStorage.setItem("54601", "false");
})

function pages() {
    window.location.href = '#open-modal';
}

$(function () {
    var rendertime = 0;
    $('#btn').on('click', function () {

        var right = 0;

        render()
        var count = 0;
        var speed = 50;
        $('.overlay').css('display', 'none');
        opener.style.display = "none";
        var timer = setInterval(function () {

            right += speed
            count++

            $('.slider-wrapper').css('right', right + 'px')
            if (count >= 150) {
                speed = 30
            }
            if (count >= 200) {
                speed = 20
            }
            if (count >= 250) {
                speed = 10
            }
            if (count >= 300) {
                speed = 5
            }
            if (count >= 320) {
                speed = 4
            }
            if (count >= 340) {
                speed = 3
            }
            if (count >= 360) {
                speed = 2
            }
            if (count >= 380) {
                speed = 1
            }
            if (count >= 450) {
                clearInterval(timer)
                rendertime++

                moneyBtn.style.display = "block";

                pages()

                var copy = $.clone($('.swiper-slides')[50])
                $('.return').append(copy)
            }
        }, 20)
    })

})


var gold = `<div class="swiper-slides "><img src="images/1111.webp" class="Icon2"> <span class='card gold'>★ Flip Knife | Freehand</span></div>` // 0.01%
var red = `<div class="swiper-slides"><img src="images/2222.webp" class="Icon2"> <span class='card red'>M4A4 | Desolate Space</span></div>`    // 2.10%
var darkpurple = `<div class="swiper-slides "><img src="images/3333.webp" class="Icon2"> <span class='card dark-purple'>AWP | Phobos</span></div>` // 10.01%
var purple1 = `<div class="swiper-slides "><img src="images/4444.webp" class="Icon2"> <span class='card purple'>AUG | Aristocrat</span></div>`   // 12.02%
var purple2 = `<div class="swiper-slides"><img src="images/5555.webp" class="Icon2"> <span class='card purple'>Sawed-Off | Limelight</span></div>`      // 18.01%
var purple3 = ` <div class="swiper-slides"><img src="images/6666.webp" class="Icon2"> <span class='card purple'>Five-SeveN | Violent Daimyo</span></div`   //25.06%
var blue = `<div class="swiper-slides "><img src="images/7777.webp" class="Icon2"> <span class='card blue'>PP-Bizon | Harvester</span></div> ` //   44.08%




function render() {
    console.log('start')
    $('.slider-wrapper').empty()
    for (var i = 0; i < 60; i++) {

        var num = random();
        if (num == 0.1) {
            $('.slider-wrapper').append(gold)
        } else if (num >= 1 && num <= 3) {
            $('.slider-wrapper').append(red)
        } else if (num >= 4 && num <= 10) {
            $('.slider-wrapper').append(darkpurple)
        } else if (num >= 11 && num <= 25) {
            $('.slider-wrapper').append(purple1)
        } else if (num >= 26 && num <= 38) {
            $('.slider-wrapper').append(purple2)
        } else if (num >= 39 && num <= 49) {
            $('.slider-wrapper').append(purple3)
        } else if (num >= 50 && num <= 100) {
            $('.slider-wrapper').append(blue)
        }
        console.log(num)

    }
    console.log('finish render')
}

function random() {
    return parseInt((Math.random() * 100) + 1)
}

// BTN
btnTrue.addEventListener("click", () => {
    function btnOpen() {
        window.location.href = '#';
    }
    btnOpen()
})

btnCoin.addEventListener("click", () => {
    function btnOpen() {
        window.location.href = '#';
    }
    btnOpen()
    if (localStorage.getItem('MoneyCSGO') >= "5") {
        localStorage.setItem("54601", "true");
        const number = Number(localStorage.getItem('MoneyCSGO')) - 5;
        localStorage.setItem('MoneyCSGO', number);
        location.reload();
    } else {
        localStorage.setItem("54601", "false");
        subtitle.style.display = "block";
    };
})