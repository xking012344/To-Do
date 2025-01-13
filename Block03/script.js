function greet (name) {
    return `Hello, ${name}!`;

    console.log(greet(3 - "2"));
}

const subtract = function(a, b){
    return a - b;
}

function test(fun) {
    return fun(2, 3);
}

console.log(test(subtract));

const multiply = (a, b) => a * b;

console.log(multiply(2,3));

const obj ={
    name: "Alice",
    greet: function (){
        console.log(`Hello, my name is ${this.name}!`);
    }
}

console.log(obj);
console.log(obj.name);
obj.greet();
