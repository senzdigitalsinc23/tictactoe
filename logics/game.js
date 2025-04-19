

const Player = (playerName, marker) => {
    return { playerName, marker };
};

const gamePlay = (() => {
    let board = Array(9).fill("");
    let currentPlayer = "X";
    let gameActive = true;
    let playerOneWins = 0;
    let playerTwoWins = 0;
    let winner =  null;

    const winPattern = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,5], [2,4,6]
    ];

    const restartGame = () => {
        board = Array(9).fill("");
        currentPlayer = "X";
        gameActive = true;
        playerOneWins = 0;
        playerTwoWins = 0;
        winner =  null;
    }

    const getWinner = () => {return winner}
    let setPlayerOneWins = () => {playerOneWins++;}
    let setPlayerTwoWins = () => {playerTwoWins++;}

    const getPlayerOneWins = () => {return playerOneWins;}
    const getPlayerTwoWins = () => {return playerTwoWins;}

    const checkWinner = (board, player) => {
        return winPattern.some(pattern => 
            pattern.every(index => board[index] === player)
        );
    }

    const resetGame = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameActive = true;
    }
    

    const makeMove = (index) => {
        if (!gameActive || board[index] !== "") {return;}
        
        board[index] = currentPlayer;
        if (checkWinner(board, currentPlayer)) {
            if (currentPlayer == "X") {
                setPlayerOneWins();
            }else if (currentPlayer == "O") {
                setPlayerTwoWins();
            }
            gameActive = false;

            winner = currentPlayer == "X" ? 1 : 2;

            resetGame();

            return;
        }else if (board.every(cell => cell !== "")) {
            
            gameActive = false;
            
            resetGame();
            return winner =  "Draw";
        }else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }

        return;
    }

    return { 
        getPlayerOneWins, 
        getPlayerTwoWins, 
        makeMove, 
        getWinner,
        restartGame
    };
})();


gamePlay.makeMove(0);
gamePlay.makeMove(4);
gamePlay.makeMove(1);
gamePlay.makeMove(8);
gamePlay.makeMove(2);

console.log(`Player ${gamePlay.getWinner()} wins`);

gamePlay.makeMove(0);
gamePlay.makeMove(4);
gamePlay.makeMove(1);
gamePlay.makeMove(8);
gamePlay.makeMove(2);

console.log(`Player ${gamePlay.getWinner()} wins`);

gamePlay.makeMove(4);
gamePlay.makeMove(0);
gamePlay.makeMove(8);
gamePlay.makeMove(2);
gamePlay.makeMove(7);
gamePlay.makeMove(1);


console.log(`Player ${gamePlay.getWinner()} wins`);

console.log(gamePlay.getPlayerOneWins());
console.log(gamePlay.getPlayerTwoWins());
