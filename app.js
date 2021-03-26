//initial state
let gameState = {
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


// global variables
let scores = [];
let startGame;
let snakeCrashed, snakeOutOfBounds;
let newApple, newSnakeHead;
let scoreCounter = 0;


//the initial apple, snake and snake's direction
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


//life Span functions
function buildInitialState() {
  fetchScores();
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


// Creates the snake and calls a function creating a new snake head with a new direction
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


//Builds food and place it randomly without being placed in the same space as the snake
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
  segmentElemApple.hasClass("snake") ? buildApple() : segmentElemApple.addClass("apple");
}


//Gives a random number to buidApple
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Builds a new snake head for buildSnake()
function buildNewSnakeHead() {
  const snakeHead = snake.body[0];
  const snakeheadX = snakeHead[0];
  const snakeHeadY = snakeHead[1];

  const newSnakeHeadx = snakeheadX + snake.nextDirection[0];
  const newSnakeHeadY = snakeHeadY + snake.nextDirection[1];
  newSnakeHead = [newSnakeHeadx, newSnakeHeadY];

  return newSnakeHead;
}


//Checks if the snake head eats an apple
function checkSnakeAte() {
  let equals =
    newApple.length == newSnakeHead.length &&
    newApple.every(function (element, index) {
      return element === newSnakeHead[index];
    });
  equals && hasEaten();
}


//If snake ate apple it will grow, build and place a new apple and add 100 to the score
function hasEaten() {
  snake.body.push(newApple);
  buildApple();
  addToScore();
}


//add 100 to score an update UI
function addToScore() {
  scoreCounter += 100;
  
  $('.score').text(`Your current score is: ${scoreCounter}`)
}


//When gameover resets the score to 0
function resetScore(){
  scoreCounter = 0;
  $('.score').text(`Your current score is: ${scoreCounter}`)
}


// Checks if snake crashed on itself or against bounds. If so open prompt for leaderboards
function checkGameOver() {
  checkSnakeCrashed()
  checkSnakeOutOfBounds()
  
  if (snakeCrashed === true || snakeOutOfBounds === true){
    clearInterval(startGame)
    $(".modal").addClass("open");
    
  }
}


//Helper Function to determine Game Over
function checkSnakeCrashed() {
  const snakeBody = snake.body.slice(1);

  let result = snakeBody.find(function (node) {
    return node[0] === newSnakeHead[0] && node[1] === newSnakeHead[1];
  });
  result && (snakeCrashed = true)
  
}


//Helper Function to determine Game Over
function checkSnakeOutOfBounds(){
   const headX  = newSnakeHead[0]
   const headY  = newSnakeHead[1]

   if(headX < 0 || headX > 29 || headY < 0 || headY > 29){
      snakeOutOfBounds = true
     
   }
}


// sorts scores in descending order, caps leaderboard to 3 highest scores and store scores in local storage
function storeScore(){
  scores.sort(function(a, b){
    return b.score - a.score
  })

  scores.length > 3 && scores.splice(3)

  localStorage.setItem("scores", JSON.stringify(scores))
}


// Retrieves scores from local Storage and update global variable holding the scores. If local storage null sets default leaderboard
function fetchScores(){
  scores = (localStorage.getItem("scores") === null ? fetchDefaultScores() : JSON.parse(localStorage.getItem("scores")));
}


//defaul leaderboard object
function fetchDefaultScores(){
  scores = [
    {
      name: "Your Name", 
      score: 0
    }
  ]  
  return scores
}


// Interval: draws the snake in canvas and it's direction, checks for Game Over and if snake ate apple
function tick() {
  buildSnake();
  checkGameOver()
  checkSnakeAte() 
}


// starts the game loop
function gameOn(){
    startGame = setInterval(tick, 100);
    return startGame
}


//Event Handlers


//on load start the game automatically - better be ready
$(window).on("load", function (event){
    if(startGame === undefined || startGame === null){
      buildInitialState()
      gameOn()
    }
})


//Save player's  name and score
$('.save-score').click(function(event){
  event.preventDefault()
  let playerName = $('#player-name').val()
  let finalScore = scoreCounter;
  
  let scoreObj =  { 
      name: playerName, 
      score: finalScore,
    } 
  
  scores.push(scoreObj)
  storeScore()
  $(".gameOver-form").trigger("reset");
  
})


// starts a new game reseting the snake, global variables and score
$('.start-new-game').click(function(event){
  event.preventDefault();
  resetScore()
  $('.gameOver-form').trigger("reset");
  snakeCrashed = false;
  snakeOutOfBounds = false;
  snake = {
    body: [
      [15, 13],
      [15, 14],
      [15, 15],
      [15, 16],
      [15, 17],
    ],
    nextDirection: [0, -1],
    apple: [],
  };
  $(".modal").removeClass("open");
  gameOn()
})


//Gives snake it's directions and prevents to run backwards
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





















 
 
