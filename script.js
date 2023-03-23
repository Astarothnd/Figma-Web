const box = document.getElementById('box')
const item = document.querySelector('.hot-item')

var interval1
var interval2 
var interval3

// SLIDE 1 : Đề xuất Hot //
const content1 = document.querySelector('#content1');
const left_button1 = document.querySelector('#btn-left1');
const right_button1 = document.querySelector('#btn-right1');


function make_slide1(){
    const width = box.offsetWidth;
    const item_width = item.offsetWidth;
    let amount = Math.round(width / item_width);

    let count = 0;
    let max_width = content1.offsetWidth - amount * item_width;
    left_button1.addEventListener('click',function(){
        count -= item_width;
        if (count < 0){
            count = max_width;
        }
        content1.style.transform = `translateX(${-count}px)`;
    })

    right_button1.addEventListener('click',function(){
        count += item_width;
        if (count > max_width){
            count = 0;
        }
        content1.style.transform = `translateX(${-count}px)`;
    })

    interval1 = setInterval(function(){
        count += item_width;
        if (count > max_width){
            count = 0;
        }
        content1.style.transform = `translateX(${-count}px)`;
    }, 7000)

}

// SLIDE 2 : Dành riêng cho VIP //
const content2 = document.querySelector('#content2');
const left_button2 = document.querySelector('#btn-left2');
const right_button2 = document.querySelector('#btn-right2');

function make_slide2(){
    const width = box.offsetWidth;
    const item_width = item.offsetWidth;
    let amount = Math.round(width / item_width);

    let count = 0;
    let max_width = content2.offsetWidth - amount * item_width;
    left_button2.addEventListener('click',function(){
        count -= item_width;
        if (count < 0){
            count = max_width;
        }
        content2.style.transform = `translateX(${-count}px)`;
    })

    right_button2.addEventListener('click',function(){
        count += item_width;
        if (count > max_width){
            count = 0;
        }
        content2.style.transform = `translateX(${-count}px)`;
    })

    interval2 = setInterval(function(){
        count += item_width;
        if (count > max_width){
            count = 0;
        }
        content2.style.transform = `translateX(${-count}px)`;
    }, 5000)
}

// SLIDE 3 : Nhiều lượt xem nhất //
const box2 = document.getElementById('box2')
const item2 = document.querySelector('.mostview-item')

const content3= document.querySelector('#content3');
const left_button3 = document.querySelector('#btn-left3');
const right_button3 = document.querySelector('#btn-right3');

function make_slide3(){
    const width = box2.offsetWidth;
    const item_width = item2.offsetWidth;
    let amount = Math.round(width / item_width);

    let count = 0;
    let max_width = content3.offsetWidth - amount * item_width;
    left_button3.addEventListener('click',function(){
        count -= item_width;
        if (count < 0){
            count = max_width;
        }
        content3.style.transform = `translateX(${-count}px)`;
    })

    right_button3.addEventListener('click',function(){
        count += item_width;
        if (count > max_width){
            count = 0;
        }
        content3.style.transform = `translateX(${-count}px)`;
    })

    interval3 = setInterval(function(){
        count += item_width;
        if (count > max_width){
            count = 0;
        }
        content3.style.transform = `translateX(${-count}px)`;
    }, 10000)
}


function Clear(){
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)
}

document.addEventListener('DOMContentLoaded', function () {
    // responsive
    window.addEventListener('resize', function () {
        Clear()
        make_slide1()
        make_slide2()
        make_slide3()
    });
})
make_slide1()
make_slide2()
make_slide3()
