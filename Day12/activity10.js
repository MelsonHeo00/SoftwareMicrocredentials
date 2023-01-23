console.log('test')

// Example 1
let p1 = document.getElementById('one');
p1.style.color = 'olive';

// Example 2
let ps = document.getElementsByTagName('p');
console.log(ps);

// Example 3
let n = document.getElementsByClassName('name');
for (let i = 0; i < n.length; i++) {
    n[i].style.color = 'orange';
}

// Example 4
let firstP = document.querySelector('#special p');
firstP.style.color = 'magenta';

// Example 5
let names = document.querySelectorAll('#special .name');
for (let i = 0; i < names.length; i++) {
    names[i].style.fontWeight = 'bolder'
    names[i].style.fontStyle = 'italic'
    names[i].style.fontSize = '2em'
}

// Example 6
let my = document.querySelector('qcc');

// Example 10
let n2 = document.querySelectorAll('#special .name')[1]
n2.className = 'bgblue'

// Example 15
let list = document.querySelectorAll('li')[2]

// Example 17: Append a new element
// step 1: create a new paragraph
let myPara = document.createElement('p');
// step 2: give it content
let mySentence = document.createTextNode('This is a text in a new paragraph');
// step 3: add it to the DOM
myPara.appendChild(mySentence);
// step 3: find the position where the new element will be added
let newP = document.querySelector('.d')
newP.appendChild(myPara);


// Example 22
const subtitle = document.createElement('h2')
subtitle.append("PARKS TO VISIT IN NYC!")
let nextSubtitle = document.querySelector('.nyc')
nextSubtitle.insertAdjacentElement('afterend', subtitle)

// Example 23
let div2 = document.querySelector('.d2');
div2.removeChild(myDiv.children[0]);

// Example 24
let par1 = document.querySelector('.p1');
par1.parentElement.removeChild(par1);