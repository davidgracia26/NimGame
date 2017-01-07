var a = 5;
var b = 5;
var c = 5;

var pickArray = [a, b, c];

var gameOver = false;
while (gameOver == false) {
    playerMove();
    checkIfGameOver();
    if (gameOver == true) {
        alert("You win");
        break
    }
    computerMove();
    checkIfGameOver();
    if (gameOver == true) {
        alert("Computer Wins");
        break
    }
}

function playerMove() {

    var move = prompt(`Enter a pile and letter (a3,b2,etc.) --- Current pile count: a:${pickArray[0]} b:${pickArray[1]} c: ${pickArray[2]}`);
    var remove = parseInt(move[1]);
    if (move == "") {
        alert("Remove a different amount");
        playerMove();
    } else if (move[0] == "A" || move[0] == "a") {

        if (pickArray[0] - remove < 0 || remove <= 0) {
            alert("Remove a different amount");
            playerMove();
        } else {
            pickArray[0] = pickArray[0] - remove;
        }
    } else if (move[0] == "B" || move[0] == "b") {

        if (pickArray[1] - remove < 0 || remove <= 0) {
            alert("Remove a different amount");
            playerMove();
        } else {
            pickArray[1] = pickArray[1] - remove;
        }

    } else if (move[0] == "C" || move[0] == "c") {

        if (pickArray[2] - remove < 0 || remove <= 0) {
            alert("Remove a different amount");
            playerMove();
        } else {
            pickArray[2] = pickArray[2] - remove;
        }
    }
}

function computerMove() {

    if (pickArray[0] == 0 && pickArray[1] == 0) {
        return pickArray[2] = 0;
    } else if (pickArray[0] == 0 && pickArray[2] == 0) {
        return pickArray[1] = 0;
    } else if (pickArray[1] == 0 && pickArray[2] == 0) {
        return pickArray[0] = 0;
    } else {
        var computerRemove = Math.random();
        var indexToPick = Math.floor(computerRemove * (pickArray.length));
        var amountToRemove = Math.ceil(computerRemove * (pickArray[indexToPick]));
        if (pickArray[indexToPick] == 0) {
            computerMove();
        } else {
            return pickArray[indexToPick] = pickArray[indexToPick] - amountToRemove;
        }
    }
}

function checkIfGameOver() {
    if (pickArray[0] == 0 && pickArray[1] == 0 && pickArray[2] == 0) {
        gameOver = true;
    }
}
