const choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

const gameStart = "🤖💀 MWAHAHAHA! I AM THE EVIL AI! 💀🤖\n🌍 The world is in danger! Only YOU can stop me!\n🎮 Defeat me in Rock Paper Scissors to save humanity!\n⚔️ We will battle for 5 rounds - First to 3 wins\n";

const humanInput = function(){
    return prompt('Press the F12 Key to OPEN THE CONSOLE.\nAn evil AI is trying to take over the world and you have a chance to stop it with a game of Rock, Paper, Scissors.\nEnter your choice (rock / paper /scissors) below to start playing and stand a chance to save the world!\n👊🏽🖐🏽✌🏽');
}

const roundWon = function(player, computer){
    return `You Win! 😯 Impossible! How did you defeat my superior AI logic?!\nYou chose ${player}. AI chose ${computer}`;
}

const roundLost = function(player, computer){
    return `You Lose! 😈 MWAHAHAHA! My circuits are superior to your human brain!\nYou chose ${player}. AI chose ${computer}`
}

const roundDraw = function(player, computer){
    return `Draw. 🤔 A tie? Even I didn't calculate that probability!\nYou chose ${player}. AI chose ${computer}`;
}

const gameWon = function(){
    playerScore++;  

    if (playerScore > 2 ) {
            console.log(`🎉🌍 VICTORY! YOU HAVE SAVED THE WORLD! 🌍🎉 \n💥 NOOOOOO! My evil plans are ruined!\n🦸‍♂️ Your superior coding skills have defeated me!\n Total Score ${playerScore};`);             
            }
}

const gameLost = function(){
    compScore++;

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

     } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper'))
        {
            return roundWon(playerSelection, computerSelection);

        } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || 
                    (computerSelection === 'paper' && playerSelection === 'rock') || 
                    (computerSelection === 'scissors' && playerSelection === 'paper'))
        {
            return roundLost(playerSelection, computerSelection);
;
            
        } else if (playerSelection === computerSelection){
            return roundDraw(playerSelection, computerSelection);
        }
}

const game = function(){
    console.log(gameStart);
    
    for (let i = 1; i <= 5; i++){
        console.log(`🎮 Round: ${i}`);

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
        console.log(`Score: Player ${playerScore} : ${compScore} AI`);  
    }
}

game();
