function moveRandomEl(elm) {
    elm.style.position = "absolute"; // Fixed typo in "position"
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%"; // Corrected "math" to "Math"
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) { // Corrected "funcation" to "function"
    moveRandomEl(e.target);
});
