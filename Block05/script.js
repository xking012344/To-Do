const header = document.getElementById('main-header');
console.log(header);

const firstParagraph = document.querySelector('p');

const allButtons = document.querySelectorAll('button');
console.log(allButtons);

const items = document.getElementsByClassName('list-item');
console.log(items)

const images = document.getElementsByTagName('img');

const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';
document.body.appendChild(newDiv);

const heading = document.querySelector('h1');
heading.textContent = 'Updated Title';

const list = document.querySelector('ul');
const firstItem = list.firstElementChild;
list[0].removeChild(firstItem);

const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     alert('Button Clicked!');
// });

const sayHello = () => alert('Hello!');
button.addEventListener('click', sayHello);
button.removeEventListener('click', sayHello);

const child = document.querySelector('.child');
console.log(child.parentNode);

const container = document.querySelector('.child');
console.log(container.children);

console.log(child.previousSibling);