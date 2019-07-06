// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get principal, annual rate, number of years, and periods per year from the user.
// PROCESSING: The second function (computeFutureValue) computes and returns the future value of an investment.
// OUTPUT: Display the future value.

function doFV() {
	let p = document.getElementById('principal').value; 
	let r = document.getElementById('rate').value; 
	let y = document.getElementById('years').value;
	let per = document.getElementById('periods').value;
	let futureValue = computeFutureValue(p, r, y, per); 
	document.getElementById('output').innerHTML = "Anticipated future value: $" + futureValue.toFixed(2);

}

function computeFutureValue (principal, annualRate, years, periodsPerYear) {
let r = annualRate/periodsPerYear;
let n = years*periodsPerYear;
let fV = principal * Math.pow((1 + r),n)
return fV; 
	
}