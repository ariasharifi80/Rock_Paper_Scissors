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
    console.log(result);
}

function getHumanChoice () {
   

    let choice = prompt("what's your choice?").toLowerCase();
     if (choice === "rock"){
        return "rock";
     } else if ( choice === "paper"){
        return "paper";
     } else if ( choice === "scissors"){
        return "scissors" 
     } else {
        return console.error("enter a valid choice");
     }

    
     
}



function playRound(humanSelection, computerSelection){
    humanSelection = getHumanChoice()
    computerSelection = getComputersChoice();
    if (humanSelection == computerSelection){
        console.log('Draw!')
    }
    
    if (humanSelection == 'rock'){
        if (computerSelection == 'paper'){
            console.log('You lose! Paper beats rock') 
            return false
            
        }
        else{
            console.log('You win! Rock beats scissors')
            return true
        }
    }

    else if (humanSelection == 'paper'){
        if (computerSelection == 'scissors'){
            console.log('You lose! Scissors beats paper')
            return false
        }
        else{
            console.log('You win! Paper beats rock')
            return true
        }
    }

    else{
        if (computerSelection == 'paper'){
            console.log('You win! Scissors beats paper')
            return true
        }
        else{
            console.log('You lose! Rock beats scissors')
            return false
        }
    }
}


function playGame(){
    let counter = 0;
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds of rock paper scissors
    while(counter < 5){
        const computerSelection =  getComputersChoice();
        const humanSelection = getHumanChoice();
        const winner = playRound(humanSelection, computerSelection)
        if (winner == true){
            humanScore += 1
        }
        else{
            computerScore += 1
        }
        counter += 1
    }

    // Determine who the winner is
    if (computerScore < humanScore){
        console.log(`You win! Final score: ${humanScore} - ${computerScore}`)
    }
    else if (computerScore > humanScore){
        console.log(`You lose! Final score: ${humanScore} - ${computerScore}`)
    }
    else{
        console.log('Draw!')
    }
}

playGame();




