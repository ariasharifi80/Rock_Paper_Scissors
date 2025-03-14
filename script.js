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

