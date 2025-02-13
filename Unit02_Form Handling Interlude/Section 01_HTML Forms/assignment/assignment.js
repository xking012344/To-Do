function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" && password === ""){
        document.getElementById("error").innerText = "Email required";
        document.getElementById("error2").innerText = "password required";
        return false;
    }
    else if(email === ""){
        document.getElementById("error").innerText = "Email is required";
        return false;
    }
    else if(password === ""){
        document.getElementById("error2").innerText = "Password is required";
        return false;
    }
    return true;
}