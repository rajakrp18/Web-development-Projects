// here just the count changed 
// let count = 0; //Initializes the counter

// const button = document.querySelector("button"); //Selects the button element
// const paragraph = document.querySelector("p"); //Selects the paragraph displaying the count

// //Adds a click listener that:
// button.addEventListener("click", () => {
//     count++; //Increments count
//     paragraph.textContent = `current count is ${count}`; //Updates the paragraph with the new value
// });

// document.getElementById('para').innerHTML = "Hello raj"; //calling the para using id and assigning hello raj




// here we are taking the name as alert and incresing the count 
let count = 0;
let userName = ""; // Will hold the entered name
const button = document.querySelector("button");
const paragraph = document.getElementById("para");

button.addEventListener("click", () => {
    if (userName === "") {
        userName = prompt("Enter your name:");
        if (!userName) {
            userName = "Guest"; // Fallback if user cancels or leaves blank
        }
        button.textContent = "Click here"; // Change button text after name is entered
    }

    count++;
    paragraph.textContent = `Hello ${userName}, current count is ${count}`;
});
