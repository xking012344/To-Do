//start
const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);
const increment = x => x + 1;
const doubleValue = x => x * 2;

const processNumber = pipe(increment, doubleValue);
console.log(processNumber(3)); // Output: 8

//Add a squareValue function and a halveValue function and pass into the pipe.
const squareValue = x => x * x;
const halveValue = x => x / 2;
const processNumber2 = pipe(squareValue, halveValue);
console.log(processNumber2(5))