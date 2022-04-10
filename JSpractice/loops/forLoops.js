// SECTION Homework/Challenge

// 1. Create a "For...Of" Loop that prints out each letter in every element inside an array!
// Example: ["Spanish", "English", ...]
// Print Out: S,p,a,n,i,s,h,E,n,g,l,i,s,h

let people = ["Joker", "Carrot", "Mom", "Kapkan", "Pola"];

for (let names of people) {
    // console.log(names);
    for (let letters of names) {
        console.log(letters);
    }
}


// 2. Challenge: Write a loop that iterates through an array with a mix of data types. Extract the elements of the array and create new arrays grouping the data types.
// Example:
// [1, 3, "hello", false, "bye"];
// Print Out:
// [1, 3] 
// ["Hello", "Bye"]
// [false]

let array = [3, "T", true, "J", "A", 99, 37, false, null],
    array2 = [],
    array3 = [],
    array4 = [],
    array5 = [];

for (let a = 0; a < array.length; a++) {
    if (typeof array[a] == "number") {
        array2.push(array[a]);
    } else if (typeof array[a] == "string") {
        array3.push(array[a]);
    } else if (typeof array[a] == "boolean") {
        array4.push(array[a]);
    } else {
        array5.push(array[a]);
    }
}

console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);


// 3. Challenge: loop through a string that prints out every letter in reverse
// Example: "Hello!"
// Print Out: !,o,l,l,e,H

let sentence = "Awesomeness",
    array1 = [];

for (let letters of sentence) {
    array1.push(letters);
}

// console.log(array1);
let reversedArray1 = array1.reverse();

for (let items of reversedArray1) {
    console.log(items);
}


// !SECTION

// Initializer: starting value
// Condition: "run this code if true" (Returns true/false) Boolean
// iteration/iterator: adds on to the initial value to continue the Loop

// SECTION Comparison Between For Loops

//"For" the most common. This is a great way to have complete control of an array that's being looped through! You can control the number of times it'll loop (initializer  and iterator) when it runs the chunk of code (when condition is met). Entry Controlled!

//"For... In"  Although this can be used for BOTH arrays and objects, it's often better used with objects. 
// It's NOT RECOMMENDED to use this if the index order is important in an array!! 
// Entry Controlled

// "For...Of" Can be used with strings and arrays. 
// DOES NOT work with objects. 
// Entry Controlled

// !SECTION


// SECTION For Loops
// NOTE Description: The most common looping statement.

// NOTE Syntax:

for (initializer; condition; iteration) {
    // Code block
}

// NOTE Example:

// integer
for (let a = 0; a <= 5; a++) {
    console.log(a);
};

// Array
let groceries = ["broccoli", "tomatoes", "fruit loops", "Nesquik", "2% milk"];

//prints out every element in the array.
for (let b = 0; b < groceries.length; b++) {
    console.log(groceries[b]);
}

//prints out every element in the array EXCEPT the first 2.
for (let c = 2; c < groceries.length; c++) {
    console.log(groceries[c])
}
// Array with logical operators
let groceries = ["broccoli", "tomatoes", "fruit loops", "Nesquik", "2% milk"];
for (let d = 0; d < groceries.length; d++) {
    if (groceries[d] === "Nesquik" || groceries[d] === "fruit loops") {
        console.log("Nah im good")
    } else {
        console.log(groceries[d])
    }
}


let groceries = ["broccoli", "tomatoes", "fruit loops", "Nesquik", "2% milk"];
for (let d = 0; d < groceries.length; d++) {
    if (groceries[d] !== "Nesquik" && groceries[d] !== "fruit loops") {
        console.log(groceries[d]);
    }
}

// NOTE DIY: Loop through an array of string elements of animals. Only print the Last 3 elements.

let animals = ["cow", "frog", "squirrel", "octopus", "cat"];

for (let a = 2; a < animals.length; a++) {
    console.log(animals[a]);
}

// Using slice()
//array.slice(first, second)
let animals = ["cow", "frog", "squirrel", "octopus", "cat"];
console.log(animals.slice(-3)); // Last 3
console.log(animals.slice(1)); // removes first one
console.log(animals.slice(0, 2)); // show first 2
console.log(animals) // array still the same! just temporary change!! :D

// !SECTION


// SECTION For...In Loops
// NOTE Description: Recommended to use with objects (can be used with arrays). Iterating through the properties of an object. DO NOT USE IF INDEX ORDER IS IMPORTANT FOR AN ARRAY!

// NOTE Syntax:

for (nameOfProperty in Object) {
    //code block
}

for (nameOfElement in array) {
    //code block
}

// NOTE Example:

//Object
let person = {
    firstName: "Gaby",
    lastName: "Sanchez",
    age: 21,
    gender: "Female",
    eyeColor: "Brown",
    hairColor: "Brown",
    height: "Average"
};

for (let char in person) {
    // console.log(char); //key
    // console.log(person); // whole object
    // console.log(person[char]); // value to the key
    // console.log(char + " : " + person[char]);
    console.log("This person's " + char + " is " + person[char]);
}

// Array
let fruits = ["Apple", "Pineapple", "Green Apple", "Red Apple"];

for (let type in fruits) { // Same as doing let type=0; type < fruits.length; type++
    console.log(fruits[type]); //items in array
    console.log(type); //returns number 
}

// NOTE DIY: loop through an array using the For...in loop that had at least ONE condition (if/else)
let servers = {
    daddy: "Nope",
    Doocord: "meh",
    TVCS: "HECK YEAH!",
    gstring: "What?"
};

for (let names in servers) {
    if (names == "TVCS") {
        console.log(names + " is the best, " + servers["TVCS"]);
    }
}

// !SECTION


// SECTION For..Of Loops
// NOTE Description: Iterates through an array or string. DOES NOT WORK WITH OBJECTS!! (recommended for arrays and strings)

// NOTE Syntax: 
for (let nameOfElement of array) {
    //code block
}

for (let letter of string) {
    //code block
}

// NOTE Example:

//Array
let languages = ["Spanish", "English", "French", "Hmong", "Russian"];

for (let types of languages) { // Same as doing: Let types = 0; types < languages.length; types++. 
    console.log(types); // CANNOT define where it starts or how much it increases by (Always by 1).
}

//when you print the types here it wont print a number. it will print the actual values in the strings.


//String
let welcome = "Hi, welcome to TVCS!";

for (let letter of welcome) {
    console.log(letter);
}

// NOTE DIY: Loop through a string and only print out vowels.

let sentence = "Joker is the best teacher";

for (let letter of sentence) {
    if (["a", "e", "i", "o", "u"].includes(letter)) {
        console.log(letter);
    }
    // console.log(letter);
}

for (let content of sentence) {
    if (content === "a" || content === "e" || content === "i" || content === "o" || content === "u") {
        console.log(content);
    }
}

// !SECTION