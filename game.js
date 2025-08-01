// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
const maxRounds = 5;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    const computerChoice = computerPlay(); // Randomly choose for the computer
    let result = "";

    if (!playerChoice) {
        return "Game canceled!";
    }

    playerChoice = playerChoice.toLowerCase();

    if (!choices.includes(playerChoice)) {
        console.log("Invalid choice! Please select Rock, Paper, or Scissors.");
        return "invalid";
    }

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    // Update scores
    switch (result) {
        case "YOU WIN!":
            playerScore++;
            console.log(`😤 Round ${currentRound}: Impossible! How did you defeat my superior AI logic?!`);
            break;
        case "YOU LOSE!":
            computerScore++;
            console.log(`😈 Round ${currentRound}: MWAHAHAHA! My circuits are superior to your human brain!`);
            break;
        case "IT'S A TIE!":
            console.log(`🤔 Round ${currentRound}: A tie? Even I didn't calculate that probability!`);
            break;
    }

    // Display round results
    console.log(`🔥 ROUND ${currentRound} RESULTS:`);
    console.log(`👤 PLAYER: ${playerChoice.toUpperCase()}`);
    console.log(`🤖 Computer: ${computerChoice.toUpperCase()}`);
    console.log(`⚡ ${result}`);
    console.log(`📊 Score - You: ${playerScore} | Evil AI: ${computerScore}`);
    console.log("");

    currentRound++;
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
    // Reset all game variables
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;

    // Start new game
    console.clear();
    console.log("🤖💀 MWAHAHAHA! I AM THE EVIL AI! 💀🤖");
    console.log("═".repeat(50));
    console.log("🌍 The world is in danger! Only YOU can stop me!");
    console.log("🎮 Defeat me in Rock Paper Scissors to save humanity!");
    console.log("⚔️ We will battle for 5 rounds - may the best coder win!");
    console.log("═".repeat(50));
    console.log("");

    // Start the game loop
    while (currentRound <= maxRounds) {
        const playerChoice = prompt("Enter your choice (Rock, Paper, Scissors):");
        
        // Check for cancellation
        if (playerChoice === null) {
            console.log("Game canceled!");
            return;
        }

        const roundResult = playRound(playerChoice);
        
        if (roundResult === "invalid") {
            continue;
        }
    }

    endGame();
}

// Initialize game
console.log("🚀 Loading Evil AI Battle System...");
newGame();