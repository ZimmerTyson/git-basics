console.log(Math.PI);
console.log(Math.E);

// ** Common Math Methods ** (round, )


// Math.round() - Rounds a number to the nearest integer

console.log("Math.round() ----");
console.log("Math.round(4.5)", Math.round(4.5));
console.log("Math.round(4.1)", Math.round(4.1));

//Math.floor() - Rounds down to the nearest integer

console.log("Math.floor() ----");
console.log("Math.floor(4.9)", Math.floor(4.9));
console.log("Math.floor(4.1)", Math.floor(4.1));

// Math.ceil() - Rounds up to the nearest integer

console.log("Math.ceil() ----");
console.log("Math.ceil(4.1)", Math.ceil(4.1));
console.log("Math.ceil(4.9)", Math.ceil(4.9));

// Math.max() - Finds the largest number in group of numbers

console.log("Math.max() ----");
console.log("Math.max(20, 225, 400, 2)", Math.max(20, 225, 400, 2));
console.log("Math.max(457, 45, 777, 453)", Math.max(457, 45, 777, 453));


// Math.min() - Finds the smallest number

console.log("Math.min() ----");
console.log("Math.min(20, 225, 400, 2)", Math.min(20, 225, 400, 2));
console.log("Math.min(457, 45, 777, 453)", Math.min(457, 45, 777, 453));


const numbers = [11, 2, 3, 4, 5, 6, 7, 8, 23, 55];
console.log(numbers);
console.log("Math.min(...numbers)", Math.min(...numbers));
console.log(numbers);
console.log("Math.max(...numbers)", Math.max(...numbers));


// Math.abs() - Gets the absolute value of a number
// converts negative number to positive

console.log("Math.abs() ----");
console.log("Math.abs(-10)", Math.abs(-10));


// Math.pow() - Power of a number

console.log("Math.pow() ----");
console.log("Math.pow(2, 3)", Math.pow(2, 3)); // 2 to the power of 3
console.log("Math.pow(5, 2)", Math.pow(5, 2)); // 5 to the power of 2


console.log("2**3", 2**3); // another way to do exponents in JS


// Math.sqrt() - Finds the square root of a value

console.log("Math.sqrt() ----");
console.log("Math.sqrt(25)", Math.sqrt(25));
console.log("Math.sqrt(49)", Math.sqrt(49));


// Check if a number is a perfect square

const num = 16;

if(Math.sqrt(num) % 1 === 0) {
    console.log("is perfect square");
} else {
    console.log("is not a perfect square")
}


// function to pass through other numbers to check vs. just doing a if else statement
function isPerfectSquare(num) {
    if(Math.sqrt(num) % 1 === 0) return true
    return false
}

console.log("isPerfectSquare(10)", isPerfectSquare(10));
console.log("isPerfectSquare(16)", isPerfectSquare(16));
console.log("isPerfectSquare(25)", isPerfectSquare(25));
console.log("isPerfectSquare(13463)", isPerfectSquare(13463));
console.log("isPerfectSquare(1456)", isPerfectSquare(1456));
