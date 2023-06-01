$(function () {
    var rendertime = 0;
    $('#btn').on('click', function () {

        var right = 0;

        render()
        var count = 0;
        var speed = 50;
        $('.overlay').css('display', 'none');
        $('#btn').css('display', 'none');
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

                $('#btn').css('display', 'block');
                var copy = $.clone($('.swiper-slide')[50])
                $('.layout').append(copy)
            }
        }, 20)
    })

})


var gold = `<div class="swiper-slide "> <span class='gold'>gold</span></div>` // 0.1%
var red = `  <div class="swiper-slide"> <span class='red'>red</span></div>`    // 4.10%
var darkpurple = `<div class="swiper-slide "> <span class='dark-purple'>darkpurple</span></div>` // 10.01%
var purple1 = `<div class="swiper-slide "> <span class='purple'>1purple</span></div>`   // 18.05%
var purple2 = `<div class="swiper-slide"> <span class='purple'>2purple</span></div>`      // 18.01%
var purple3 = ` <div class="swiper-slide"> <span class='purple'>3purple</span></div>`   //18.06%
var blue = `<div class="swiper-slide "><span class='blue'>blue</span></div>` //   31.9%




function render() {
    console.log('start')
    $('.slider-wrapper').empty()
    for (var i = 0; i < 60; i++) {

        var num = random();
        if (num == 1) {
            $('.slider-wrapper').append(gold)
        } else if (num >= 2 && num <= 5) {
            $('.slider-wrapper').append(red)
        } else if (num >= 6 && num <= 15) {
            $('.slider-wrapper').append(darkpurple)
        } else if (num >= 16 && num <= 33) {
            $('.slider-wrapper').append(purple1)
        } else if (num >= 34 && num <= 51) {
            $('.slider-wrapper').append(purple2)
        } else if (num >= 52 && num <= 69) {
            $('.slider-wrapper').append(purple3)
        } else if (num >= 70 && num <= 100) {
            $('.slider-wrapper').append(blue)
        }
        console.log(num)
        
    }
    console.log('finish render')
}

function random() {
    return parseInt((Math.random() * 100) + 1)
}