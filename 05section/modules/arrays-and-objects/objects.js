// ** Declaring a new object

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(person);

console.log(person.name); //You can access object keys by using dot notation (person.the key name)

console.log(person["age"]); // You can also use bracket notation (person["age"])




// ** Adding and Updating properties ** (use the object name with either bracket or dot notation (person.country = "USA"))

person.country = "USA"; // adding a new property
console.log(person);

person.age = 30; // updating an existing property
console.log(person);




// ** Removing Properties ** (use the delete keyword)

delete person.city;
console.log(person);



// ** Looping Through an Object ** (use the 'for in' loop )

for (const key in person) {  // looping through an object entirely until the end is reached
    console.log("key =", key);
    console.log("value =", person[key]);
}