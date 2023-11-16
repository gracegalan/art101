//index: Lab 10 - Javascript for the Web
//Author: Grace Galan
//Date: 17 November 2023

//Created with assistance of template from Wes Modes and troubleshooting with Ren Murphey

function generateRandomText() {
    const text = "Sam, The first night at bed when you left, Ron made out with 2 girls and put his head between a waitress's breasts. Also was grinding with multiple fat women. When you left crying at klutch, Ron was holding hands and dancing with a female and took down her number. Multiple people in the house know, therefore you should know the truth.";
    const min = 3;
    const max = 333;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  };


//make an event listener for the button
$("#make-convo").click(function(){
    const newText = generateRandomText();
    $('#output').append('<div class="text"><p>' + newText + '</p></div>');
});