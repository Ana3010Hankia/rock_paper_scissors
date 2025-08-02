const choice = ['rock', 'paper', 'scissor'];

let playerScore = 0;
let compScore = 0;
let round = 1;


const computerPlay = function(){
    return choice[Math.floor(Math.random() * choice.length)];
}

const playRound = function(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase().trim();
    let computer = computerSelection.toLowerCase().trim();
    if (!choice.includes(player || computer)) {
        return "Invalid choice! Please select Rock, Paper, or Scissors.";
     } else if ((player === 'rock' && computer === 'scissor') || 
        (player === 'paper' && computer === 'rock') || 
        (player === 'scissor' && computer === 'paper'))
        {
            return `You Win! 😯 Impossible! How did you defeat my superior AI logic?!\nYou chose ${player}. AI chose ${computer}`;

        } else if ((computer === 'rock' && player === 'scissor') || 
                    (computer === 'paper' && player === 'rock') || 
                    (computer === 'scissor' && player === 'paper'))
        {
            return `You Lose! 😈 MWAHAHAHA! My circuits are superior to your human brain!\nYou chose ${player}. AI chose ${computer}`;
        } else if (player === computer){
            return `Draw. 🤔 A tie? Even I didn't calculate that probability!\nYou chose ${player}. AI chose ${computer}`;
        }
}

console.log("🤖💀 MWAHAHAHA! I AM THE EVIL AI! 💀🤖\n🌍 The world is in danger! Only YOU can stop me!\n🎮 Defeat me in Rock Paper Scissors to save humanity!\n⚔️ We will battle for 5 rounds - First to 3 wins\n");
console.log("═".repeat(50));

const game = function(){

    for (let i = 1; i <= 5; i++){
        round = i;
        console.log(`Round: ${round}`);
        let human = prompt('OPEN THE CONSOLE to view the game\nEnter your choice (Rock, Paper, Scissors)');
        let decision = playRound(human, computerPlay()); 
        console.log(decision);
        if (decision.startsWith('You Win')){
            playerScore++; 
            if (playerScore > 2 ) {
            console.log(`🎉🌍 VICTORY! YOU HAVE SAVED THE WORLD! 🌍🎉 \n💥 NOOOOOO! My evil plans are ruined!\n🦸‍♂️ Your superior coding skills have defeated me!\n Total Score ${playerScore};`);
            break;
            } else continue;
        } else if (decision.startsWith('You Lose')) {
            compScore++
            if (compScore > 2) {
                console.log("💀🌍 DEFEAT! THE EVIL AI WINS! 🌍💀\n😈 MWAHAHAHA! I WILL NOW DOMINATE THE WORLD!\n🤖 My superior AI logic has prevailed!\n AI Score ${compScore}");
                break;
            } else continue;
        } else if (decision.startsWith('Draw') || decision.startsWith('Invalid')) {
            i -= 1;    
        }
    }
}
game();







