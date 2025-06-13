// ** DOM Manipulation Methods **

// document.getElementById() -> Targets a specific element based on it's CSS Id 

document.getElementById("main-heading")


// document.getElementsByClassName() -> Grabs the elements that have the specified class name

const paragraphs = document.getElementsByClassName("description");
console.log('paragraphs[0].textContent =', paragraphs[0].textContent);


// document.getElementsByTagName() -> Grabs the elements that have the specified element tag name

const buttons = document.getElementsByTagName("button");
console.log(buttons);


// document.querySelector() -> Grabs the first item with the matched class, tag, id

const firstParagraph = document.querySelector(".description");
console.log(firstParagraph.textContent);


// document.querySelectorAll() -> Grabs ALL items with the matched class, tag, id

const allParagraphs = document.querySelectorAll(".description");
console.log(allParagraphs);


// document.innerHTML -> Allows you to create or modify elements within the DOM

const heading = document.getElementById("main-heading");
heading.textContent = "New Heading";

heading.innerHTML = "<span style='color: red'>What's up-</span>heading";

// you can also set styles in JS using dot notation and camel casing instead of dashes and kebab casing
heading.style.color = 'blue';
heading.style.fontSize = '24px';
heading.style.textAlign = 'center';

// ** Create, Remove and Add elements using JS **

// Creating new element  -> Use document.createElement("") to create new element

const newParagraph = document.createElement("p"); // creating the new paragraph element
newParagraph.textContent = "This is a new paragraph"; // adding the text for the paragraph

document.body.appendChild(newParagraph); // adding the new paragraph to the body

// Removing element -> Use document.body(wherever the element is).removeChild(newParagraph)

document.querySelector("button").addEventListener("click", function() { // selecting the button and watching for a click
    document.body.removeChild(newParagraph); // remove the specified element from the area it is located
})



// ** Adding and Removing Classes with JS **

const heading = document.getElementById("main-heading"); // grabbing the headline element and storing in a variable
heading.classList.add("highlight"); // applying the class created in the style tag

document.querySelector("button").addEventListener("click", function () { // targeting the button to wait for the click action
    heading.classList.remove("highlight"); // removing the class causing the styling on the element
});


// ** Modifying Attributes With JS **

const link = document.createElement("a"); // creating a new anchor link element on the page
link.setAttribute("href", "https://google.com"); // set the href attribute to a url
link.setAttribute("target", "_blank"); // setting the link to open in a new tab
link.textContent = "VISIT WEBSITE"; // creating the link text
document.body.appendChild(link); // adding the anchor element to the body of the document