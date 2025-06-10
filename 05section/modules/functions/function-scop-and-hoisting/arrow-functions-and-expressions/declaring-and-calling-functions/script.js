// let globalVar = "I am global";

// function testScope() {
//     let localVar = "I exist only inside of this function"
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar); // Works
// console.log(localVar); // Doesn't work (only exists inside of the testScope function)



/* 

** Declared functions can be called before the actual function was created

** Function expressions CAN'T be called before they are created. Ex- 'const greet = function() {
    console.log("Hello from a function expression");'
}

*/

hello();

function hello() {
    console.log("Hello from the function declaration");
}

//

greet();

const greet = function() {
    console.log("Hello from a function expression");
}
