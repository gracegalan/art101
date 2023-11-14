// lab9.js - trying simple js/jquery to modify the page
// Author: Grace Galan
// Date: 13 November 2023

//done with the assistance of lab 9 template from Wes Modes



//add a button to challenge section

$("#challenges").append("<button id='first-button'>click it and see</button>");

//add a listener to the button

$("#first-button").click(function(){
    //now do something cool and thrilling
    $("#challenges").fadeOut()
});

//add button to problem section
$("#problems").append("<button id='second-button'>try it again</button>");

//add listener

$("#second-button").click(function(){
    //make a function that does something cool
    console.log("Take me out to dinner first, sheesh!");
    $("#results").append("Take me out to dinner first, sheesh!");
});



//add your last button

$("#reflection").append("<button id='third-button'>exhaust me, baby</button>");

//add listener

$("#third-button").click(function(){
    //cool thing
    $("#reflection").toggleClass("special");
})

