let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = function(){
  return Math.floor(Math.random() * 9);
}

const compareGuesses = (human, computer, target) =>{
  if (Math.abs(target - human) <= Math.abs(target - computer)){
    return true;
  } else {
    return false;
  }
}

const updateScore = winner =>{
  if ( winner === 'human'){
    humanScore += 1;
    //currentRoundNumber += 1;
  } else {
    computerScore += 1;
    //currentRoundNumber += 1;
  }
}

const advanceRound = () =>{
      currentRoundNumber += 1;

}
