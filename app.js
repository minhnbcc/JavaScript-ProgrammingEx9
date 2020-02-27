// console.log(document.all);
// document.title = 'I love JavaScript!';

// console.log(document.body);

// let instructions = document.getElementById('instructions');
// console.log(instructions.innerHTML);

// //notice above, using innerHTML, it displays the contents of the element, including any html tags and whitespace

// //if we don't want that, we can use innerText
// console.log(instructions.innerText)

// instructions.innerHTML = '<span>Hello there! /<span>';

// console.log(instructions.innerHTML);

// //get all the elements that have the css class but
// let buttons = document.getElementsByClassName('but');

// console.log(buttons);

// console.log(buttons[1].id);

// button[1].style.color = 'pink';

// let labels = document.getElementsByTagName('label');

// console.log(labels);

let instructions = document.querySelector('#instructions');

console.log(instructions)

let num1 = document.querySelector('#num1');
num1.value =45;

let buttons = document.querySelectorAll('button');