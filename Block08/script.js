try {
    // Code that might throw an error
} catch (error) {
    // Handle the error
} finally {
    // Execute cleanup code
}

try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error);
} finally {
    console.log("Execution completed.");
}

throw new Error("Custom error message");

function validateAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    return "Valid age.";
}

try {
    console.log(validateAge(16));
} catch (error) {
    console.error(error.message);
}

console.log("Info message");
console.warn("Warning message");
console.error("Error message");
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);
console.trace("Trace point");

function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(5));