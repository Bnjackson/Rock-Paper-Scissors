/*Rock Paper Scissors - 
Prompt asking for user choice.
Computer choice randomised.
Comnpare user and computer choices.
Loop for 5 rounds 1 point for 1 win.
Compare point totals declare winner.
*/

//Random computer choice
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return 'ROCK';
    }else if(randomNumber === 1){
        return 'PAPER';
    }else {
        return 'SCISSORS';
    }
}

//Player Choice
function playerChoice() {
    return prompt('Rock, Paper, Scissors. Pick one.');
}

console.log(playerChoice());
console.log(computerChoice());

game();
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        playerChoice();
        computerChoice();
        let result = playRound(playerChoice, computerChoice);
        if ()
    }
    function determineWinner() {
        if(playerScore > computerScore) {
            console.log('You won with ' + playerScore +' to ' + computerScore + '.');
        }
        else if(playerScore < computerScore) {
            console.log('You lost with ' + playerScore +' to ' + computerScore + '.');
        }
        else {
            console.log('Its a draw ' + playerScore +' to ' + computerScore + '.');    
        }
    } 
}

playRound(playerChoice, computerChoice);
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'You win! Rock beats Scissors';
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You win! Scissors beats Paper';
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerSelection.toUpperCase() === computerSelection) {
        return 'You drew';
    }
    else {
        return 'Error : Try again.'
    } 
}




