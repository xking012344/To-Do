//obtaining, chaining, and nullish coalescing
const user = {
    profile: {
        name: "Alice",
        age: 25
    }
};

console.log(user.profile.name); // "Alice"
console.log(user.address.city); // undefined (no error)

const input = null;
const defaultValue = input ?? "Default Value";
console.log(defaultValue); // "Default Value"

//top level await
// dataFetcher.mjs
export const data = await fetch("https://api.example.com/data").then(res => res.json());
// main.mjs
import { data } from "./dataFetcher.mjs";
console.log(data);

//temporal API (proposal)
const now = Temporal.Now.instant();
console.log(now.toString()); // "2025-02-06T12:30:45.123Z"

const zonedDate = Temporal.Now.zonedDateTimeISO("America/New_York");
console.log(zonedDate.toString()); // "2025-02-06T07:30:45.123-05:00[America/New_York]"

//pattern matching (proposal)
switch (data) {
    case { type: "user", name: let name }:
        console.log(`User Name: ${name}`);
        break;
    case { type: "admin", permissions: let perms }:
        console.log(`Admin Permissions: ${perms}`);
        break;
    default:
        console.log("Unknown Type");
}

//weakRefs and finalizationRegistry
let obj = { data: "important data" };
const weakRef = new WeakRef(obj);

console.log(weakRef.deref()?.data); // "important data"
obj = null; // Allow garbage collection

const registry = new FinalizationRegistry((heldValue) => {
    console.log(`Object with ${heldValue} has been collected`);
});
registry.register(obj, "metadata");

let emptyValue = null;
console.log(emptyValue); // null