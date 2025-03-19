
let mainContainer = document.querySelector('#main-container');

//create elements
let gameTitleDiv = createElement('div', 'gametitlediv', "TIC TAC TOE");
let controlsContainer = createElement('div', 'controlscontainer');
let controlsDiv = createElement('div', 'controlsdiv');
let btnStart = createElement('button', 'start', "Start")
let btnReset = createElement('button', 'reset', "Reset")
let gameMonitorDiv = createElement('div', 'gamemonitordiv', 'Game Monitor');
let gameBoardContainer = createElement('gameboardcontainer', 'gameboardcontainer');
let gameBoard = createElement('div', 'gameboard')
let squareOne = createElement('div', 'squareone');
let squareTwo = createElement('div', 'squaretwo');
let squareThree = createElement('div', 'squarethree');
let squareFour = createElement('div', 'squarefour');
let squareFive = createElement('div', 'squarefive');
let squareSix = createElement('div', 'squaresix');
let squareSeven = createElement('div', 'squareseven');
let squareEight = createElement('div', 'squareeight');
let squareNine = createElement('div', 'squarenine');

//Create gameboard squares
let squares = [];
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        let squareName = 'square_' + i*j;

        squares.push(createElement('div', squareName));
                 
    }
    
}

console.log(squares);


//set attributes

//Select elements
//gameTitleDiv.innerHTML = "TIC TAC TOE"


//add styling

for (let i = 0; i < 9; i++) {
    squares[i].addEventListener('click', () => {
        alert('Square ' + i + ' is clicked');
    })
    
}

//attach elements
attach(mainContainer, [gameTitleDiv, controlsContainer, gameMonitorDiv, gameBoardContainer]);
attach(controlsContainer, controlsDiv)
attach(gameBoardContainer, [gameBoard]);
attach(controlsDiv, [btnStart, btnReset]);
attach(gameBoard, squares)
