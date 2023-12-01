const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let victor;

function getComputerChoice(strings) {
    const randomChoice = Math.floor(Math.random() * strings.length);
    return strings[randomChoice];
}

function playRound() {
    const playerChoice = prompt("CHOOSE: Rock, Paper, Scissors?","");
    const normalizedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    const computerChoice = getComputerChoice(choices);

    if (
        (normalizedPlayerChoice == "Rock" && computerChoice == "Scissors") ||
        (normalizedPlayerChoice == "Scissors" && computerChoice == "Paper") ||
        (normalizedPlayerChoice == "Paper" && computerChoice =="Rock")
    ) {
        // return "You win! " + normalizedPlayerChoice + " beats " + computerChoice + ".";
        victor = "player";
        // removed "let" before victor so it can update the victor variable outside this function

    } else if (
        (normalizedPlayerChoice == "Rock" && computerChoice == "Paper") ||
        (normalizedPlayerChoice == "Scissors" && computerChoice == "Rock") ||
        (normalizedPlayerChoice == "Paper" && computerChoice =="Scissors")
    ) {    
        // return "You lose! " + computerChoice + " beats " + normalizedPlayerChoice + ".";
        victor = "computer"; 
        // removed "let" before victor so it can update the victor variable outside this function
    } else {
        alert ("Tie! Try again.");
        playerChoice;
        return playRound();
    }   
}

function game() {
    for (let round = 1; round <= 5; round++) {
        console.log("Round " + round);

        const result = playRound();

        if (victor == "player") {
            playerScore++;
        } else if (victor == "computer") {
            computerScore++;
        }

        // Print scores after each round
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);

        // Check if one player reached a score of three
        if (playerScore === 3 || computerScore ===3) {
            break; // Exit the loop if the game is already won
        }
    }

    playerScore === 3
        ? console.log("You win! Congratulations!")
        : console.log("You lose! Try again next time.");
}
    // if (playerScore === 3) {
    //     console.log("You win! Congratulations!")
    // } else if (computerScore === 3) {
    //     console.log("You lose! Try again next time.")
    // } else {
    //     console.log("Meh!")
    // }

game ();