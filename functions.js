

//game()

let round = 0;
let resultPlayer = 0;
let resultPc = 0;
let playRoundResult = 0
const resultsHeader = document.querySelector('.resultsHeaderH ');
const resultMessage = document.querySelector('.resultMessage ');
const ending = document.querySelector('.ending ');
const endingMessage = document.querySelector('.endingMessage ');
const btn = document.querySelector('.play');
const instructions = document.querySelector('.instructions ');
const btns  = document.querySelector('.seleccion');
const roundNum  = document.querySelector('.roundNum');
const playerNum  = document.querySelector('.playerNum');
const pcNum  = document.querySelector('.pcNum');
const sel = document.querySelectorAll('.selected');
const again = document.querySelector('.again');

//modal variables 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnModal = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', () => {
    instructions.classList.add('invisible'); 
    btns.classList.remove('invisible');

});
again.addEventListener('click', () => {
    location.reload() ;

});
sel.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {        
        
        playRoundResult = playRound(button.value ,getComputerChoice());
        console.log(playRoundResult);
        round ++;
        resultsHeader.innerHTML = "Round " + round;
        roundNum.innerHTML = "Round " + round; 
        if (playRoundResult === 2) {
            playerNum.innerHTML = resultPlayer;  
            pcNum.innerHTML = resultPc +1; 
            resultPc ++;
            modal.style.display = "block";
            resultMessage.innerHTML = "You lose this round!"
             
        }
        else if (playRoundResult === 1) {
            playerNum.innerHTML = resultPlayer + 1;  
            pcNum.innerHTML = resultPc; 
            resultPlayer++ ; 
            modal.style.display = "block";
            resultMessage.innerHTML = "You win this round!"
        }
        else {
            playerNum.innerHTML = resultPlayer;  
            pcNum.innerHTML = resultPc; 
            modal.style.display = "block";
            resultMessage.innerHTML = "It's a draw!"
        }

        if ( round === 5  ) {
            if ( resultPlayer >  resultPc )
              {
                endingMessage.innerHTML = `Congratulations!, you won the game!` 
                btns.classList.add('invisible');
                ending.classList.remove('invisible');
              }  
              
            else  if ( resultPlayer < resultPc ) {
                endingMessage.innerHTML = "You lost, try again!" 
                btns.classList.add('invisible');
                ending.classList.remove('invisible');
            } else {
                endingMessage.innerHTML = "It's a draw game, try again!" 
                btns.classList.add('invisible');
                ending.classList.remove('invisible');
            }
             
        }
    

    });
});

function imagesResults(playerChoice, computerChoice) {
    const imgPlayer = document.querySelector('.playerScoreImage ');
    const imgPc = document.querySelector('.pcScoreImage ');
    switch(playerChoice.toLowerCase()){
        case 'rock': 
            imgPlayer.src = "images/rocks.png"                   
            break;
        case 'scissors': 
            imgPlayer.src = "images/scissors.png"  
            break;
        case 'paper': 
            imgPlayer.src = "images/email.png" 
            break;               
        
    }
    switch(computerChoice.toLowerCase()){
        case 'rock': 
            imgPc.src = "images/rocks.png"
            break;
        case 'scissors': 
            imgPc.src = "images/scissors.png"
            break;
        case 'paper': 
            imgPc.src = "images/email.png"
            break ;                
        
    }
    
}

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
        computerChoice = 'Scissors';
        break
    }
    return computerChoice;
}

function playRound (playerSelection, computerSelection) { 
    
   
    imagesResults(playerSelection ,computerSelection);
     switch (playerSelection.toLowerCase()) {
        case 'rock':
            switch(computerSelection.toLowerCase()){
                case 'rock':
                    console.log("it's a draw");
                    return 0 
                    break
                case 'scissors':
                    console.log("You Win! Rock beats Scissors");
                    return 1
                    break
                case 'paper':
                    console.log("You Lose! Paper beats Rock");
                    return 2 
                    break                    
                
            }
        break
        case 'scissors':
            switch(computerSelection.toLowerCase()){
                case 'rock':
                    console.log("You Lose! Rock beats Sissors");    
                    return 2                
                    break
                case 'scissors':
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
                case 'scissors':
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




function game() {        
    let ganadorPlayer, resultado, ganadorPc
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = String(window.prompt("Write Rock, paper or sissors", ""));
        resutlado = playRound(playerSelection,getComputerChoice())
        if (resultado === 1 ){
            ganadorPlayer++;
        }else if (resultado === 2){
            ganadorPc++
        }         
     }
     if( ganadorPlayer > ganadorPc) {
        console.log('Has ganado la partida')
     }else{
        console.log('Has perdido la partida')
     }
}


// modal functions 



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}