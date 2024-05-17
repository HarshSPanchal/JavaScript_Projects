let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, conputerGuess, targetGuess) {
    const humanDiffrence = Math.abs(targetGuess - humanGuess);
    const computerDiffrence = Math.abs(targetGuess - compareGuesses);

    return humanDiffrence <= computerDiffrence;
}

function updateScore(winner) {
    if(winner === 'human') {
        humanScore++;
    }
    else if(winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++
}
