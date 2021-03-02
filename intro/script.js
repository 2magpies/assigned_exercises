// Objective: Successfully create a hello world project and push it to github
// Assignment: Create a PR that contains the following changes -> Add html file, Add css file. Connect html with css and this js file. Complete javascript questions. Create a PR with your changes once you are done.

// Get Started:
// 1. Clone this repo
// 2. Make your edits
// 3. Create a PR request.

// HINT: here are some git commands that will be useful 
// GIT COMMANDS
// git clone, git checkout -b your_branch_name, git add, git commit -m "YOUR COMMIT MESSAGE HERE", git push origin your_branch_name

// Create 1 of each type of variable
// Integer
let number = 5;
// String
let text = 'string cheese';
// Array
let arr = ['pink', 'yellow', 'orange'];
// Object 
let sunset = {
    bottom: 'violet',
    middle: 'red',
    top: 'tangerine'
};
// console log each variable
console.log(number);
console.log(text);
console.log(arr);
console.log(sunset);
// BONUS
// can you log each variable using a loop?
let i;
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};
let x;
for (x in sunset) {
    console.log(sunset[x]);
};