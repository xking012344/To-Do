const promise1 = new Promise(resolve => resolve(7));

promise1
    .then(value => value * 2)
    .then(value => value + 10)
    .then(value => value - 5)
    .then(value => console.log(value));