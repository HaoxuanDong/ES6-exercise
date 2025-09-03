/* ----------Q1------------ */

/* var name = "Alice";
if(true){
    var name = "Bob";
    console.log(name);
}
console.log(name); */

let name = "Alice";
if (true) {
    let name = "Bob";
    console.log(name); // Bob
}
console.log(name); // Alice
/* let is block-scoped, 
which means the variable only exists inside the block where it’s declared.

Using var here makes name function-scoped (or global if outside a function), 

so redeclaring inside the if would overwrite it. With let, the outer "Alice" is preserved. 

let name = "Bob"; inside the if

This creates a new block-scoped variable that shadows the outer name.

It ensures the "Bob" value is only valid within the if block and doesn’t affect the outer variable.

const cannot be used because const prohibits reassignment.
*/


/* ----------Q2------------ */

/* function add(a,b){
    return a+b;
} */
/* const add = (a, b) => {
    return a + b;
}; */

const add = (a, b) => a + b;

/* Regular functions (function)

The value of this depends on how the function is called.

Called as a method → this refers to the object.

Called as a plain function → this is undefined in strict mode (or the global object in non-strict mode).

You can also change this with .call(), .apply(), or .bind().

Arrow functions (=>)

Arrow functions do not have their own this.

Instead, they lexically inherit this from the surrounding scope (the place where they are defined).

You cannot change their this using .call() or .apply()

. */

/* ----------Q3------------ */

/* let greeting = "Hello," + name +"! Welcome to the course."; */
let greeting = `Hello, ${name}! 
Welcome to the course.`;

/* backticks allow line breaks naturally without needing \n.

👉 In this case, the ! stays right after the name, and the second sentence appears on a new line. */

/* ----------Q4------------ */

const person = {
    name:"Alice",
    age: 25,
    city:"Sydney"
}
/* function displayPerson1(person) {
    console.log(person.name + " is " + person.age + " years old.");
}
*/
const displayPerson1 = person => console.log(person.name + " is " + person.age + " years old.");
displayPerson1(person); 
// 解构赋值
/* function showPerson2({ name, age }) {
    console.log(`${name} is ${age} years old.`);
} */
const showPerson2 = ({name , age})=> console.log(`${name} is ${age} years old.`);
showPerson2(person); 

/* ----------Q5------------ */
/* function calculateAera(width, height){
    return width*height
} */

const calculateArea = (width, height = width) => width * height;

/* ----------Q6------------ */

/* nums = [1, 2, 3, 4];
const sumArray = (nums) => {
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum;
};


console.log(sumArray(nums));  
 */

/* let sum = 0;
const sumAny = (...nums) => {
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum;
};
 */
const sumAny = (...nums) => {
    return nums.reduce((total, num) => total + num, 0);
};

console.log(sumAny(1,2,3,4)); 

function mergeArrays(...arrays) {
    // 使用 Spread 展开每个数组，再合并成一个新数组
    let combined = [];
    arrays.forEach(arr => combined.push(...arr));
    return combined;
}

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let result = mergeArrays(arr1, arr2, arr3);
console.log(result)
