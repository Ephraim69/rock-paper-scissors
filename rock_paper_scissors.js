function getComputerChoice() {
	const options = ["rock", "paper", "scissors"];
	// Generates a Random Number between 0 and 3. Then stores it in randomIndex
	let randomIndex = Math.floor(Math.random() * 3);
	return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	let value = playerSelection.toLowerCase();

	const rock = {"rock": "tie", "paper": "lose", "scissors": "win"};
	const paper = {"rock": "win", "paper": "tie", "scissors": "lose"};
	const scissors = {"rock": "lose", "paper": "win", "scissors": "tie"};

	if (value === "rock")
	{
		if (rock[computerSelection] === "win")
			return "You Win! Rocks beats Scissors."
		else if (rock[computerSelection] === "lose")
			return "You Lose! Paper beats Rock."
		else
			return "It's a Tie!"
	}
	else if (value === "scissors")
	{
		if (scissors[computerSelection] === "win")
			return "You Win! Scissors beats Paper."
		else if (scissors[computerSelection] === "lose")
			return "You Lose! Rock beats Scissors."
		else
			return "It's a Tie!"
	}
	else if (value === "paper")
	{
		if (paper[computerSelection] === "win")
			return "You Win! Paper beats Rock."
		else if (paper[computerSelection] === "lose")
			return "You Lose! Scissors beats Paper."
		else
			return "It's a Tie!"
	}
	else
	{
		alert(`Haha very funny. "${playerSelection}".\nWhat is ${playerSelection}??! You must enter either "Rock", "Paper" or "Scissors" bozo`);
		alert("Haha, jk. You can enter whatever you want :). Refresh the window and try again?")
	}
}

function game() {
	let result;
	let playerScore = 0;
	let compScore = 0;


	for (let i = 0; i < 5; i++)
	{
		const playerSelection = prompt(`Round ${i + 1}/5 : Rock, Paper or Scissors?`);
		if (playerSelection === null)
		{
			alert("You must enter an option!!!");
			return;
		}
		const computerSelection = getComputerChoice();
		console.table({"Computer's Choice" : `${computerSelection}`, "Your Choice" : `${playerSelection}` });
		result = playRound(playerSelection, computerSelection);
		if (result === null)
		{
			return;
		}
		console.log(result);
		if (result.includes("Win"))
		{
			playerScore++;
		}
		else if (result.includes("Lose"))
		{
			compScore++;
		}
		else
		{
			playerScore++;
			compScore++;
		}
	}
	if (playerScore > compScore)
	{
		alert("You Win!");
	}
	else if (playerScore < compScore)
	{
		alert("You Lose!");
	}
	else
	{
		alert("It's a Tie!")
	}
	console.log("\n\n======== Scores =========");
	console.log(`Player ${playerScore} - ${compScore} Computer`);
}

//game()
