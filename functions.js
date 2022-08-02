
const playerSelection = String(window.prompt("Write Rock, paper or sissors", ""));

playRound(playerSelection,getComputerChoice())

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3));
    let computerChoice
    switch (randomNumber) {
        case 0 : 
        computerChoice ='Rock';
        break
        case 1 : 
        computerChoice ='Paper';
        break
        case 2 : 
        computerChoice = 'Sissors';
        break
    }
    return computerChoice;
}

function playRound (playerSelection, computerSelection) { 
     switch (playerSelection.toLowerCase()) {
        case 'rock':
            switch(computerSelection.toLowerCase()){
                case 'rock':
                    console.log("it's a draw");
                    return 0 
                    break
                case 'sissors':
                    console.log("You Lose! Rock beats Sissors");
                    return 2 
                    break
                case 'paper':
                    console.log("You Win! Paper beats Rock");
                    return 1 
                    break                    
                
            }
        break
        case 'sissors':
            switch(computerSelection.toLowerCase()){
                case 'rock':
                    console.log("You Lose! Rock beats Sissors");    
                    return 2                
                    break
                case 'sissors':
                    console.log("it's a draw"); 
                    return 0    
                    break
                case 'paper':
                    console.log("You Win! Sissor beats Paper");
                    return 1   
                    break                    
                
            }
        break
        case 'paper':
            switch(computerSelection.toLowerCase()){
                case 'rock':
                    console.log("You Win! Paper beats Rock");
                    return 1   
                    break
                case 'sissors':
                    console.log("You Lose! Sissor beats Paper");
                    return 2    
                    break
                case 'paper':
                    console.log("it's a draw"); 
                    return 0   
                    break                    
                
            }
        break
        default:
            console.log('Ingrese un valor correcto')
            break
     }
}