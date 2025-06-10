

const greet = function(name) {
    return `Hello, ${name}`;
};

console.log(greet("Alice"));
console.log(greet);

//Arrow Functions (shorter syntax)

const square = (num) => num**2;

console.log(square(5));

// Arrow functions with multiple parameters

const multiply = (a, b) =>  a * b;


console.log(multiply(12, 2));

/*

For arrow functions, you can use shorthand like 'const multiply = (a, b) =>  a * b;' Just make sure not to use {}


Otherwise if you use {}, you will need to end up returning inside of the function.

*/