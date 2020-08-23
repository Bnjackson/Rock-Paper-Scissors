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
function playerChoice() {
    return prompt('Rock, Paper, Scissors. Pick one.');
}

function playRound(playerSelection, computerSelection) {
    let playerUpper = playerSelection.toUpperCase();
    if (playerUpper == 'ROCK' && computerSelection === 'SCISSORS') {
        console.log("Rock beats scissors, you win!");
        return 1;
    }
    else if (playerUpper === 'PAPER' && computerSelection === 'ROCK') {
        console.log("Paper beats rock, you win!");
        return 1;
    }
    else if (playerUpper === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log("Scissors beats Paper, you win!");
        return 1;
    }
    else if (playerUpper === 'SCISSORS' && computerSelection === 'ROCK') {
        return 0;
    }
    else if (playerUpper === 'ROCK' && computerSelection === 'PAPER') {
        return 0;
    }
    else if (playerUpper === 'PAPER' && computerSelection === 'SCISSORS') {
        return 0;
    }
    else if (playerUpper == computerSelection) {
        return 2;
    }
    else {
        return 3;
    } 
}

game();
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = playerChoice();
        let computerValue = computerChoice();
        let result = playRound(playerSelection, computerValue);
        if (result === 1) {
            playerScore++;
        }
        else if (result === 0) {
            computerScore++;
        }
        else if (result === 2) {
            playerScore++;
            computerScore++;
        }
        else if (result === 3) {
            console.log('error');
        }
    }
    determineWinner();
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



//Player Choice
