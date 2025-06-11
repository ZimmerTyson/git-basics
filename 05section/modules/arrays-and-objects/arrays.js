// ** Declaring arrays and accessing indexes **

//Arrays are zero based indexed


const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits);

fruits[1] = "Blueberry"

console.log(fruits[0]);
console.log(fruits[1]);


console.log(fruits.length);



// ** Array methods ** (push, pop, shift, unshift)

fruits.push("Mango"); // Adds to end of the array
console.log(fruits);

fruits.pop(); // removes from end of array
console.log(fruits);

fruits.shift(); // removes from the beginning of the array
console.log(fruits);

fruits.unshift("Grapes"); //adds to the beginning of the array
console.log(fruits);



// ** Splice method - add / remove elements (can do everything methods above can do individually) **

fruits.splice(1, 1, "Peach"); //from index 1, remove one item, replace with these item
console.log(fruits);

fruits.splice(1, 2, "Apple", "Orange"); //from index 1, remove 2 items, add these new items
console.log(fruits);



// ** Filtering Arrays ** (gets specific elements and create a new array that match the conditions)

const numbers = [1, 2, 3, 4, 5]; // the original array

const evenNumbers = numbers.filter(num => num % 2 === 0); // Creating a new array filled with only even numbers

console.log(evenNumbers);



// ** Map Method ** (Transforms the elements inside of an array and creates a new array with these modified elements)

 const numberArr = [1, 2, 3, 4, 5]; // original array
 console.log("numbers =", numberArr);
 const doubled = numberArr.map(num => num * 2); //taking the original array and multiplying each value by 2 and creating a new array with these new values
 //does not mutate or change the original array at all.

 console.log("doubled =", doubled);
 console.log(numberArr);