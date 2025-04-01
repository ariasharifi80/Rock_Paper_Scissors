const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const score = document.querySelector("score");



function getComputersChoice () {

   
    
    let randomannumber = Math.floor(Math.random() * 3);
    if (randomannumber === 0){
        return "rock";
    } else if(randomannumber === 1){
       return "paper";
    } else if (randomannumber === 2){
        return "scissors";
    } else{
        console.error("error!!!");
    }
   
}



rock.addEventListener("click", () => {
    playRound('rock');
    
   
});

paper.addEventListener("click", () => {
    playRound('paper');
    
});

scissors.addEventListener("click", () => {
 playRound('scissors')
 
});
 

let counter = 0
  let humanScore = 0;
    let computerScore = 0;

function playRound(humanSelection, computerSelection){
    
 
  


  







    computerSelection = getComputersChoice();
    if (humanSelection == computerSelection){
        result.textContent = "ITS A DRAW!";
    }
    
    if (humanSelection == 'rock'){
        if (computerSelection == 'paper'){
            result.textContent = 'You lose! Paper beats rock';
           computerScore+=1
            
            
        }
        else{
            result.textContent ='You win! Rock beats scissors';
            humanScore += 1
            
        }
    }

    else if (humanSelection == 'paper'){
        if (computerSelection == 'scissors'){
            result.textContent = 'You lose! Scissors beats paper';
            computerScore+=1
            
        }
        else{
            result.textContent = 'You win! Paper beats rock';
            humanScore += 1
            
        }
    }

    else{
        if (computerSelection == 'paper'){
           result.textContent = 'You win! Scissors beats paper';
           humanScore += 1
            
        }
        else{
            result.textContent ='You lose! Rock beats scissors';
            computerScore += 1
            
        }
    }
   counter += 1


   if (counter === 5) {
    if (humanScore > computerScore) {
        result.textContent = `Game Over! You won! Final Score - You: ${humanScore} Computer: ${computerScore}`;
    } else if (humanScore < computerScore) {
        result.textContent = `Game Over! You lost! Final Score - You: ${humanScore} Computer: ${computerScore}`;
    } else {
        result.textContent = `Game Over! It's a draw! Final Score - You: ${humanScore} Computer: ${computerScore}`;
    }
    // Reset the scores and counter
    counter = 0;
    humanScore = 0;
    computerScore = 0;
}

} 





// function playGame(){
//     let counter = 0;
//     let humanScore = 0;
//     let computerScore = 0;
        
//     // Play 5 rounds of rock paper scissors
//     while(counter < 5){
//         const computerSelection =  getComputersChoice();
        
//         const winner = playRound(humanSelection, computerSelection)
//         if (winner == true){
//             humanScore += 1
//         }
//         else{
//             computerScore += 1
//         }
//         counter += 1
//     }

//     // Determine who the winner is
//     if (computerScore < humanScore){
//         score.textContent = `You win! Final score: ${humanScore} - ${computerScore}`;
//     }
//     else if (computerScore > humanScore){
//         score.textContent =`You lose! Final score: ${humanScore} - ${computerScore}`;
//     }
//     else{
//        score.textContent ='Draw!';
//     }
// }

// playGame();



