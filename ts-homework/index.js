function add(a, b) {
    return a + b;
}
// Test the function
var result = add(5, 10);
console.log("Sum:", result);
function greet(person) {
    console.log("Hello, ".concat(person.name, "! You are ").concat(person.age, " years old."));
}
// Create a Person object
var john = { name: "John", age: 25 };
// Call greet function
greet(john);
