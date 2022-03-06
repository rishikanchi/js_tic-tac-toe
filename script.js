var slotStatus = ["n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a"]

var turn = "Circle";

function slotClick(number){
    if (slotStatus[number - 1] != "n/a"){
        console.log("enterance")
        console.log(slotStatus[number])
    }
    else {
        document.getElementById(number).src = turn + ".png";
        document.getElementById(number).onclick = "";
        slotStatus[number - 1] = turn;

        var winsReturn = checkForWins(turn);
        if (winsReturn != "fine"){
            return;
        }

        if (turn == "Circle"){
            turn = "Cross";
        } 
        else if (turn == "Cross"){
            turn = "Circle";
        }

        document.getElementById('turn-winner').innerHTML = "Turn: " + turn;
    }
}

function checkForWins(turn){
    for (var i=0; i<8; i+=3){
        if (slotStatus[i] == slotStatus[i+1] == slotStatus[i+2] == turn){
            endGame(turn);
            return;
        }
    }
    
    for (var i=0; i<3; i++){
        if (slotStatus[i] == slotStatus[i+3] && slotStatus[i+6] == turn && slotStatus[i] == turn){
            endGame(turn);
            return;
        }
    }

    if  (slotStatus[0] == slotStatus[4] && slotStatus[8] == turn && turn == slotStatus[0]){
        endGame(turn);
        return;
    }

    else if (slotStatus[2] == slotStatus[4] && slotStatus[6] == turn && slotStatus[2] == turn){
        endGame(turn);
        return;
    }

    var counter = 0;
    for (i=0; i<9; i++){
        if (slotStatus[i] == "n/a"){
            counter += 1
        }
    }

    if (counter == 0){
        drawGame();
        return;
    }

    return "fine";
}

function endGame(turn){
    document.getElementById('turn-winner').innerHTML = turn + " won!";
    document.getElementById('playAgain').disabled = false;
}

function drawGame(){
    document.getElementById('turn-winner').innerHTML = "Draw Game!";
    document.getElementById('playAgain').disabled = false;
}

function playAgain(){
    for (var i=1; i<10; i++){
        var number = String(i);
        document.getElementById(number).src = "transparent.png";
    }

    slotStatus = ["n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a", "n/a"]
    turn = "Circle";

    document.getElementById("turn-winner").innerHTML = "Turn: Circle";
    document.getElementById('playAgain').disabled = true;
}