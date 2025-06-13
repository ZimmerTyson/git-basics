// ** DOM Manipulation Methods **

// document.getElementById() -> Targets a specific element based on it's CSS Id 

document.getElementById("main-heading")


// document.getElementsByClassName() -> Grabs the elements that have the specified class name

const paragraphs = document.getElementsByClassName("description");
console.log('paragraphs[0].textContent =', paragraphs[0].textContent);


// document.getElementsByTagName() -> Grabs the elements that have the specified element tag name

const buttons = document.getElementsByTagName("button");
console.log(buttons);