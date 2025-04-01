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


let play = (position) => {
    if (availablePos.includes(position)) {
       addMove(position)
       winLogic();
        
    }else {
        return "Selection not available";
    }
}


let winLogic = () => {
    if (playerOneMoves.length == 3) {
        if (playerOneMoves.includes(0) && playerOneMoves.includes(1) && playerOneMoves.includes(2)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerOneMoves = 0;
            playerOneWins++;
            playerOneMoves = []

            playerTurn = 1;

            return "Player 1 won";
        } else if (playerOneMoves.includes(3) && playerOneMoves.includes(4) && playerOneMoves.includes(5)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerOneMoves = 0;
            playerOneWins++;

            playerOneMoves = []

            playerTurn = 1;

            return "Player 1 won";
        } else if (playerOneMoves.includes(6) && playerOneMoves.includes(7) && playerOneMoves.includes(8)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerOneMoves = 0;
            playerOneWins++;

            playerOneMoves = []

            playerTurn = 1;

            return "Player 1 won";
        } else if (playerOneMoves.includes(0) && playerOneMoves.includes(3) && playerOneMoves.includes(6)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerOneMoves = 0;
            playerOneWins++;

            playerOneMoves = []

            playerTurn = 1;

            return "Player 1 won";
        } else if (playerOneMoves.includes(1) && playerOneMoves.includes(4) && playerOneMoves.includes(7)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerOneMoves = 0;
            playerOneWins++;

            playerOneMoves = []

            playerTurn = 1;

            return "Player 1 won";
        } else if (playerOneMoves.includes(2) && playerOneMoves.includes(5) && playerOneMoves.includes(8)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerOneMoves = 0;
            playerOneWins++;

            playerOneMoves = []

            playerTurn = 1;

            return "Player 1 won";
        }else if (playerOneMoves.includes(0) && playerOneMoves.includes(4) && playerOneMoves.includes(8)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerOneMoves = 0;
            playerOneWins++;

            playerOneMoves = []

            playerTurn = 1;

            return "Player 1 won";
        }else if (playerOneMoves.includes(2) && playerOneMoves.includes(4) && playerOneMoves.includes(6)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerOneMoves = 0;
            playerOneWins++;

            playerOneMoves = []

            playerTurn = 1;

            return "Player 1 won";
        }

        
        playerOneMoves = [];

    }else if (playerTwoMoves.length == 3) {
        if (playerTwoMoves.includes(0) && playerTwoMoves.includes(1) && playerTwoMoves.includes(2)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerTwoMoves = 0;
            playerTwoWins++;

            playerTwoMoves = []

            playerTurn = 1;

            return "Player 2 won";
        } else if (playerTwoMoves.includes(3) && playerTwoMoves.includes(4) && playerTwoMoves.includes(5)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerTwoMoves = 0;
            playerTwoWins++;

            playerTwoMoves = []

            playerTurn = 1;

            return "Player 2 won";
        } else if (playerTwoMoves.includes(6) && playerTwoMoves.includes(7) && playerTwoMoves.includes(8)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerTwoMoves = 0;
            playerTwoWins++;

            playerTwoMoves = []

            playerTurn = 1;

            return "Player 2 won";
        } else if (playerTwoMoves.includes(0) && playerTwoMoves.includes(3) && playerTwoMoves.includes(6)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerTwoMoves = 0;
            playerTwoWins++;

            playerTwoMoves = []

            playerTurn = 1;

            return "Player 2 won";
        } else if (playerTwoMoves.includes(1) && playerTwoMoves.includes(4) && playerTwoMoves.includes(7)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerTwoMoves = 0;
            playerTwoWins++;

            playerTwoMoves = []

            playerTurn = 1;

            return "Player 2 won";
        } else if (playerTwoMoves.includes(2) && playerTwoMoves.includes(5) && playerTwoMoves.includes(8)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerTwoMoves = 0;
            playerTwoWins++;

            playerTwoMoves = []

            playerTurn = 1;

            return "Player 2 won";
        }else if (playerTwoMoves.includes(0) && playerTwoMoves.includes(4) && playerTwoMoves.includes(8)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerTwoMoves = 0;
            playerTwoWins++;

            playerTwoMoves = []

            playerTurn = 1;

            return "Player 2 won";
        } else if (playerTwoMoves.includes(2) && playerTwoMoves.includes(4) && playerTwoMoves.includes(6)) {
            availablePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            countPlayerTwoMoves = 0;
            playerTwoWins++;

            playerTwoMoves = []

            playerTurn = 1;

            return "Player 2 won";
        }

        playerTwoMoves = [];
    }
}
