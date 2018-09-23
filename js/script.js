'use strict';

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var newGame = document.getElementById("newGame");
var resultPlayer = 0;
var resultComputer = 0;
var remis = 0;
var finalWinner;
var maxRoundNumber, roundsNumber, rounds;
var finalResultPlayer, finalResultComputer;
var TABLE_ELEMENT = document.querySelector('#results');

var params = {
	finalResultPlayer,
	finalResultComputer,
	rounds,
	roundsNumber,
	resultPlayer,
	resultComputer,
	remis,
	finalResultPlayer,
	finalResultComputer,
	progress: [],
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

function setTableModal(data) {
  TABLE_ELEMENT.querySelector('tbody').innerHTML = data;

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
		resultComputer += 1;
	} else if (computerChoice === 'paper' && playerChoice === 'scissors' ||
				computerChoice === 'scissors' && playerChoice === 'rock' ||
				computerChoice === 'rock' && playerChoice === 'paper'){
		winner = 'PLAYER';

	} else if (computerChoice === 'paper' && playerChoice === 'paper' ||
				computerChoice === 'scissors' && playerChoice === 'scissors' ||
				computerChoice === 'rock' && playerChoice === 'rock'){
		winner = 'REMIS';
	}
	
	if (winner === 'PLAYER') {
		params.resultPlayer += 1;
	} else if (winner === 'COMPUTER') {
		params.resultComputer += 1;
	} else if (winner === 'REMIS') {
		params.remis += 1;
	}
	
	var result = document.getElementById('result');
	result.innerHTML = ('Result Player: ' + params.resultPlayer + ' - ' + 'Result Computer: ' + params.resultComputer + ' - ' + 'REMIS: ' + params.remis);
	params.finalResultPlayer = params.resultPlayer;
	params.finalResultComputer = params.resultComputer;

	
	if (params.resultPlayer > params.resultComputer) {
		finalWinner = 'PLAYER';
	} else if (params.resultComputer > params.resultPlayer) {
		finalWinner = 'COMPUTER';
	} else finalWinner = 'REMIS';

	params.progress.push({computerChoice: computerChoice, playerChoice: playerChoice, winner: winner, finalWinner: finalWinner});
	
}

function checkRound(){
	if (params.finalResultPlayer >= params.rounds){
		var data = generateDataModal(params.progress);
    	setTableModal(data);
		showModal();
		//alert('FINISH - Winner is: PLAYER');
		
	} if (params.finalResultComputer >= params.rounds){
		var data = generateDataModal(params.progress);
    	setTableModal(data);
		showModal();
		//alert('FINISH - Winner is: COMPUTER')
	}
}

function newGameF(){
	params.roundsNumber = prompt("Please enter max rounds number");
	params.rounds = parseInt(params.roundsNumber);
    if (params.roundsNumber != null) {
        document.getElementById("maxRoundNumber").innerHTML = "Max rounds number is: " + params.roundsNumber;
    }
    params.progress = [];
    params.finalResultPlayer = 0;
    params.finalResultComputer = 0;
    var result = document.getElementById('result');
    result.innerHTML = '';
    params.resultPlayer = 0;
    params.resultComputer = 0;
    params.remis = 0;
}



function generateDataModal(data) {
  var content = '';
  
  for (var i = 0; i < data.length; i++) {
    content += '<tr>\
      <td>' + data[i].computerChoice + '</td>\
      <td>' + data[i].playerChoice + '</td>\
      <td>' + data[i].winner + '</td>\
    </tr>';
  }
  content += '<div class="finalWinner">Final Winner is: ' + finalWinner + '</div>';
  return content;
}


	
	var showModal = function(){
		TABLE_ELEMENT.classList.remove('hide');
  		TABLE_ELEMENT.classList.add('show');
		document.querySelector('#modal-one').classList.add('show');
		document.getElementById('modal-overlay').classList.add('show');
	};

	var hideModal = function(){
		document.querySelector('#modal-one').classList.remove('show');
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	};
	
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	};
