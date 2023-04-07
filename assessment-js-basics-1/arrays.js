//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 1------------------------");
console.log("--------------------------------------------------------\n");

let colorCopy = faveColors.slice();

console.log(`This is a copy of the faveColors variable: ${colorCopy}\n`);

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 2------------------------");
console.log("--------------------------------------------------------\n");

colorCopy.push("pink");

console.log(`We added the color 'pink' to the colorCopy: ${colorCopy}`);

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 3------------------------");
console.log("--------------------------------------------------------\n");

let middleNums = numbers.slice(1, 4);

console.log(`This is the middleNums variable: ${middleNums}`);

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 4------------------------");
console.log("--------------------------------------------------------\n");

let answers = [];
for (let i = 0; i < bigOrSmallArray.length; i++) {
  if (bigOrSmallArray[i] > 100) answers.push("big");
  else answers.push("small");
}

console.log(`This is the answers variable: ${answers}`);