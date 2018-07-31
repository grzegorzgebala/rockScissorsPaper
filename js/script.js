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
	playerMove('rock');
});
button2.addEventListener('click', function(){
	playerMove('scissors');
});
button3.addEventListener('click', function(){
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
	rounds = +prompt("Please enter max rounds number");
	
	if (rounds != null) {
		document.getElementById("maxRoundNumber").innerHTML = "Max rounds number is: " + rounds;
	} 
	
	return rounds;
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
	
	checkRound();

	if (computerChoice === 'paper' && playerChoice === 'rock' || 
		 computerChoice === 'scissors' && playerChoice === 'paper' ||
		 computerChoice === 'rock' && playerChoice === 'scissors') {
		winner = 'COMPUTER';
		resultComputer += 1;
		output.innerHTML = ('Winner is: ' + winner);
	} else if (computerChoice === 'paper' && playerChoice === 'scissors' ||
				computerChoice === 'scissors' && playerChoice === 'rock' ||
				computerChoice === 'rock' && playerChoice === 'paper'){
		winner = 'PLAYER';
		resultPlayer += 1;
		output.innerHTML = ('Winner is: ' + winner);
	} else {
		output.innerHTML = ('Remis')
	}

	
	var result = document.getElementById('result');
	result.innerHTML = ('Result Player: ' + resultPlayer + ' - ' + 'Result Computer: ' + resultComputer);
	finalResultPlayer = resultPlayer;
	finalResultComputer = resultComputer;
}
