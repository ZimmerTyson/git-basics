// ** onclick events **

const button = document.getElementById("btn"); //finding the button element inside of the file and store it in a variable


function sayHello() { //this is a way to format if you are adding the onclick property directly to the button element
    alert("Howdy!");
} 

button.addEventListener("click", () => { //This is a way to create an event listener utilizing the method where we store the element inside of a variable
    alert("Howdy!");
});


// ** Hover effects **

const text = document.getElementById("hoverText"); // store the element with the specified id

       text.addEventListener("mouseover", function () { //creating an event listener for mouse hover events
        text.style.color = "red";
       })

       text.addEventListener("mouseout", function() { // creating an event listener for when the mouse is no longer hovering on the page element
        text.style.color = "black";
       })


// ** Keyboard Events (keydown and keyup) **

const input = document.getElementById("textInput"); // targeting the input inside of the html file
const display = document.getElementById("displayText"); // targeting the paragraph under the input

input.addEventListener("keyup", function(event) { //this function is taking what the user types and adding it to the paragraph once a key is released
     display.textContent = "You typed: " + event.target.value;
})



// ** Detecting Input Changes **

const dropdown = document.getElementById("dropdown"); //targeting the select element and storing it in a variable
const out = document.getElementById("output"); // targeting the paragraph element and storing it in a variable

dropdown.addEventListener("change", function() { // this function will display what is selected in the paragraph we specified
    output.textContent = "You Selected: " + dropdown.value;
});



// ** Removing Event Listeners **

function handleClick() { //creating a function that we can use as a callback when the button is clicked.
    console.log("handle click");
    btn.removeEventListener("click", handleClick); // when the button is clicked it will remove the event handler so that it doesn't happen more than once
} // removeEventListener always need to have a named function

btn.addEventListener("click", handleClick);