const buttons = document.querySelectorAll(".colorBtn");
const resetButton = document.getElementById("reset");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        document.body.style.backgroundColor = button.getAttribute("data-color");
    });
});

resetButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});