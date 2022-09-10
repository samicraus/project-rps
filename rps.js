/* 
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

    Create function that upon user input (rock, paper, scissors), will randomly return rock, paper, or scissors.
    What is user input to return that randomized response?

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

    User input is the playerSelection (r, p, s).
    User inputs their selection and computer responds with either r, p, or s.
    If:
        playerSelection = rock & computerSelection = scissors, player wins
        playerSelection = rock & computerSelection = paper, player loses
        playerSelection = rock & computerSelection = rock, it's a tie
        playerSelection = paper & computerSelection = scissors, player loses
        playerSelection = paper & computerSelection = rock, player wins
        playerSelection = paper & computerSelection = paper, it's a tie
        playerSelection = scissors & computerSelection = scissors, it's a tie
        playerSelection = scissors & computerSelection = rock, player loses
        playerSelection = scissors & computerSelection = paper, player wins
    Return text that declares the winner of the round

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results: 

function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. Remember loops? This is a great opportunity to use one to play those five rounds:

for (let i = 0; i < 5; i++) {
   // your code here!
}

At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
*/


// Create array with computer choices, assign those choices to a number by creating an array. Create a function to randomly select one as the computer's choice.

let allChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * allChoices.length);
    let computerChoice = allChoices[randomNumber];
    return computerChoice;
};

// set the player and computer starting point value to 0

let playerScore = 0;
let computerScore = 0;

// create the function to play through a round of the game. What happens when the player selects (r, p, or s) and the computer selects (r, p, or s)

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        alert(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else if (playerSelection === computerSelection){
        alert('Tie!');
    } else {
        alert('You must make a selection to play.');
    }
    let totalScore = ['Player: ' + playerScore, 'Computer: ' + computerScore];
    return totalScore;
};

// create a loop to run through the playround function 5 times, keeping track of the scores in the console

for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Start the game! Select Rock, Paper, or Scissors.").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}