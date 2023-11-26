//Lab 13 - Loops
//Author: Grace Galan
//Date: 11.25.23

//Completed with the assistance of Wes Modes' lab template and partner Ren Murphey



$("#my-button").click(function() {
//set the numerical parameters
for (var i=1; i<=200; i++) {

//for numbers that are multiples of 3, 5, and 7
//print FizzBuzzBoom!
if (i % 3===0 && i % 5===0 && i % 7===0) {
    console.log("FizzBuzzBoom!");
}

//for numbers that are multiple of 3 and 5 
//print FizzBuzz
else if (i % 3===0 && i % 5===0) {
    console.log("FizzBuzz!");
}

//for numbers multiples of 3 and 7
//print FizzBoom!
else if (i % 3===0 && i % 7===0) {
    console.log("FizzBoom!");
}

//for numbers multiples 5 and 7
//print BuzzBoom!
else if (i % 5===0 && i % 7===0) {
    console.log("BuzzBoom!");
}

//for numbers multiples of 3 
//print Fizz!
else if (i % 3===0) {
    console.log("Fizz!");
}

//for numbers multiples of 5
//print Buzz!
else if (i % 5===0) {
    console.log("Buzz!");
}

//for numbers multiples of 7
//print Boom!
else if (i % 7===0) {
    console.log("Boom!");
}

else {
    console.log (i);
}

}
});