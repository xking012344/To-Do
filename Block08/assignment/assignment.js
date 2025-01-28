class ValidationError extends Error{
    constructor(message) {
        super(message)
        this.name = ValidationError
    }
}

function validateUsername(username){

    if (username.length < 10){
        throw new ValidationError("Username is invalid");
    }
    return "Username is Valid"
}

let username = "Hello";

try{
    console.log(validateUsername(username));
}catch (error){
    console.error(`${error.name}: ${error.message}`)
}