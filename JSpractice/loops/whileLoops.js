// SECTION Homework/Challenge
// 1. write a Loop that prints out 10 integers AND meets 2 conditions (use Logical ap).
// 2. Challenge: Write a Loop that uses an array and prints out only the first 2 elements.

let j = 20


while (j <= 20 && j >= 10) {
    console.log(j + " is between 10 and 20!");
    j--;
}

let t = [
    3,
    6,
    9
], index = 0;

while (index <= 1) {
    console.log(t[index] + " is part of the 2 first elements!");
    index++;
}

// SECTION Comparison Between While Loops


//"While" Evaluates the condition at the start of iteration (entry controlled). Make sure that the condition eventually goes false otherwise it'll create an infinite Loop!!

//"Do... While" will always execute the code block once even if the condition is false (exit controlled)!

// !SECTION

// Initializer: starting value
// Condition: "run this code if true" (Returns true/false) Boolean
// iteration/iterator: adds on to the initial value to continue the Loop. over and over hehe

// SECTION While Loops
// NOTE Description: The most simple looping statement in JavaScript!

// NOTE Syntax:
let a = 0; //initializer

while (condition) {
    //code block
    a++; //iteration adds 1 to the current value
}


// NOTE Example/s:

// True/Success
let b = 0; // initializer

while (b <= 5)  { //condition
    console.log("Current Number is: " + b + "!"); //code block
    // b++; //iteration adds 1
    b+=2; // iteration adds 2 (using an assignment operator)
}


//False/Fail
let c = 10; // initializer

while (c < 10) { // condition
    console.log("Current number is less than ten: " + c); //code block
    c++; //iteration adds 1
}

// infinite Loop AVOID THIS!!!
let d = 0; //initializer

while(d >= 0) {
    console.log(d + " is greater than 0!")
    d++;
}

// !SECTION

// SECTION Do...While Loops
// NOTE Description: The most simple looping statement in JavaScript! Another version of the "while" Loop BUT it checks the condition at the end (exit controlled). It will ALWAYS run the chunk of code once.

// NOTE Syntax:
let e = 0;

do {
    //code block
    e++; //iteration adds 1
}

while (condition)


// NOTE Example/s:

//True/Success
let f = 1; // initializer

do {
    console.log("This number, " + f + " is less than or equal to 10!"); //code block
    f++; // iteration adds 1
}
while (f <= 10);

//False/Fail
let g = 1;

do {
    console.log("This number, " + g + " is greater than 10!");
    g++;
}
while (g > 10);

// !SECTION

// SECTION DIY

let h = 1;

while (h <= 5) {
    console.log(h + " is less than or equal to 1");
    h++;
}

let i = 3;

do {
    console.log(i + " is greater than 1");
    i--;
}
while (i > 1);

