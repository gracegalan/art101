//Lab 12 - Conditionals
//Author: Grace Galan
//Date: 11.21.23

//Completed with the assistance of Wes Modes' lab template and partner Ren Murphey


//make sure button works
$("#button").click(function() {

    console.log("Sign");

});

//create a function called sorting hat that takes your name as a string and counts length of string 
function birthday(str){
    length = str.length;
    //divide length by 12
    mod = length % 12
    //assign a zodiac sign based on result
        if (mod===0) {
            return "Aries"
        }

        else if (mod===1) {
            return "Taurus"
        }

        else if (mod===2) {
            return "Gemini"
        }

        else if (mod===3) {
            return "Cancer"
        }
        else if (mod===4) {
            return "Leo"
        }

        else if (mod===5) {
            return "Virgo"
        }

        else if (mod===6) {
            return "Libra"
        }

        else if (mod===7) {
            return "Scorpio"
        }

        else if (mod===8) {
            return "Sagittarius"
        }

        else if (mod===9) {
            return "Capricon"
        }

        else if (mod===10) {
            return "Aquarius"
        }

        else if (mod===11) {
            return "Pisces"
        }

}

var myButton = document.getElementById("button");

myButton.addEventListener("click", function() {

var name = document.getElementById("input").value;
var sign = birthday(name);
newText = "<p>The stars have given you the sign " + sign + "</p>";
document.getElementById("output").innerHTML = newText;
})
