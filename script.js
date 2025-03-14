function getComputersChoice () {
    const rock = "rock";
    const paper = "paper";
    const scissor = "scissors";
    let result;
    let randomannumber = Math.floor(Math.random() * 3);
    if (randomannumber === 0){
        result = rock;
    } else if(randomannumber === 1){
        result = paper;
    } else if (randomannumber === 2){
        result = scissor;
    } else{
        console.error("error!!!");
    }
    console.log(result);
}

function getHumanChoice () {
    const rock = "rock";
    const paper = "paper";
    const scissor = "scissors";

    let choice = prompt("what's your choice?");
     if (choice === "rock"){
        return rock
     } else if ( choice === "paper"){
        return paper;
     } else if ( choice === "scissors"){
        return scissor 
     } else {
        return console.error("enter a valid choice");
     }
     
}

