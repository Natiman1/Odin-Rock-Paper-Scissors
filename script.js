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
  function getPlayerChoice() {
	let playerInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  
	// Check if the input is valid
	while (!["rock", "paper", "scissors"].includes(playerInput)) {
	  alert("Invalid choice. Please enter rock, paper, or scissors.");
	  playerInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
	}
  
	return playerInput;
  } 
  
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice(); // Assuming you have a function named getComputerChoice
  console.log(playRound(playerSelection, computerSelection));
  