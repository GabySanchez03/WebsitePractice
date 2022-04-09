/**
 * Variables: var, Let, const
 */

//var ("Old"), Let ("New")
var var1 = "Hello";
let var2 = "World";

console.log("Before: " + var1);
console.log(var2);

var1 = "bye"

console.log("After: " + var1);

//const
//Cam NOT change the value ot the variable
const var3 = "Hola!";

console.log(var3);

var3 = "Howdy!";
console.log(var3); //Errors out bc I can't change the value!


/**
 * Data Types! : string, number/integer, boolean (bool), null, undefined, array, objects
 */

let someString = "I like oranges!", // a-z no quotes and letters
    someInteger = 30, // Numbers and no quotes
    someBool = false, // true or false  -used for logic
    someNull = null // value of the variable is unknown "empty"
    someUndefined = undefined // Variable has an expected data type, BUT there's no value assigned
    someArray = [
        "string", //index: 0
        40, //index: 1
        "Apple Juice", //index: 2
        true //index: 3
    ] // Collection/list of variables (can include all cause it's cool)
    someObject = {
        "key": "value",
        fistName: "AlexaIsCool",
        LastName: "Awesomeness",
        age: "3000",
        occupation: "being smart and awesome",
        "some key": false // Can use quotes to add space to a key!
        // some key: false ---> doesn't work without quotation marks in the key
    }; // Defined with key value pairs! JSON is formatted with objects.

// String concatenation vs interpolation!
// Concatenation: a combination of strings.
let newStrVar = "My name is Gaby and " + someString;

console.log(newStrVar);

// Interpolation: Adding on a new variable (can be any data type) to a string
let newStrVar2 = someString + " Very very much!!"

console.log(newStrVar2);

//Arrays and Objects!

let someArray2 = [
        "string", //index: 0
        40, //index: 1
        "Apple Juice", //index: 2
        true //index: 3
    ]
    someObject2 = {
        "key": "value",
        fistName: "AlexaIsCool ",
        LastName: "Awesomeness ",
        age: "3000",
        occupation: "being smart and awesome",
        "some key": false
    };
// Array fundamentals

//indexing: is the placement of the variable within the array. Always starts with 0.
console.log(someArray2[0]) //this would get the item of the first array
console.log(someArray2[2]) //this is the third item of the first array

//Object
console.log(someObject2.age);
console.log(someObject2.occupation);

//Challenge: combine firstName and lastName as new variable.
let newStrVar3 = someObject2.fistName + someObject2.LastName;
console.log(newStrVar3);

/**
 * Math Operations: 
        * Arithmetic: +, -, *, /, % (remainders), ** (exponents), 
        * Increment/Decrement: ++, --, 
        * Assignment: +=, -=, *=, /=, %=, **=
 */


// Base integers
let a = 3,
    b = 7,
    c = 6;

// Arithmetic

//Increment/Decrement: ++, --

let d = a + b //10
    e = b - a //4
    f = a * c //18
    g = c / a //2
    h = b % a //1 remainder
    i = a ** a //27 (3^3)

    console.log("addition: " + d);
    console.log("subtraction: " + e);
    console.log("multiplication: " + f);
    console.log("division: " + g);
    console.log("modulus/remainder: " + h);
    console.log("exponent: " + i);

    // Increment/Decrement (adding or removing 1)
    let 
        j = a++, // post Increment 3 final 4
        k = b--, // post Decrement 7 final 6
        l = ++a, // pre Increment 4
        m = --b; // pre Decrement 6

    console.log("post-incr: " + j); //3 Print the original value (3), BUT the final value is 4
    console.log("post-decr: " + k); //7 Prints the original value = 7 BUT the final value is 6. 
    console.log("pre-incr: " + l); //5 Prints 5 bc is adding on to the final value in line 127.
    console.log("post-decr: " + m); //5 Prints 5 because it's subtracting from the final value set in line 128

    let n = 3;
    console.log(n++); //Prints 3 but the value of the variable BEFORE 1 is added is 
    console.log(++n); //when it's running on its own cause it adds 1 to the current value and prints that.

    let o = 7;
    console.log(o--); //Prints 7, BUT the final value is 6
    console.log(--o); //WITHOUT line 137, prints 6. WITH line 137 prints 5

//Assignment: +=, -=, *=, /=, %=, **=

let p = 4,
    q = 5,
    r = 8;

//+=
console.log(p); //4
console.log(p += 2);
console.log(p); //6 new value forever!!

//-=
console.log(q -= 1); //4

//*=
console.log(r *= 2); //16

// /=
console.log(r /= q); //16/4 = 4

// %=
console.log(p %= q); //remainder 6/4 is 2

// **=
console.log(q **= (p %= q)); // 4^(2) = 16

/**
 * Logical Operators: && (and), || (or), ! (not)
 *  ("Strict") vs ("Loose")
 */
let s = "Dog",
    t = 3,
    u = "3",
    v = "Cat";

console.log(t === "3"); //false "strict" checks for the value AND data type
console.log(t == "3"); //true "loose" checks value ONLY

//if/else if/else: used to check logic against a value. Can run code depending if it passes.
// if (condition) {
//     //some code
// }
// else if (anotherCondition) {
//     //some code
// }
// else {
//     //default code or does nothing 
// }

//Checks for BOTH conditions to pass as true
if (s === "Dog" && v === "Cat") {
    console.log("passed first if");
}
//Check if EITHER condition passes as true
if (t == "3" || s ==="Cat") {
    console.log("passed second if");
    console.log(t == "3");
    console.log(s === "Cat");
}

//Check if value IS NOT equal to something
if (t !== 4) {
    console.log("passed third if");
    console.log(t !== 4);
}

//Use default else statement
if (t == 5) {
    console.log("t is 5!")
}
else if (t == 6) {
    console.log("t is 6!")
}
else if (t == 7) {
    console.log("t is 7!")
}
else if (t == 8) {
    console.log("t is 8!")
}
else if (t == 9) {
    console.log("t is 9!")
}
else{
    console.log("t is not 5!") 
}

/**
 * this is a block comment btw!
 * I can add so many lines of comments!
 * how amazing is that?!!
 * used often for documentation
 */
  
//this is a single line comment

/**
 * Aggregates the world "hello!" at the beginning of every sentence.
 * @argument param1 array of sentences.
 * @author Gaby.
 */
function something (param1) {
    //some code
}


//Assignment:
/**
 * Create an if/else statement that checks whether a variable is odd or even
 * Print "Is Odd" for odd numbers.
 * Print "Is Even" for even numbers/
 */

const number = 1

if (number % 2 == 0) {
    console.log("Is Even");
}
else {
    console.log("Is Odd")
}