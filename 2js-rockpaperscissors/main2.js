const choices = ['rock', 'paper', 'scissors'];
let winners = [];

function playRound(compSelection, userSelection) {
  const compChoice = getComputerChoice();
  const userChoice = getUserChoice();
  const winner = checkWinner(compChoice, userChoice);
}

function getComputerChoice() {
  let compChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(compChoice);
  return compChoice;
}

function getUserChoice() {
  let input = prompt('Rock, paper, or scissors?');   
  input = input.toLowerCase();
  console.log(input);
  check = validateInput(input);
  while (check == false) {
    input = prompt('Spelling matters! Rock, paper, or scissors?');
    input = input.toLowerCase();
    check = validateInput(input);
  }
}

function validateInput(choice) {
  return choices.includes(choice)
}

function checkWinner (compSelection, userSelection) {
  if ((compSelection == 'rock') && (userSelection == 'paper')) {
    console.log(`Paper beats rock! User wins!`);
  } else if ((compSelection == 'paper') && (userSelection == 'rock')) {
    console.log(`Paper beats rock! Computer wins!`);
  } else if ((compSelection == 'rock') && (userSelection == 'scissors')) {
    console.log(`Rock beats scissors! Computer wins!`);
  } else if ((compSelection == 'scissors') && (userSelection == 'rock')) {
    console.log(`Rock beats scissors! User wins!`);
  } else if ((compSelection == 'scissors') && (userSelection == 'paper')) {
    console.log(`Scissors beats paper! Computer wins!`);
  } else if ((compSelection == 'paper') && (userSelection == 'scissors')) {
    console.log(`Scissors beats paper! User wins!`);
  } else {
    console.log(`Same answers! No one wins!`);
  }
}

playRound();