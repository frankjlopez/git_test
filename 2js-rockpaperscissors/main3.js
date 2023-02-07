// global constants
const options = ['rock', 'paper', 'scissors'];
const winner = ''
let userPoints = 0
let compPoints = 0

function game(){ 
for (i = 0; i <= 5; i++) {
  playRound();
  console.log(`User points: ${userPoints}`);
  console.log(`Computer points: ${compPoints}`);
}
if (userPoints > compPoints) {
  console.log(`You win!`);
} else if (userPoints < compPoints) {
  console.log(`The computer wins!`);
} else if (userPoints = compPoints) {
  console.log(`It's a tie!`);
}
}

function playRound(userChoice, compChoice) {
  userChoice = getUserChoice();
  compChoice = getComputerChoice();
  console.log(`You chose ${userChoice}`);
  console.log(`The computer chose ${compChoice}`);
  compare(userChoice, compChoice);
}

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function getUserChoice () {
  let choice = prompt('Rock, paper, or scissors?');
  while (choice == null) {
    choice = prompt('Go on. Type rock, paper, or scissors?');
  }
  choice = choice.toLowerCase();
  let check = verifyInput(choice);
  console.log(`First attempt: ${check}`);
  while (check == false) {
    choice = prompt('Try again. Rock, paper, or scissors?');
    choice = choice.toLowerCase();
    check = verifyInput(choice);
    console.log(`Subsequent attempts: ${check}`);
  }
  if (check == true) {
  return choice;
  }
}

function verifyInput (input) {
  return options.includes(input);
}

function compare (userChoice, compChoice) {
  if (userChoice == compChoice) {
    console.log(`No winners. Both players chose ${userChoice}`);
  } else if ((userChoice == 'rock') && (compChoice == 'scissors')) {
    console.log(`Nice! ${userChoice} beats ${compChoice}`);
    userPoints++;
  } else if ((userChoice == 'scissors') && (compChoice == 'paper')) {
    console.log(`Nice! ${userChoice} beats ${compChoice}`);
    userPoints++;
  } else if ((userChoice == 'scissors') && (compChoice == 'paper')) {
    console.log(`Nice! ${userChoice} beats ${compChoice}`);
    userPoints++;
  } else {
    console.log(`Uh oh! ${compChoice} beats ${userChoice}`);
    compPoints++;
  }
}

game()