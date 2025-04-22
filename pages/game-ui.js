
let mainContainer = document.querySelector('#main-container');

//create elements
let gameTitleDiv = createElement('div', 'gametitlediv', "TIC TAC TOE");
let controlsContainer = createElement('div', 'controlscontainer');
let controlsDiv = createElement('div', 'controlsdiv');
let btnStart = createElement('button', 'start', "Start")
let btnReset = createElement('button', 'reset', "Restart")
let gameMonitorDiv = createElement('div', 'gamemonitordiv', 'Game Monitor');
let gameBoardContainer = createElement('gameboardcontainer', 'gameboardcontainer');
let gameBoard = createElement('div', 'gameboard')

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
let playerTwoName = createElement('div', 'playertwoname', 'Player 2')
let playerTwoInd = createElement('div', 'playertwoind')

//Create gameboard squares
let squares = [];
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        let squareName = 'square_' + i*j;

        squares.push(createElement('div', squareName));
                 
    }
    
}

attach(mainContainer, [gameTitleDiv, controlsContainer, gameStatusContainer, gameBoardContainer]);
attach(gameStatusContainer, [displayStatus, continueBtn])
attach(playerOneInd, [/* playerOneIndicator, */ playerOneScore])
attach(playerOneScreen, [playerOneName, playerOneInd]);

attach(playerTwoInd, [/* playerTwoIndicator, */ playerTwoScore])
attach(playerTwoScreen, [playerTwoName, playerTwoInd]);
attach(controlsContainer, [playerOneScreen, controlsDiv, playerTwoScreen])
attach(gameBoardContainer, [gameBoard]);
attach(controlsDiv, [btnStart, btnReset]);
attach(gameBoard, squares)
