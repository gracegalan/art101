//description: lab 7 js for art 101
//Author: Grace Galan 
//Co-Author: Ren Murphey
//Date created: 31 October 2023


//define function that will sort the user's name
function nameInput() {
    var userName = window.prompt("Feed me your name.");
    console.log("userName =", userName);
//their name is input as a string so separate this string into an array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
//sort letters of name array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
//connect array back into a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
//return
    return nameSorted;
}

//output
document.writeln("Your name tastes horrible, take it back: ", 
    nameInput(), "</br>");