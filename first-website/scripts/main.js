const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mozilla.jpeg") {
    myImage.setAttribute("src", "images/flower.jpeg");
  } else {
    myImage.setAttribute("src", "images/mozilla.jpeg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    }else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });

  // Week 2 tutorial 

  // Function: creates a new paragraph and appends it to the bottom of the HTML body.

  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  /*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }

  //Using addEventListener instead 

//const buttons = document.querySelectorAll("button");

//for (const button of buttons) {
 // button.addEventListener("click", createParagraph);
//}

// A first splash into JavaScript
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
  
}
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

//Var and let

/* 
let myName;
let myAge;

myName;
myAge;   Calling vars


Initializing var
myName = "Chris";
myAge = 37;

or declare and initialize at the same time
let myDog = "Rover";

var can also be used (declare var after initializing it and it works)
var myName;
var myAge;


myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;


Updating a variable 
myName = "Bob";
myAge = 40;

Var, strings, booleans, arrays, objects (ex. dog.name)

dynamic typing 

constraints ex.
const brid = { species: "Kestrel"};
cosole.log{bird.species}; // Kestrel

Basic math operators 

Copy to Clipboard
const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

typeof myInt;
typeof myFloat;
should return "number"
*/
// RANDOM STORY 

const storyText = "It was a hot day, 94°F outside, and Bob decided to wear his favorite outfit. " +
"He picked up a 300-pound watermelon at the market and carried it home. " +
"Everyone in the neighborhood was amazed by Bob's strength and style.";

const usToUkConversions = {
weight: (lbs) => `${Math.round(lbs * 0.453592)} kg`,
temperature: (f) => `${Math.round((f - 32) * 5 / 9)}°C`
};

function generateRandomStory() {
const customName = document.getElementById('customName').value;
const useUkUnits = document.getElementById('ukUnits').checked;

let newStory = storyText;

// Replace default name "Bob" if custom name is entered
if (customName) {
newStory = newStory.replace(/Bob/g, customName);
}

// Convert US units to UK units if UK radio button is checked
if (useUkUnits) {
newStory = newStory.replace(/94°F/g, usToUkConversions.temperature(94))
         .replace(/300-pound/g, usToUkConversions.weight(300));
}

// Display the generated story
document.getElementById('story').textContent = newStory;
}

document.getElementById('generate').addEventListener('click', generateRandomStory);

'3' ==3
vs 
3 === 3