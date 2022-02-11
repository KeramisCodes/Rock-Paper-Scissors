'use strict'

let $ = function(id) {
    return document.getElementById(id);
}

let player = 0;
let pc = 0;
let playersChoice;
let pcsChoice;

const options = document.querySelectorAll("img");
console.log(options);

options.forEach(possibleOption => possibleOption.addEventListener("click", (e) => {
    playersChoice = e.target.id;
    generatePcsChoice();
    console.log(playersChoice);
    console.log(pcsChoice);
    
    function generatePcsChoice() {
        const random = Math.floor(Math.random() * options.length); 
        pcsChoice = options[random];
        return pcsChoice;
    }
    
    
    switch(playersChoice){
        case 'rock':
            if(pcsChoice == options[2]){
                player += 1;
                $("winner").innerHTML = "Player1 Wins! PC Chose " + pcsChoice.id + ".";
            }
            if(pcsChoice == options[0]){
                player = player;
                pc = pc;
                $("winner").innerHTML = "Tie!";
            }
            if(pcsChoice == options[1]) {
                pc += 1;
                $("winner").innerHTML = "PC Wins! PC chose " + pcsChoice.id + ".";
            }
            break;
        case 'paper':
            if(pcsChoice == options[0]){
                player += 1;
                $("winner").innerHTML = "Player1 Wins! PC chose " + pcsChoice.id + ".";
            } 
            if(pcsChoice == options[1]){
                player = player;
                pc = pc;
                $("winner").innerHTML = "Tie!";
            } 
            if(pcsChoice == options[2]) {
                pc += 1;
                $("winner").innerHTML = "PC Wins! PC chose " + pcsChoice.id + ".";
            }
            break;
        case 'scissors':
            if(pcsChoice == options[1]){
                player += 1;
                $("winner").innerHTML = "Player1 Wins! PC chose "  + pcsChoice.id + ".";
            } 
            if(pcsChoice == options[2]){
                player = player;
                pc = pc
                $("winner").innerHTML = "Tie!";
            } 
            if(pcsChoice == options[0]) {
                pc += 1;
                $("winner").innerHTML = "PC Wins! PC chose " + pcsChoice.id + ".";
            }
            break;
    }
  
    $("playerScore").innerHTML = player;
    $("pcScore").innerHTML = pc;   
}))






    console.log(pcsChoice);
    
