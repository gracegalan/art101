//Author: Grace Galan
//Index: Lab 15 - AJAX Art101
//3 December 2023

//Done with the assistance of Wes Modes and lab partner Ren Murphey

//test button
$("#myButton").click(function(){
    console.log("button works")
});


const ENDPOINT = "https://icanhazdadjoke.com";

//attach event listener 
$("#myButton").click(function(){
  //ajax
  $.ajax({
    "url": ENDPOINT,
    "dataType":"json",
    "success": function(results){
        console.log(results);
       //in the callback:
       //extract the results
        jokeText = results.joke;
       //add to output div
        $("#output").append("<p>" + jokeText + "</p>");
    },
    "error": function(){
      
    }
  })
})