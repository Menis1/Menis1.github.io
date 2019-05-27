// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get number of regular hours and the employee's gross salary
// PROCESSING: Calculate the net salary after taxes
// OUTPUT: Display employee’s after tax pay

function getAfterTaxPay () {
	//INPUT 
	let hours = parseFloat(document.getElementById("hours").value);
	let gain = parseFloat(document.getElementById("gain").value);
	//PROCESSING
	let netPay = hours * gain * 0.85;
	let netPayrounded = netPay.toFixed(2);
	//OUTPUT
	document.getElementById ("output").innerHTML = netPayrounded +" USD";	
}