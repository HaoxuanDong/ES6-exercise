function add(a: number, b: number): number {
    return a + b;
}

// Test the function
const result = add(5, 10);
console.log("Sum:", result);

interface Person {
    name: string;
    age: number;
}

function greet(person: Person): void {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

// Create a Person object
const john: Person = { name: "John", age: 25 };

// Call greet function
greet(john);