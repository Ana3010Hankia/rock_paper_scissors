const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let compScore = 0;
let round = 1;

const computerPlay = function () {
    return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = function (playerSelection, computerSelection) {
    if (playerSelection === null) {
        return { status: "cancel", message: "Game canceled!" };
    }

    let player = playerSelection.toLowerCase().trim();
    let computer = computerSelection.toLowerCase().trim();

    if (player === "" || !choices.includes(player)) {
        return { status: "invalid", message: "❌ Invalid choice! Please select rock, paper, or scissors." };
    }

    let aiMessage = "";
    let outcome = "";

    if (player === computer) {
        aiMessage = `🤔 Round ${round}: A tie? Even I didn't calculate that probability!`;
        outcome = "draw";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        aiMessage = `😤 Round ${round}: Impossible! How did you defeat my superior AI logic?!`;
        outcome = "win";
    } else {
        aiMessage = `😈 Round ${round}: MWAHAHAHA! My circuits are superior to your human brain!`;
        outcome = "lose";
    }

    let resultText = {
        win: "You win!",
        lose: "You lose!",
        draw: "It's a tie!"
    }[outcome];

    let roundMessage =
        `${aiMessage}\n` +
        `⚔️ You chose: ${player}\n` +
        `🧠 AI chose: ${computer}\n` +
        `📢 Result: ${resultText}\n` +
        `📊 Score — You: ${playerScore} | Evil AI: ${compScore}\n`;

    return { status: outcome, message: roundMessage };
}

const endGame = function () {
    console.log("\n🏁 FINAL BATTLE RESULTS 🏁");
    console.log("═".repeat(50));
    console.log(`📊 Final Score:\n👤 You: ${playerScore}\n🤖 Evil AI: ${compScore}`);
    console.log("═".repeat(50));

    if (playerScore > compScore) {
        console.log("🎉 You defeated the Evil AI! The world is safe... for now.");
        console.log("🦸‍♂️ Your superior coding skills have prevailed.");
    } else if (compScore > playerScore) {
        console.log("💀 The Evil AI wins... and begins world domination!");
        console.log("😈 Better luck next time, human.");
    } else {
        console.log("🤝 It's a draw! The battle ends in balance.");
        console.log("🌍 Humanity and AI will share the planet... for now.");
    }

    console.log("═".repeat(50));
    console.log("🔄 Refresh to play again!");
}

const game = function () {
    alert("🎮 Rock Paper Scissors has begun!\n👉 OPEN THE CONSOLE to view the game.");

    console.clear();
    console.log("🤖💀 I AM THE EVIL AI! 💀🤖");
    console.log("═".repeat(50));
    console.log("🌍 The world is in danger. Only YOU can stop me!");
    console.log("🎮 Defeat me in Rock Paper Scissors to save humanity.");
    console.log("⚔️ We will battle for 5 rounds - may the best player win!");
    console.log("═".repeat(50));
    console.log("");

    while (round <= 5) {
        console.log(`🌀 Round ${round}`);
        const human = prompt("Enter your choice (rock, paper, or scissors):");

        const decision = playRound(human, computerPlay());

        if (decision.status === "cancel") {
            console.log("👋 Game canceled by the player.");
            return;
        }

        if (decision.status === "invalid") {
            console.log(decision.message);
            continue;
        }

        if (decision.status === "win") {
            playerScore++;
        } else if (decision.status === "lose") {
            compScore++;
        }

        console.log(decision.message);

        if (playerScore === 3 || compScore === 3) break;

        round++;
    }

    endGame();
}

game();
