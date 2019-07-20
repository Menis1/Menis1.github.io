// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT: Get values from array.
//PROCESSING: Multiply the numbers with the established value.
//OUTPUT: Display the new array.

function doTest () {
let list = [17, 34, 12, 42, 58, 27, 21, 88, 14, 70];
let factor = 3; 
document.getElementById("array").innerHTML = list.toString();
document.getElementById("factor").innerHTML = factor;
document.getElementById("output").innerHTML = multiply(list, factor);
}

function multiply(list, multiplier) {
	let products = "";
	for (i=0; i < list.length; i++) {
		let answer = list[i] * multiplier; 
		products+= answer + ", "; 
		}
	return products;
}