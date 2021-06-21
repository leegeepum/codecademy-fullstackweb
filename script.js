let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, comp, secret) {
  const humanDiff = getAbsoluteDistance(human, secret);
  const compDiff = getAbsoluteDistance(comp, secret);

  if (humanDiff <= compDiff) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}

function getAbsoluteDistance(num, secret) {
  return Math.abs(num - secret);
}