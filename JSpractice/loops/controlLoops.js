// SECTION Continue: Skips the rest of the Loop and continues to the next iteration.

for (let i = 0; i < 10; i++) {
    // code block

    // Check if a certain number is met. If so, ignore it.
    if (i === 5) {
        continue;
    }
    else {
        console.log(i);
    }
}

let numbers = [21, 56, 79, 3, 30];

for (let number of numbers) {
    //Check if current number is even
    if (number % 2 === 0) {
        console.log("EVEN!");
    }
    else {
        console.log("ODD!");
        continue; //Here, it's being used to control code by hiding everything after!
        console.log("Isn't this odd?")
        console.log("Isn't this odd?")
        console.log("Isn't this odd?")
        console.log("Isn't this odd?")
    }
}

let juices = ["Apple", "Orange", "Pineapple", "Cranberry"];

for (let d = 0; d < juices.length; d++){
    if (juices[d] == "Pineapple"){
        continue;
    }
    else {
        console.log(juices[d])
    }
}

// !SECTION


// SECTION Break: ends a Loop

for (let i = 0; i < 10; i++) {
    // Stop the loop if current number is 7
    if (i == 7) {
        break;
    }
    else {
        console.log(i);
    }
}

let clothes = ["Pants", "Shirt", "Hoodie", "Skirt", "Socks"];

for (let j = 0; j < clothes.length; j++) {
    let clothingItem = clothes[j];

    //Check for a specific clothingItem. If it matches, change the value AND break out of the loop!
    if (clothingItem === "Skirt") {
        clothes[j] = "Cat"; // Change/Assigned new value
        console.log(clothes);
        break;
    }
    else{
        console.log("Current item is " + clothingItem)
    }
}

// !SECTION