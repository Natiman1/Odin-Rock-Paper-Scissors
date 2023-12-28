function playRound(playerSelection, computerSelection) {
	// Convert playerSelection to lowercase for case-insensitive comparison
	const player = playerSelection.toLowerCase();
	const computer = computerSelection.toLowerCase();

	if (player === computer) {
	    return "It's a tie!";
	} else if (
	    (player === "rock" && computer === "scissors") ||
	    (player === "paper" && computer === "rock") ||
	    (player === "scissors" && computer === "paper")
	) {
	    return `You win! ${player} beats ${computer}.`;
	} else {
	    return `You lose! ${computer} beats ${player}.`;
	    }
    }
    function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
		const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
    }
    function getPlayerChoice(choice) {
	return choice;
    } 

	function updateResult(result) {
		const resultElement = document.getElementById("result");
		resultElement.innerText = result;
	}

	function handleButtonClick(choice) {
		const playerSelection = getPlayerChoice(choice);
    	const computerSelection = getComputerChoice();
    	const result = playRound(playerSelection, computerSelection);
    updateResult(result);
	}

	document.getElementById("rockButton").addEventListener("click", function() {
    	handleButtonClick("rock");
	});

	document.getElementById("paperButton").addEventListener("click", function() {
    handleButtonClick("paper");
	});

	document.getElementById("scissorsButton").addEventListener("click", function() {
    	handleButtonClick("scissors");
	});
