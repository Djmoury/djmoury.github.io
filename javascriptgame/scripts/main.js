const questionBank = [
  { "question": "What keyword is used to declare a variable in JavaScript?", "answer": "let" },
  { "question": "Which keyword is used to define a constant variable?", "answer": "const" },
  { "question": "What function is used to print output to the console?", "answer": "console.log" },
  { "question": "What symbol is used for single-line comments in JavaScript?", "answer": "//" },
  { "question": "What keyword is used to define a function?", "answer": "function" },
  { "question": "Which operator is used for strict equality comparison?", "answer": "===" },
  { "question": "What method is used to add an element to an array?", "answer": "push" },
  { "question": "What JavaScript data type is used to store multiple values?", "answer": "array" },
  { "question": "What function converts a string to an integer?", "answer": "parseInt" },
  { "question": "What function converts a string to a floating-point number?", "answer": "parseFloat" },
  { "question": "Which built-in object represents a date and time?", "answer": "Date" },
  { "question": "Which loop runs at least once before checking the condition?", "answer": "do-while" },
  { "question": "Which keyword is used to exit a loop early?", "answer": "break" },
  { "question": "Which operator is used for addition in JavaScript?", "answer": "+" },
  { "question": "Which JavaScript data type represents true or false values?", "answer": "boolean" },
  { "question": "What keyword is used to return a value from a function?", "answer": "return" },
  { "question": "Which event occurs when a user clicks on an element?", "answer": "click" },
  { "question": "Which JavaScript method is used to remove the last element from an array?", "answer": "pop" },
  { "question": "Which keyword is used to create an object?", "answer": "new" },
  { "question": "Which keyword is used to handle errors in JavaScript?", "answer": "try" }
];

let playerName = localStorage.getItem("name") || "";
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 300;

const playerNameElement = document.querySelector("#playerName");
const startGameButton = document.querySelector("#startGame");
const submitAnswerButton = document.querySelector("#submitAnswer");
const setUserNameButton = document.querySelector("#setUserName");
const timerElement = document.querySelector("#timer");
const questionElement = document.querySelector("#question");
const answerField = document.querySelector("#answerField");


if (!playerName) {
  alert("Please enter your name to start the quiz.");
  setUserName(); 
}

playerNameElement.textContent = `Welcome to the Timed JavaScript Quiz!, ${playerName}!`;

setUserNameButton.addEventListener("click", setUserName);
startGameButton.addEventListener("click", startGame);
submitAnswerButton.addEventListener("click", checkAnswer);



function setUserName() {
  const name = prompt("Enter your name:");
  if (name) {
    localStorage.setItem("name", name);
    playerNameElement.textContent = `Welcome to the Timed JavaScript Quiz!, ${name}!`;
    playerName = name;
  }
}

function startGame() {
  startGameButton.disabled = true;
  timeLeft = 300;
  score = 0;
  currentQuestionIndex = 0;
  selectedQuestions = getRandomQuestions(10);
  timer = setInterval(updateTimer, 1000);
  showQuestion();
}
function getRandomQuestions(count) {
  let shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
function updateTimer() {
  timeLeft--;
  timerElement.textContent = `Time Left: ${timeLeft}s`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    endGame();
  }
}

function showQuestion() {
  if (currentQuestionIndex < selectedQuestions.length) {
    questionElement.textContent = selectedQuestions[currentQuestionIndex].question;
    answerField.value = "";
  } else {
    endGame();
  }
}

function checkAnswer() {
  const userAnswer = answerField.value.trim().toLowerCase();
  const correctAnswer = selectedQuestions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  clearInterval(timer);
  questionElement.textContent = `Game Over! You scored ${score}/${selectedQuestions.length}.`;
  startGameButton.disabled = false;
}
