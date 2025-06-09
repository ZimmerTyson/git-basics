// while loops (less common because they can be a little more unpredictable)

// let count = 0;

// while(count <= 5) {
//     console.log("count =", count);
//     count++
// }


//User input until correct answer;

let userInput;

while(userInput !== "yes") {
    userInput = prompt("Type 'yes' to continue.")
}

console.log("you entered 'yes'");