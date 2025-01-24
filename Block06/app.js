import compliment, { greet, farewell } from './utils.js';
console.log(greet('Alice')); // Hello, Alice!
console.log(farewell('Alice')); // Goodbye, Alice.
console.log(compliment('Alice')); // Alice, you're awesome!

import multiply, { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15