//basic
function squareNum(a){
    return a * a;
}
console.log(squareNum(5));

//arrow
const greet = (name) => `Hello, ${name}!`;
console.log(greet("X"));

//closure
function counter(){
    let count = 5;
    return function inner(){
        count++;
        return count;
    };
}
const count = counter();
console.log(count());
console.log(count());

//IIFE

const result = sumArray(a, b) {
    return a + b;
})(1, 2, 3, 4, 5);
console.log(result);