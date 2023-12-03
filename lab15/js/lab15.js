//Author: Grace Galan
//Index: Lab 15 - AJAX Art101
//3 December 2023

//Done with the assistance of Wes Modes and lab partner Ren Murphey

//test button
$("#myButton").click(function(){
    console.log("button works")
});

//link API
const Endpoint = "https://yesno.wtf/"

//attach event listener
$("#myButton").click(function() {
    //add ajax
    $.ajax({
        "url": Endpoint, 
        "data": {
            "answer": "no",
            "forced": false,
            "image": "https://yesno.wtf/assets/no/21-05540164de4e3229609f106e468fa8e7.gif"
            },
        "type": "GET"
        //What happens when data type is successful
        success: (function(data) {
            //do stuff
            console.log(data);
             //in the call back
            //extract the answer
            yourAnswer = data.answer;
            //add to output div
            $("#output").append("<p>" + yourAnswer);
        }),
            error: (function (jqXHR, textStatus, errorThrown) {
                console.log("Error", textStatus, errorThrown);
            })
     })
    })