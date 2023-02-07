//Global variables
const choices = ['rock', 'paper', 'scissors']
let gamePlay = false;

//Game function
function game() {
  for(let i = 0; i <= 5; i++) {
    playRound();
  }
}

//User choice
function playerSelection() {
  // while (gamePlay == false) {
    let input = prompt('Rock, paper, or scissors?');
    while (input == null) {
      input = prompt('Rock, paper, or scissors?');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
      prompt('Check your spelling! Rock, paper, or scissors?')
    }

  }

//Validate User Choice
function validateInput(choice) {
  if(choices.includes(choice)) {
  return true 
  } else {
    return false
  }  
  

}

//Computer choice
function compSelection() {
  return choices[Math.floor(Math.random() * choices.length)]
}
//Play a round
function playRound() {
  const userChoice = playerSelection() 
  const computerChoice = compSelection() 
  const winner = checkWinner(playerSelection, compSelection)
  gamePlay = false;
}

//Check Winner



game();












