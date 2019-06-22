// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get any positive integer from the user
// PROCESSING: Calculate the times table from 1 to 12 of user input
// OUTPUT: Display times table

function multiplicationTable() {
	let num = parseInt(document.getElementById("num").value);
	let Table = "";
	
	if(num < 1 ^ num > 10){
		alert("Please choose a positive integer from 1 - 10.");
		return;
	}
	for (let i = 1; i <= 12; i++) {
		let result = i * num;
		Table += num + " x " + i + " = " + num * i + "<br>";
	}
	document.getElementById("output").innerHTML = Table;
}
