console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;

if (true) {
    var a = 5;
    let b = 10;
    const c = 15;
    console.log(a, b, c); // 5, 10, 15
}

console.log(a); // 5
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // ReferenceError

const gravity = 9.8;
// gravity = 10; // TypeError

const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

const html = `
<div>
    <h1>${name}</h1>
</div>
`;
console.log(html);

function tag(strings, ...values) {
    return strings[0] + values.map((v, i) => `[${v}]`).join('') + strings[strings.length - 1];
}
const message = tag`Hi ${name}, welcome to the course!`;
console.log(message); // Hi [Alice], welcome to the course!

const userName = 'John';
const age = 25;
console.log(`Name: ${userName}, Age: ${age}`);

function capitalize(strings, ...values) {
    return strings.reduce((result, str, i) => result + str + (values[i]?.toUpperCase() || ''), '');
}
const result = capitalize`hello ${userName}, you are ${age} years old.`;
console.log(result); // hello JOHN, you are 25 years old.

class Animal {
    #species;
    constructor(name, species) {
        this.name = name;
        this.#species = species;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }

    static isAnimal(obj) {
        return obj instanceof Animal;
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const rex = new Dog('Rex', 'Dog');
rex.speak(); // Rex barks.
console.log(Animal.isAnimal(rex)); // true

class Vehicle {
    #type;
    constructor(type) {
        this.#type = type;
    }

    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        super('Car');
        this.make = make;
        this.model = model;
    }

    describe() {
        return `${this.make} ${this.model}`;
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.describe()); // Toyota Corolla
console.log(Vehicle.isVehicle(myCar)); // true

const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Data'), 1000));

async function getData() {
    try {
        const data = await fetchData();
        console.log(data); // Data
    } catch (error) {
        console.error('Error:', error);
    }
}

Promise.all([fetchData(), fetchData()]).then(results => {
    console.log(results); // ['Data', 'Data']
});

getData();

const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Data1'), 1000));
const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve('Data2'), 500));

async function fetchBoth() {
    try {
        const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
        console.log('Combined Data:', data1, data2);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchBoth();

const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false

const iterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const value of iterable) {
    console.log(value); // 1, 2, 3
}

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infiniteGen = infiniteSequence();
console.log(infiniteGen.next().value); // 0
console.log(infiniteGen.next().value); // 1

function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2

function* evenNumbers() {
    let i = 0;
    while (true) {
        yield i;
        i += 2;
    }
}

const evens = evenNumbers();
console.log(evens.next().value); // 0
console.log(evens.next().value); // 2
console.log(evens.next().value); // 4