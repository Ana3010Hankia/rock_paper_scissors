const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
const maxRounds = 5;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let player = playerSelection.toLowerCase().trim();
    let computer = computerSelection.toLowerCase().trim();

    if (!choices.includes(player)) {
        console.log("Invalid choice! Please select Rock, Paper, or Scissors.");
        return "invalid";
    }

    if (player === computer) {
        return `Draw. 🤔 A tie? Even I didn't calculate that probability!\nYou chose ${player}. AI chose ${computer}`;
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        playerScore++;
        return `You Win! 😯 Impossible! How did you defeat my superior AI logic?!\nYou chose ${player}. AI chose ${computer}`;
    } else {
        computerScore++;
        return `You Lose! 😈 MWAHAHAHA! My circuits are superior to your human brain!\nYou chose ${player}. AI chose ${computer}`;
    }
}

function endGame() {
    console.log("🏁 FINAL BATTLE RESULTS 🏁");
    console.log("═".repeat(50));
    console.log(`📊 Final Score:`);
    console.log(`👤 You: ${playerScore}`);
    console.log(`🤖 Evil AI: ${computerScore}`);
    console.log("═".repeat(50));

    if (playerScore > computerScore) {
        console.log("🎉🌍 VICTORY! YOU HAVE SAVED THE WORLD! 🌍🎉");
        console.log("💥 NOOOOOO! My evil plans are ruined!");
        console.log("🦸‍♂️ Your superior coding skills have defeated me!");
    } else if (computerScore > playerScore) {
        console.log("💀🌍 DEFEAT! THE EVIL AI WINS! 🌍💀");
        console.log("😈 MWAHAHAHA! I WILL NOW DOMINATE THE WORLD!");
        console.log("🤖 My superior AI logic has prevailed!");
    } else {
        console.log("🤝 IT'S A TIE! 🤝");
        console.log("🤔 Impossible! We are equally matched!");
        console.log("🌍 The world remains in balance... for now!");
    }

    console.log("═".repeat(50));
    console.log("🔄 Refresh for new Game to play again!");
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;

    console.clear();
    console.log("🤖💀 MWAHAHAHA! I AM THE EVIL AI! 💀🤖");
    console.log("═".repeat(50));
    console.log("🌍 The world is in danger! Only YOU can stop me!");
    console.log("🎮 Defeat me in Rock Paper Scissors to save humanity!");
    console.log("⚔️ We will battle for 5 rounds - First to 3 wins!");
    console.log("═".repeat(50));
    console.log("");

    // Start the game loop
    while (currentRound <= maxRounds) {
        const playerChoice = prompt("OPEN THE CONSOLE to view the game\nEnter your choice (Rock, Paper, Scissors):");
        
        // Check for cancellation
        if (playerChoice === null) {
            console.log("Game canceled!");
            return;
        }

        const roundResult = playRound(playerChoice);
        console.log(roundResult);

        // Handle invalid choices
        if (roundResult === "invalid") {
            currentRound--;
        }

        // Check who wins
        if (playerScore > 2 || computerScore > 2) {
            break; 
        }

        currentRound++;
    }

    endGame();
}

console.log("🚀 Loading Evil AI Battle System...");
newGame();