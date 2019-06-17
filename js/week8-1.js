// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get an integer from the user
// PROCESSING: sum of all the odd integers between 1 and then integer that the user inputted
// OUTPUT: Display the sum of all the odd integers

function oddSum() {
	let n = parseInt(document.getElementById("number").value); 
	
	let sum = 0;
	for (let i = 1; i <= n; i += 2) {
		sum += i
	}
	
	document.getElementById("output").innerHTML = sum;
	}