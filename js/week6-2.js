// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get the user response to the problem
// PROCESSING: Process the answer with a feedback
// OUTPUT: Display the feedback

let randomNumber1 = Math.floor(Math.random() * 100 + 1);
let randomNumber2 = Math.floor(Math.random() * 100 + 1);
document.getElementById("mathematicalProblem").innerHTML= randomNumber1 + "+" + randomNumber2;

function checkResult () {
	let answer = document.getElementById("answer").value;
	let feedback;
	let sum = randomNumber1 + randomNumber2;
		if (answer == sum) {
		 feedback = "Correct! Good job.";
		}
		else if (answer == "") {
			feedback = "Please enter answer."
		}
		else {
		feedback = "Sorry. That is incorrect."
		}
	document.getElementById("output").innerHTML= feedback;
}

function newProblem() {
	window.location.reload(true);
}