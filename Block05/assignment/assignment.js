let count = 0;
const counter = document.getElementById('counter');

const buttonIncrement = document.getElementById('increment');
buttonIncrement.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});

const buttonDecrement = document.getElementById('decrement');
buttonDecrement.addEventListener('click',() => {
    count--;
    counter.innerText = count;
});