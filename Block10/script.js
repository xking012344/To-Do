//window object
console.log(window.innerWidth);  // Get the width of the browser window
alert("Hello, world!");          // Display an alert box

//working with alerts, confirm, and prompt
alert("This is an alert message.");
const userConfirmed = confirm("Do you agree?");
const userInput = prompt("Enter your name:");
console.log(userInput);

//navigating with location
console.log(window.location.href);  // Get the current URL
window.location.href = "https://www.example.com"; // Redirect to another URL

//managing browser history
history.back();  // Go to the previous page
history.forward(); // Go to the next page

//creating, reading, and deleting cookies
// Creating a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";

// Reading cookies
console.log(document.cookie);

// Deleting a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

//using local storage
// Storing data
localStorage.setItem("username", "JohnDoe");

// Retrieving data
console.log(localStorage.getItem("username"));

// Removing data
localStorage.removeItem("username");

//using session storage
sessionStorage.setItem("theme", "dark");
console.log(sessionStorage.getItem("theme"));
sessionStorage.removeItem("theme");

//setTimeout: executes  function after a delay
setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);

//setInterval: executes function repeatedly at intervals
let count = 0;
const interval = setInterval(() => {
    count++;
    console.log("Count: " + count);
    if (count === 5) clearInterval(interval);
}, 1000);

//retrieving user's location
navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
}, error => {
    console.error("Error getting location: ", error);
});