
//variables declarations

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


// begin rounds and show buttons paper scissors and rock

btn.addEventListener('click', () => {
    instructions.classList.add('invisible'); 
    btns.classList.remove('invisible');

});

// play again button reload page 
again.addEventListener('click', () => {
    location.reload() ;

});

//functionality of paper rock and scissor button
sel.forEach((button) => { 
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

        //end game functionality when 5 rounds ends

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


//set images for results on players and pc for each round 
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

// functionality of random choice of paper rock and scissors 
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

//compare player choice with computer choice and return 0 for draw 1 for win and 2 for lose
function playRound (playerSelection, computerSelection) {     
   
    imagesResults(playerSelection ,computerSelection);
     switch (playerSelection.toLowerCase()) {
        case 'rock':
            switch(computerSelection.toLowerCase()){
                case 'rock':
                    return 0 
                    break
                case 'scissors':
                    return 1
                    break
                case 'paper':
                    return 2 
                    break                              
            }
        break
        case 'scissors':
            switch(computerSelection.toLowerCase()){
                case 'rock':
                    return 2                
                    break
                case 'scissors':
                    return 0    
                    break
                case 'paper':
                    return 1   
                    break                    
                
            }
        break
        case 'paper':
            switch(computerSelection.toLowerCase()){
                case 'rock':
                    return 1   
                    break
                case 'scissors':
                    return 2    
                    break
                case 'paper':
                    return 0   
                    break                    
                
            }
        break
        default:
            console.log('Ingrese un valor correcto')
            break
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