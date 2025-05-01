

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

    const getBoard = () => { return board}

    const winPattern = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    const getGameActive = () => { return gameActive; }

    const restartGame = () => {
        board = Array(9).fill("");
        currentPlayer = "X";
        gameActive = true;
        playerOneWins = 0;
        playerTwoWins = 0;
        winner =  null;
    }

    let resetWinner = () => { winner = null}
    const getWinner = () => {return winner}
    let setPlayerOneWins = () => {playerOneWins++;}
    let setPlayerTwoWins = () => {playerTwoWins++;}

    const getPlayerOneWins = () => {return playerOneWins;}
    const getPlayerTwoWins = () => {return playerTwoWins;}

    const getCurrentPlayer = () => {return currentPlayer;}

    const checkWinner = (board, player) => {
        return winPattern.some(pattern => 
            pattern.every(index => board[index] === player)
        );
    }

    const resetGame = () => {
        board = Array(9).fill("");
        currentPlayer = "X";
        gameActive = true;
        
    }

    const gameOver = () => {
        if ((getPlayerOneWins() + getPlayerTwoWins()) == 5) {
            return true;
        }else return false;
    }
    
    const getGameWinner = () => {
        if (getPlayerOneWins() > getPlayerTwoWins()) {
            return 1;
        }else if(getPlayerTwoWins() > getPlayerOneWins()){
            return 2;
        }
    }

    const makeMove = (index) => {
        //alert(index)
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
            return winner = 0;
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
        restartGame,
        getCurrentPlayer,
        getGameActive,
        getBoard,
        resetGame,
        resetWinner,
        gameOver,
        getGameWinner,
    };
})();