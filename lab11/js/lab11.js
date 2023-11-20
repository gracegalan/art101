//index.js: Lab 11 - Javascripts Events and Form
//Author: Grace Galan
//Date: 19 November 2023

//sort characters in alphabetical order
function sortString(inputString) {
    //make an array, sort, then reassemble
    return inputString.split('').sort().join('');
};

//add event listener for button
$("#submit").click(function() {
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    //append new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

//attach click handler to my-button to input name
$("#submit").click(function(){
    var name = $("#user-name").val();
    $('#title').html('Hello ' + name);
    console.log("Prompt returned: " + name);
    newText = "Hello " + name + "!";
    $("#title")
});