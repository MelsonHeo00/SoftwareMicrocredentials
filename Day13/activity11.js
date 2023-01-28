console.log('test');

// Example 2
let b1 = document.querySelector('.button');
b1.onclick = function () {
    alert('Clicked on the 2nd button');
}

// Example 3
let a1 = document.querySelector('.aLink');

function testing() {
    console.log('MOUSE HOVER!');
}

a1.onmouseover = testing
a1.onclick = function () {
    console.log('The link was clicked!');
}

// Example 4
let mouse = document.querySelector('.mouseOut');
mouse.onmouseout = function () {
    console.log('MOUSE OUT!');
}

// Example 5
let b2 = document.querySelector('.btn2');
b2.addEventListener('click', function () {
    alert('Hey there!');
})

// Example 6
let btnColor = document.querySelector('.btnColor');
let divColor = document.querySelector('.divColor');

function randomRGB() {
    let randomRed = Math.floor(Math.random() * 255)
    let randomGreen = Math.floor(Math.random() * 255)
    let randomBlue = Math.floor(Math.random() * 255)
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

btnColor.addEventListener('click', function () {
    divColor.style.backgroundColor = randomRGB();
})

// Example 7
let para = document.querySelector('.pmouse');
let btn3 = document.querySelector('.btn3');

function hover1() {
    para.innerHTML += 'Mouse Over <br>';
}

function click1() {
    para.innerHTML += 'Clicked! <br>';
}

btn3.addEventListener('mouseover', hover1);
btn3.addEventListener('click', click1);

// Example 10
let inputTxt = document.querySelector('.inputTxt');
inputTxt.addEventListener('keydown', function () {
    console.log('KEYDOWN!')
})

// Example 11
let display1 = document.querySelector('.display');
window.addEventListener('scroll', function () {
    let pxTop = window.pageYOffset;
    // console.log(pxTop);
    display1.innerHTML = `${pxTop} px from the top `
});

// Example 12
const topDiv = document.querySelector('.GOtop');
topDiv.style.transition = '2s'

window.addEventListener('scroll', function () {
    let pxTop = window.pageYOffset;
    if (pxTop >= 100) {
        topDiv.style.opacity = '1';
    }
    else {
        topDiv.style.opacity = '0';
    }
})

// Example 17
let QCCWebsite = document.querySelector('.linkQCC');

QCCWebsite.addEventListener('click', function (name) {
    name.preventDefault();
    alert('QCC website is off!');
});
