'use strict';

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button1.addEventListener('click', function(){
	playerMove('rock');
});
button2.addEventListener('click', function(){
	playerMove('scissors');
});
button3.addEventListener('click', function(){
	playerMove('paper');
});

function playerMove(playerChoice){
	var value = Math.floor(Math.random()*3)+1;
	var computerChoice, winner;
	
	if (value === 1) {
		computerChoice = 'paper';
	} else if (value === 2){
		computerChoice = 'rock';
	} else if (value === 3){
		computerChoice = 'scissors'
	} 

	if (computerChoice === 'paper' && playerChoice === 'rock' || 
		 computerChoice === 'scissors' && playerChoice === 'paper' ||
		 computerChoice === 'rock' && playerChoice === 'scissors') {
		winner = 'COMPUTER';
	} else if (computerChoice === 'paper' && playerChoice === 'scissors' ||
				computerChoice === 'scissors' && playerChoice === 'rock' ||
				computerChoice === 'rock' && playerChoice === 'paper'){
		winner = 'PLAYER';
	}
	
	if (winner) {
		alert('Winner is: ' + winner);
	} else { 
		alert('Remis')
	}
}