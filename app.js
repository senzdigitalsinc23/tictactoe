
const gameController = (() => {
    let winner = document.querySelector('.displaystatus');

    gameStatusContainer.style.display = 'none';
    playerOneInd.style.backgroundColor = 'red';
    twoPlayer.checked = true;
    txtPlayerOne.style.display = 'block';
    txtPlayerTwo.style.display = 'block';
    btnStart.style.display = 'block';
    onePlayer.disabled = true;

    const showElements = (elements = []) => {
        elements.forEach((element) => {
            element.style.display = 'block';
        })
    }

    const hideElements = (elements = []) => {
        elements.forEach((element) => {
            element.style.display = 'none';
        })
    }

    hideElements([
        controlsContainer,
        gameBoard,
    ]);

    const play = () => {       
        for (let i = 0; i < 9; i++) {
            squares[i].addEventListener('click', () => {                
                if (gamePlay.getBoard()[i] == "" && gamePlay.getWinner() == null) {
                    squares[i].innerHTML = gamePlay.getCurrentPlayer();
                    gamePlay.makeMove(i);
                    
                    displayWinner();
                    playerOneScore.innerHTML = gamePlay.getPlayerOneWins();
                    playerTwoScore.innerHTML = gamePlay.getPlayerTwoWins();
                    highlightPlayerTurn();

                    let color = 'red';
                    let fontSize = '3em';
                    let fontWeight = 'bolder';
                    let display = 'flex';
                    let flexDirection = 'column';
                    let alignItems = 'center';
                    let message = '';
                    
                    if (gamePlay.gameOver()) {
                        if (gamePlay.getGameWinner() == 1) {
                            message = "GAME OVER <br>" + playerOneName.innerHTML + " WINS";
                        }else if (gamePlay.getGameWinner() == 2) {
                            message = "GAME OVER <br>" + playerTwoName.innerHTML + " WINS";

                        }

                        gameOverContainer.style.color = color;
                        gameOverContainer.style.fontSize = fontSize
                        gameOverContainer.style.fontWeight = fontWeight;
                        gameOverMain.style.display = display;
                        gameOverContainer.style.alignItems = alignItems;

                        gameOverContainer.innerHTML = message;

                        gameStatusContainer.style.display = 'none';

                        btnReplay.style.display = '';

                        return;
                    } else {
                
                    }
                }
            })           
        }
        
    }

    const disablePointer = (squares = []) => {
        if (squares[i].innerHTML != "") {
            squares[i].addEventListener("mouseover", () => {
                squares[i].style.cursor = 'default';
            })
        }   
    }

    let getWin = () => {
        let win = '';
        if (gamePlay.getWinner() == 1) {
             win = playerOneName.innerHTML + " wins";
        }else if (gamePlay.getWinner() == 2) {
            win = playerTwoName.innerHTML + " wins";
       }

        return win;
    }

    const displayWinner = () => {        
        if (gamePlay.getWinner() == 1 || gamePlay.getWinner() ==2) {
            winner.style.color = gamePlay.getWinner() == 1 ? 'green' : 'red';

            winner.innerHTML = getWin();

            gameStatusContainer.style.display = 'flex';
        }else if(gamePlay.getWinner() == 0){
            winner.style.color = 'black';
            winner.innerHTML = "Draw Game"

            gameStatusContainer.style.display = 'flex';
        }
    }

    let restartAll = () => {
        for (let i = 0; i < 9; i++) {
            squares[i].innerHTML = "";     
        }
    }

    continueBtn.addEventListener('click', () => {
        restartAll();

        gamePlay.resetGame();
        gameStatusContainer.style.display = 'none';
        gamePlay.resetWinner(null);
        
    });

    const restart = (key) => {
        key.addEventListener('click', () => {
            window.location.href = '/Projects/tictactoe';
        })
    }

    restart(reset);

    const highlightPlayerTurn = () => {
        if (gamePlay.getCurrentPlayer() == "X") {
            playerOneInd.style.backgroundColor = 'red';
            playerTwoInd.style.backgroundColor = 'rgb(166, 207, 207)';
        }else if (gamePlay.getCurrentPlayer() == "O") {
            playerTwoInd.style.backgroundColor = 'red'
            playerOneInd.style.backgroundColor = 'rgb(166, 207, 207)'
        }
    }

    onePlayer.addEventListener('click', () => {
        if (onePlayer.checked == true) {
            showElements([txtPlayerOne, btnStart]);
            hideElements([txtPlayerTwo])
            txtPlayerTwo.disabled = true;
            txtPlayerOne.enabled
        }
    });

    twoPlayer.addEventListener('click', () => {
        if (twoPlayer.checked == true) {
            showElements([txtPlayerOne,txtPlayerTwo, btnStart])
            txtPlayerOne.disabled = false;
            txtPlayerTwo.disabled = false;
        }
    });

    btnStart.addEventListener('click', () => {
        if (onePlayer.checked == true && txtPlayerOne.value != '') {
            onePlayer.checked = false;
            twoPlayer.checked = false;
            controlsContainer.style.display = 'flex';
            gameBoard.style.display = 'grid';

            playerOneName.innerHTML = txtPlayerOne.value + " (X)";
            gameMenu.style.display = 'none'
        }else if(twoPlayer.checked == true && txtPlayerOne.value != '' && txtPlayerTwo.value != '') {
            onePlayer.checked = false;
            controlsContainer.style.display = 'flex';
            gameBoard.style.display = 'grid';

            playerOneName.innerHTML = txtPlayerOne.value + " (X)";
            playerTwoName.innerHTML = txtPlayerTwo.value + " (O)";
            gameMenu.style.display = 'none'
        }
    });

    btnReplay.addEventListener('click', () => {
        restartAll();
        gamePlay.restartGame();

        playerOneScore.innerHTML = 0;
        playerTwoScore.innerHTML = 0;

        gameOverMain.style.display = 'none';
        //btnReplay.style.display = 'none';
    })

    return { play, restart }
    
})();

gameController.play();