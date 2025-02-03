//Create a web page that retrieves and displays the user's location.

navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    document.getElementById("locale").innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.latitude}`
}, error => {
    console.error("Error getting location: ", error);
});