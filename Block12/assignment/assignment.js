//start of Unit01 Advanced Vanilla Javascript

const user1 = {
    address: {
        city: "Bew York"
    }
};

const user2 = {};

//define getUserCity
function getUserCity(user){
    return user?.address?.city ?? "unknown"
}

console.log(getUserCity(user1)); // NY
console.log(getUserCity(user2)); //unknown