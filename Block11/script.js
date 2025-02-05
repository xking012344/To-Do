//high order functions
function higherOrderFunction(callback) {
    return callback();
}

function sayHello() {
    return "Hello, World!";
}

console.log(higherOrderFunction(sayHello)); // Output: Hello, World!

//xtra
function applyOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(applyOperation(5, 3, add)); // Output: 8

//functional utilities: map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

//functional utilities: reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

//functional utilities: filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//xtra
function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12

//pure functions
function pureAdd(a, b) {
    return a + b;
}

//side effects
let counter = 0;
function increment() {
    counter++;
}

//function composition
const multiplyBy2 = num => num * 2;
const subtract3 = num => num - 3;
const compose = (f, g) => x => f(g(x));

const newFunction = compose(multiplyBy2, subtract3);
console.log(newFunction(5)); // Output: 4

//currying
const curriedAdd = a => b => a + b;
console.log(curriedAdd(3)(4)); // Output: 7

//partial application
const multiply = (a, b) => a * b;
const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10