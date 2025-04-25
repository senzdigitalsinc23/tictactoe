
const gameController = (() => {
    let winner = document.querySelector('.displaystatus');

    gameStatusContainer.style.display = 'none';
    playerOneInd.style.backgroundColor = 'red'
    onePlayer.checked = true;

    const showElements = (elements = []) => {
        elements.forEach((element) => {
            element.style.display = 'block'
        })
    }

    const hideElements = (elements = []) => {
        elements.forEach((element) => {
            element.style.display = 'none'
        })
    }

    hideElements([
        controlsContainer,
        gameBoard,
        txtPlayerTwo,
    ]);

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
    })
    
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

    const displayWinner = () => {        
        if (gamePlay.getWinner() == 1 || gamePlay.getWinner() ==2) {
            winner.style.color = gamePlay.getWinner() == 1 ? 'green' : 'red';

            winner.innerHTML = `Player ${ gamePlay.getWinner() } wins`;

            gameStatusContainer.style.display = 'flex';
        }else if(gamePlay.getWinner() == 0){
            winner.style.color = 'black';
            winner.innerHTML = "Draw Game"

            gameStatusContainer.style.display = 'flex';
        }
    }

    continueBtn.addEventListener('click', () => {
        for (let i = 0; i < 9; i++) {
            squares[i].innerHTML = "";     
        }

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


    return { play, restart }
    
})();

gameController.play();