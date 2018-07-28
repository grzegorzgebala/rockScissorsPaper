'use strict';

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var newGame = document.getElementById("newGame");
var resultPlayer = 0;
var resultComputer = 0;
var maxRoundNumber, roundsNumber, rounds;
var finalResultPlayer, finalResultComputer;

button1.addEventListener('click', function(){
	checkRound();
	playerMove('rock');
});
button2.addEventListener('click', function(){
	checkRound();
	playerMove('scissors');
});
button3.addEventListener('click', function(){
	checkRound();
	playerMove('paper');
});
newGame.addEventListener('click', function(){
	newGameF();
});

function checkRound(){
	if (finalResultPlayer >= rounds){
		setTimeout(location.reload.bind(location), 100);
		alert('FINISH - Winner is: PLAYER');
	} if (finalResultComputer >= rounds){
		setTimeout(location.reload.bind(location), 100);
		alert('FINISH - Winner is: COMPUTER')
	}
}

function newGameF(){
	roundsNumber = prompt("Please enter max rounds number");
	rounds = parseInt(roundsNumber);
    if (roundsNumber != null) {
        document.getElementById("maxRoundNumber").innerHTML = "Max rounds number is: " + roundsNumber;
    } return rounds;
}

function playerMove(playerChoice){
	var value = Math.floor(Math.random()*3)+1;
	var computerChoice;
	var winner;
	
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
		output.innerHTML = ('Winner is: ' + winner);
	} else { 
		output.innerHTML = ('Remis')
	}
	
	
	if (winner === 'PLAYER') {
		resultPlayer += 1;
	} else if (winner === 'COMPUTER') {
		resultComputer += 1;
	}
	
	var result = document.getElementById('result');
	result.innerHTML = ('Result Player: ' + resultPlayer + ' - ' + 'Result Computer: ' + resultComputer);
	finalResultPlayer = resultPlayer;
	finalResultComputer = resultComputer;
}









