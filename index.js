const getUserChoice = (userInput='BOMB') => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }

    return userInput;
}

const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return '';
    }
}

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === 'bomb') {
        return 'User is the winner no matter what!';
    } else if (userChoice === computerChoice) {
        return `user: ${userChoice} / comp: ${computerChoice} / Tied!`;
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return `user: ${userChoice} / comp: ${computerChoice} / Computer is the winner!`;
        } else if (computerChoice === 'scissors') {
            return `user: ${userChoice} / comp: ${computerChoice} / User is the winner!`;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return `user: ${userChoice} / comp: ${computerChoice} / Computer is the winner!`;
        } else if (computerChoice === 'paper') {
            return `user: ${userChoice} / comp: ${computerChoice} / User is the winner!`;
        }
    }
}

const playGame = (userChoice=getUserChoice(), computerChoice=getComputerChoice()) => {
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();