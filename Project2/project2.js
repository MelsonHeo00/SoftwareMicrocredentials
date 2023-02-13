var button = document.getElementById("shoppingCart");
button.addEventListener("click", function () {
    alert("Still being worked on!");
});

/* Modal 1 */
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("buttonItem1");
var span1 = document.getElementsByClassName("close")[0];

btn1.onclick = function () {
    modal1.style.display = "block";
}

span1.onclick = function () {
    modal1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

/* Modal 2 */
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("buttonItem2");
var span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

/* Modal 3 */
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("buttonItem3");
var span3 = document.getElementsByClassName("close")[2];

btn3.onclick = function () {
    modal3.style.display = "block";
}

span3.onclick = function () {
    modal3.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

/* Modal 4 */
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("buttonItem4");
var span4 = document.getElementsByClassName("close")[3];

btn4.onclick = function () {
    modal4.style.display = "block";
}

span4.onclick = function () {
    modal4.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

/* Modal 5 */
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("buttonItem5");
var span5 = document.getElementsByClassName("close")[4];

btn5.onclick = function () {
    modal5.style.display = "block";
}

span5.onclick = function () {
    modal5.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}

/* Modal 6 */
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("buttonItem6");
var span6 = document.getElementsByClassName("close")[5];

btn6.onclick = function () {
    modal6.style.display = "block";
}

span6.onclick = function () {
    modal6.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}

/* Recommend */
let menu1 = document.querySelector('.menu')
let openMenu1 = document.querySelector('.openMenu')
openMenu1.addEventListener('click', function () {
    this.classList.toggle('active')
    menu1.classList.toggle('openClose')
})

/* Forms */
function passValue() {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#userEmail')
    sessionStorage.setItem('firstN', firstName)
    sessionStorage.setItem('lastN', lastName)
    sessionStorage.setItem('email', email)
    return false
}

let input1 = document.querySelector('.submit1')
input1.addEventListener('click', passValue)