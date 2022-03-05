var numOfWon = 0;
var numOfLost = 0;

for (a = 1; a <= 5; a++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNumber = Math.floor(Math.random()*4+1);
    
    if (guessNumber == randomNumber){
        document.write("You have won. " + "<br>");
        numOfWon++;
    }
    else{
        document.write("You have lost. Random number was " + randomNumber + "<br>");
        numOfLost++;
    }
}


document.write( "<br>"+  "<br>" +  "<br>" + "Total number of won = " + numOfWon + "<br>");
document.write("<br>" + "Total number of lost = " + numOfLost + "<br>");
