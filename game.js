const choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;
let round = 1;

const gameStart = "🤖💀 MWAHAHAHA! I AM THE EVIL AI! 💀🤖\n🌍 The world is in danger! Only YOU can stop me!\n🎮 Defeat me in Rock Paper Scissors to save humanity!\n⚔️ We will battle for 5 rounds - First to 3 wins\n";

const humanInput = function(){
    return prompt('Press the F12 Key to OPEN THE CONSOLE.\nAn evil AI is trying to take over the world and you have a chance to stop it with a game of Rock, Paper, Scissors.\nEnter your choice (rock / paper /scissors) below to start playing and stand a chance to save the world!\n👊🏽🖐🏽✌🏽');
}

const gameWon = function(){
    playerScore++;  
    console.log(`Score: Player ${playerScore} : ${compScore} AI`);
    if (playerScore > 2 ) {
            console.log(`🎉🌍 VICTORY! YOU HAVE SAVED THE WORLD! 🌍🎉 \n💥 NOOOOOO! My evil plans are ruined!\n🦸‍♂️ Your superior coding skills have defeated me!\n Total Score ${playerScore};`);             
            }
}

const gameLost = function(){
    compScore++;
    console.log(`Score: Player ${playerScore} : ${compScore} AI`);
    if (compScore > 2) {
            console.log(`💀🌍 DEFEAT! THE EVIL AI WINS! 🌍💀\n😈 MWAHAHAHA! I WILL NOW DOMINATE THE WORLD!\n🤖 My superior AI logic has prevailed!\n AI Score ${compScore}`);
            } 
}

const computerPlay = function(){
    return choice[Math.floor(Math.random() * choice.length)];
}

const cancel = function(){
    console.log("👋 Game cancelled. Refresh the page to play again");
}


const playRound = function(playerSelection, computerSelection){
    if (playerSelection === null) {
        cancel();
    }  
    
    if (!choice.includes(playerSelection || computerSelection)) {
        return "Invalid choice! Please select Rock, Paper, or Scissors.";

     } else if ((playerSelection === 'rock' && computerSelection === 'scissor') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissor' && computerSelection === 'paper'))
        {
            return `You Win! 😯 Impossible! How did you defeat my superior AI logic?!\nYou chose ${playerSelection}. AI chose ${computerSelection}`;

        } else if ((computerSelection === 'rock' && playerSelection === 'scissor') || 
                    (computerSelection === 'paper' && playerSelection === 'rock') || 
                    (computerSelection === 'scissor' && playerSelection === 'paper'))
        {
            return `You Lose! 😈 MWAHAHAHA! My circuits are superior to your human brain!\nYou chose ${playerSelection}. AI chose ${computerSelection}`;
            
        } else if (playerSelection === computerSelection){
            return `Draw. 🤔 A tie? Even I didn't calculate that probability!\nYou chose ${playerSelection}. AI chose ${computerSelection}\nScore: Player ${playerScore} : ${compScore} AI`;
        }
}

const game = function(){
    console.log(gameStart);
    
    for (let i = 1; i <= 5; i++){
        round = i;
        console.log(`Round: ${round}`);

        let human = humanInput();
        let result = playRound(human, computerPlay());        
        
        if (human === null) {
            break;
        } else if (result.startsWith('You Win')){
            gameWon();
            if (playerScore > 2) break;
        } else if (result.startsWith('You Lose')) {
            gameLost();
            if (compScore > 2) break;
        } else if (result.startsWith('Draw') || result.startsWith('Invalid')) {
            i -= 1;    
        }
        console.log(result);   
    }
}

game();







