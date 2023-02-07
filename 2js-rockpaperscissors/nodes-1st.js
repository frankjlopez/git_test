// set variable for game start
let gameStart = true;

// On off switch
// while (gameStart = true) {

  // Set initial scores
  let computerScore = 0;
  let userScore = 0;

  for (let i = 0; i < 5; i++) {
    // Set variable for Computer's random choice
    let computerChoice = ''
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    // Change # choice to string
    (randomChoice == 1) ? (computerChoice = 'rock') : 
      (randomChoice == 2) ? (computerChoice = 'paper') : 
      (computerChoice = 'scissors') ;
    // Ask user for their choice
    let userChoice = (prompt(`Rock, Paper, or Scissors?`).toLowerCase());
    // Check if user wrote one of the right options
    while (gameStart == false) {
      if ((userChoice == 'rock') || (userChoice == 'paper') || (userChoice == 'scissors')) { 
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}!`);
        gameStart = true;
      } else {
        userChoice = prompt(`Try again. Rock, Paper, or Scissors?`).toLowerCase();
        gameStart = false;
      }
    }
      // Announcing the winner
      (computerChoice == 'rock') && (userChoice == 'scissors') ? (alert(`Computer wins!`), computerScore++) :
      (computerChoice == 'paper') && (userChoice == 'scissors') ? (alert('User wins!'), userScore++) :
      (computerChoice == 'rock') && (userChoice == 'paper') ? (alert('User wins!'), userScore++) :
      (computerChoice == 'scissors') && (userChoice == 'paper') ? (alert(`Computer wins!`), computerScore++) :
      (computerChoice == 'paper') && (userChoice == 'rock') ? (alert(`Computer wins!`), computerScore++) :
      (computerChoice == 'scissors') && (userChoice == 'rock') ? (alert('User wins!'), userScore++) :
      alert('Both players chose the same! Try again!') ;

      // Announces scores
      console.log('User: ' + userScore)
      console.log('Computer: ' + computerScore)
  }




  // Comparing using literal comparisons
  // (computerChoice = 1) && (userChoice = 2) ? alert('The user wins with Paper!') :
  // (computerChoice = 2) && (userChoice = 1) ? alert('The computer wins with Rock!') :
  // (computerChoice = 1) && (userChoice = 3) ? alert('The computer wins with Rock!') :
  // (computerChoice = 2) && (userChoice = 3) ? alert('The user wins with Scissors!') :
  // (computerChoice = 3) && (userChoice = 1) ? alert('The user wins with Rock!') :
  // (computerChoice = 3) && (userChoice = 2) ? alert('The computer wins with Scissors!') :
  // alert('No one wins!');
  // console.log(`You chose ${userChoice} and the computer chose ${computerChoice}`)


  // function playRound(userChoice, computerChoice) {
    
  // }