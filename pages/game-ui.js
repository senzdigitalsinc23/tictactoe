
let mainContainer = document.querySelector('#main-container');

//create elements
let gameTitleDiv = createElement('div', 'gametitlediv', "TIC TAC TOE");
let controlsContainer = createElement('div', 'controlscontainer');
let controlsDiv = createElement('div', 'controlsdiv');
let btnExit = createElement('button', 'exit', "Exit Game")
let btnReset = createElement('button', 'reset', "New Game")
let gameMonitorDiv = createElement('div', 'gamemonitordiv', 'Game Monitor');
let gameBoardContainer = createElement('gameboardcontainer', 'gameboardcontainer');
let gameBoard = createElement('div', 'gameboard')

let gameMenu = createElement('div', 'gamemodecontainer');
let mainMenuCont = createElement('div', 'mainmenu', "Main Menu");
let selectMode = createElement('div', 'selectmode', 'Select game mode');

let onePlayer = createElement('input', 'oneplayer')
let twoPlayer = createElement('input', 'twoplayer')
let btnGroup = createElement('fieldset', 'modegroup')
let onePlayerLabel = createElement('label', 'oneplayerlabel', "vrs Computer");
let twoPlayerLabel = createElement('label', 'twoplayerlabel', "2 Players");

let txtPlayerOne = createElement('input', 'txtplayerone');
let txtPlayerTwo = createElement('input', 'txtplayertwo');

let btnStart = createElement('button', 'start', "Start")
let btnReplay = createElement('button', 'replay', 'Play Again');

attributes({'type':'text', 'placeholder':'Enter player 1 name'}, [txtPlayerOne])
attributes({'type':'text', 'placeholder':'Enter player 2 name'}, [txtPlayerTwo])

attributes({'type':'radio', 'name':'modegroup'}, [onePlayer, twoPlayer])

attributes({'for':'oneplayer'}, [onePlayer]);
attributes({'for':'twoplayer'}, [twoPlayer]);

const brk = createElement('br');

let gameStatusContainer = createElement('div', 'gamestatus');
let continueBtn = createElement('button', 'continue', 'Next Round');
let displayStatus = createElement('div', 'displaystatus', '')

let playerOneScreen = createElement('div', 'playeronescreen')
let playerOneIndicator = createElement('div', 'playeroneindicator', 'X');
let playerOneScore = createElement('div', 'playeronescore', '0');
let playerOneName = createElement('div', 'playeronename', 'Player 1');
let playerOneInd = createElement('div','playeroneind');

let playerTwoScreen = createElement('div', 'playertwoscreen')
let playerTwoIndicator = createElement('div', 'playertwoindicator', 'O');
let playerTwoScore = createElement('div', 'playertwoscore', '0');
let playerTwoName = createElement('div', 'playertwoname', 'Player 2 (O)')
let playerTwoInd = createElement('div', 'playertwoind');

let gameOverContainer = createElement('div', 'gameovercont', 'uiykjgfsfdghgjkkhj');
let gameOverMain = createElement('div', 'gameovermain');

//Create gameboard squares
let squares = [];
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        let squareName = 'square_' + i*j;

        squares.push(createElement('div', squareName));
                 
    }
    
}

attach(mainContainer, [gameTitleDiv, gameMenu, controlsContainer, gameStatusContainer, gameOverMain, gameBoardContainer]);
attach(gameOverMain, [gameOverContainer, btnReplay])
attach(gameMenu, [mainMenuCont])
attach(mainMenuCont, [btnGroup])
attach(btnGroup, [onePlayer,onePlayerLabel, brk, brk, twoPlayer,twoPlayerLabel, txtPlayerOne,txtPlayerTwo, btnStart])


attach(gameStatusContainer, [displayStatus, continueBtn])
attach(playerOneInd, [/* playerOneIndicator, */ playerOneScore])
attach(playerOneScreen, [playerOneName, playerOneInd]);

attach(playerTwoInd, [/* playerTwoIndicator, */ playerTwoScore])
attach(playerTwoScreen, [playerTwoName, playerTwoInd]);
attach(controlsContainer, [playerOneScreen, controlsDiv, playerTwoScreen])
attach(gameBoardContainer, [gameBoard]);
attach(controlsDiv, [btnExit, btnReset]);
attach(gameBoard, squares)
