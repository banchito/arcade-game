//initial state
let gameState = {
  player: {
    name: "",
    points: 0,
  },
  canvas: [
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  ],
  
};

let startGame;
let snakeCrashed, snakeOutOfBounds;
let newApple, newSnakeHead;
let scoreCounter = 0;

let snake = {
  body: [
    [15, 13],
    [15, 14],
    [15, 15],
    [15, 16],
    [15, 17],
  ],
  nextDirection: [0, -1],
  apple: [10, 5],
};

function buildInitialState() {
  renderState();
  buildApple();
  buildSnake();
}

// render the state
function renderState() {
  const canvasElem = $("#canvas");
  canvasElem.empty();
  gameState.canvas.forEach(function (row, rowIndex) {
    row.forEach(function (segment, segmentIndex) {
      const segmentElem = $(
        `<div class="segment" data-x=${rowIndex} data-y=${segmentIndex}>`
      );
      canvasElem.append(segmentElem);
    });
  });
}

function buildSnake() {
  $(".segment").removeClass("snake");

  newSnakeHead = buildNewSnakeHead();

  snake.body.unshift(newSnakeHead);
  snake.body.pop();

  snake.body.forEach(function (coordinates) {
    const coordinatex = coordinates[0];
    const coordinatey = coordinates[1];

    segmentElemSnake = $(`[data-x="${coordinatex}"][data-y="${coordinatey}"]`);
    segmentElemSnake.addClass("snake");
  });
}


function buildApple() {
  $(".segment").removeClass("apple");

  const appleY = getRandomNumber(0,29)
  const appleX = getRandomNumber(0,29)

  snake.apple.splice(0, 1, appleX);
  snake.apple.splice(1, 1, appleY);

  const appleCoordinateX = snake.apple[0];
  const appleCoordinateY = snake.apple[1];
  newApple = [appleCoordinateX, appleCoordinateY];

  segmentElemApple = $(
    `[data-x="${appleCoordinateX}"][data-y="${appleCoordinateY}"]`
  );
  segmentElemApple.hasClass('snake') ? buildApple() : segmentElemApple.addClass("apple");
}

function buildNewSnakeHead() {
  const snakeHead = snake.body[0];
  const snakeheadX = snakeHead[0];
  const snakeHeadY = snakeHead[1];

  const newSnakeHeadx = snakeheadX + snake.nextDirection[0];
  const newSnakeHeadY = snakeHeadY + snake.nextDirection[1];
  newSnakeHead = [newSnakeHeadx, newSnakeHeadY];

  return newSnakeHead;
}

function checkSnakeCrashed() {
  const snakeBody = snake.body.slice(1);

  let result = snakeBody.find(function (node) {
    return node[0] === newSnakeHead[0] && node[1] === newSnakeHead[1];
  });
  result && (snakeCrashed = true)
  
}

function checkSnakeOutOfBounds(){
   const headX  = newSnakeHead[0]
   const headY  = newSnakeHead[1]

   if(headX < 0 || headX > 29 || headY < 0 || headY > 29){
      snakeOutOfBounds = true
     
   }
}

function checkSnakeAte() {
  let equals =
    newApple.length == newSnakeHead.length &&
    newApple.every(function (element, index) {
      return element === newSnakeHead[index];
    });
  equals && hasEaten();
}

function hasEaten() {
  snake.body.push(newApple);
  buildApple();
  updateScore();
}

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateScore() {
  scoreCounter += 100;
  console.log(scoreCounter)
  
  $('.score').text(`Your current score is: ${scoreCounter}`)
 
}

function checkGameOver() {
  checkSnakeCrashed()
  checkSnakeOutOfBounds()
  
  if (snakeCrashed === true || snakeOutOfBounds === true){
    clearInterval(startGame)

  }
}

function tick() {
  buildSnake();
  checkGameOver()
  checkSnakeAte() 
}

function gameOn(){
    startGame = setInterval(tick, 100);
    return startGame
}

$(window).on("load", function (event){
    if(startGame === undefined || startGame === null){
      gameOn()
    }
})


$(window).on("keydown", function (event) {
  //left
  if (event.keyCode === 37 && snake.nextDirection[1] !== 1) {
    snake.nextDirection = [0, -1];
  }
  //up
  if (event.keyCode === 38 && snake.nextDirection[0] !== 1) {
    snake.nextDirection = [-1, 0];
  }
  //right
  if (event.keyCode === 39 && snake.nextDirection[1] !== -1) {
    snake.nextDirection = [0, 1];
  }
  //down
  if (event.keyCode === 40 && snake.nextDirection[0] !== -1) {
    snake.nextDirection = [1, 0];
  }
});

// function requestPlayerName() {
  // const form = $(
    // `<form id="playerNameForm"><input id='player-name-input type='text'><button>Save Name</button></form>`
  // );
  // const playerNameElem = $("#player-name");
  // playerNameElem.append(form);
// 
  // $("#app").on("input", "#player-name-input", function (event) {
    // event.preventDefault();
    // let name = $("#player-name-input").val();
// 
    // gameState.player.name = name;
    // console.log(gameState.player.name);
  // });
// 
  // $("#app").on("submit", "#playerNameForm", function (event) {
    // event.preventDefault();
    // if (gameState.player.name.trim() !== "") {
      // $("#player-name-input").remove();
      // playerNameElem.text(gameState.player.name);
    // }
  // });
//}

buildInitialState();
