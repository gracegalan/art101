//Experimental JS
//Name: Grace Galan
//Date: 15 November - Sometime in the future



//attach click handler to my-button to input name
$("#my-button").click(function(){
    var name = prompt("What the heck is your name?");
    $('#title').html('Hello ' + name);
    console.log("Prompt returned: " + name);
    newText = "Hello " + name + "!";
    $("#title")
})

