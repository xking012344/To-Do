const myPromise = new Promise((resolve, reject) => {
    let condition = true;

    if (condition) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then(result => console.log(result)) // Handles resolve
    .catch(error => console.error(error)); // Handles reject

const promise1 = new Promise(resolve => resolve(10));

promise1
    .then(value => value * 2)
    .then(value => value + 5)
    .then(value => console.log(value)); // Output: 25

const promiseWithError = new Promise((resolve, reject) => {
    reject("An error occurred!");
});

promiseWithError
    .then(result => console.log(result))
    .catch(error => console.error(error));

async function fetchData() {
    return "Data fetched!";
}

fetchData().then(result => console.log(result));

async function getNumber() {
    let promise = new Promise(resolve => setTimeout(() => resolve(42), 1000));
    let result = await promise;
    console.log(result); // Output: 42
}

getNumber();

async function fetchDataWithError() {
    try {
        let promise = new Promise((resolve, reject) => reject("Fetch failed!"));
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchDataWithError();

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));

async function fetchPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchPosts();