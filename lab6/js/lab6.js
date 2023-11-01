// index.js - purpose and description here
// Author: Grace Galan
// Date: 28 October 2023

//Define Variables
var myTransport= ["Honda Civic ", "LoopBus ", "Feet "]

//Create and Object for My Main Ride

var myMainRide= {
  make: "Honda", 
  model: "Civic", 
  color: "Silver",
  year: 2005,
  age: function() {
      return 2023 - 2005;
  }
}

//Output
document.writeln("Kinds of Transportation I Use", myTransport, "</br>")
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
