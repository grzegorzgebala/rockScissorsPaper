'use strict';

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var newGame = document.getElementById("newGame");
var resultPlayer = 0;
var resultComputer = 0;
var maxRoundNumber, roundsNumber, rounds;
var finalResultPlayer, finalResultComputer;

var params = {
	finalResultPlayer,
	finalResultComputer,
	rounds,
	roundsNumber,
	resultPlayer,
	resultComputer,
	finalResultPlayer,
	finalResultComputer,
};

newGame.addEventListener('click', function(){
	newGameF();
});

var div1 = document.getElementsByClassName("player-move");

for (var i = 0; i < div1.length; i++) {
	(function(i) {
		div1[i].addEventListener('click', function(){
			checkRound();
			playerMove(div1[i].getAttribute("data-move"));
		});
	})(i)
}

function checkRound(){
	if (params.finalResultPlayer >= params.rounds){
		setTimeout(location.reload.bind(location), 100);
		alert('FINISH - Winner is: PLAYER');
	} if (params.finalResultComputer >= params.rounds){
		setTimeout(location.reload.bind(location), 100);
		alert('FINISH - Winner is: COMPUTER')
	}
}

function newGameF(){
	params.roundsNumber = prompt("Please enter max rounds number");
	params.rounds = parseInt(params.roundsNumber);
    if (params.roundsNumber != null) {
        document.getElementById("maxRoundNumber").innerHTML = "Max rounds number is: " + params.roundsNumber;
    } return params.rounds;
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
		params.resultPlayer += 1;
	} else if (params.winner === 'COMPUTER') {
		params.resultComputer += 1;
	}
	
	var result = document.getElementById('result');
	result.innerHTML = ('Result Player: ' + params.resultPlayer + ' - ' + 'Result Computer: ' + params.resultComputer);
	params.finalResultPlayer = params.resultPlayer;
	params.finalResultComputer = params.resultComputer;
}









