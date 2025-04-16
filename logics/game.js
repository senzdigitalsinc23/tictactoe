let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let countPlayerWins = [0, 0]

const winPattern = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,5], [2,4,6]
];

function checkWinner(board, player) {
    return winPattern.some(pattern => 
        pattern.every(index => board[index] === player)
    );
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
}


function makeMove(index) {
    if (!gameActive || board[index] !== "") {return;}
    
    board[index] = currentPlayer;
    if (checkWinner(board, currentPlayer)) {
        if (currentPlayer == "X") {
            countPlayerWins[0]++;
        }else if (currentPlayer == "O") {
            countPlayerWins[1]++;
        }
        gameActive = false;
        resetGame();
        return `${currentPlayer} wins`
    }else if (board.every(cell => cell !== "")) {
        
        gameActive = false;
        
        resetGame();
        return "Draw Game";
    }else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}    
