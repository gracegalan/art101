//Experimental JS
//Name: Grace Galan
//Date: 15 November - Sometime in the future



//attach click handler to my-button to input name
$("#my-button").click(function(){
    var name = $("#input").val();
    $('#title').html('Hello ' + name);
    console.log("Prompt returned: " + name);
    newText = "Hello " + name + "!";
    $("#title")
})

