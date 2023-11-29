//index.js: Lab 8 - Anonymous Functions and Callbacks
//Author: Grace Galan
//Date: 5 November 2023

//Code done with the assistance of Wes Mode's lab template and my partner Ren Murphey



//Make a function that multiplies
function iMultiply(x){
    return x * 4;
};

//test it
console.log("What's 4x4?", iMultiply(4));

$("#button-1").click(iMultiply(4));


console.log("What's 5x4?", iMultiply(5));

//create an array
array = [4, 8, 16, 24, 28]
console.log("My array: ", array);

//call back the function to the array
var result = array.map(iMultiply);
console.log("Test the outcomes from the array:", result);

//create an anonymous function within the callback
var result = array.map(function(x) {
    return x * 2;
});

//final
console.log("Here's my new numbers:", result);