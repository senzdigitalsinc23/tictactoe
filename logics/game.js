let availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let playerTurn = 1;
let playerOneMoves = [];
let playerTwoMoves = [];
let countPlayerOneMoves = 0;
let countPlayerTwoMoves = 0;
let playerOneWins = 0;
let playerTwoWins = 0;

let switchPlayer = (player) => {
    playerTurn = player;

    return playerTurn;
}


let reportTurn = () => {
    if (playerTurn == 1) {
        return "Player 1's turn";
    }else if (playerTurn == 2) {
        return "Player 2's turn";
    }
}


let addMove = (move) => {
    var index = availablePos.indexOf(move);

    if (playerTurn == 1) {
        playerOneMoves.push(move);
        countPlayerOneMoves++;       
        switchPlayer(2);
    }else if(playerTurn == 2){
        playerTwoMoves.push(move);
        countPlayerTwoMoves++; 
        switchPlayer(1);
    }
    
    availablePos.splice(index, 1);
}
