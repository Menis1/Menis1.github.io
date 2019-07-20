// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT: Get values from array.
//PROCESSING: Count evens numbers.
//OUTPUT: Display even numbers.

function doTest () {
let numbers = [12, 7, 14, 38, 70, 1, 77, 63, 48, 20];
document.getElementById("array").innerHTML = numbers.toString();
document.getElementById("output").innerHTML = countEvens(numbers);
}

function countEvens(list) {
	let evens=0;
	for (i=0; i < list.length; i++) {
	if (list[i] % 2 == 0) {
		evens++; 
		}
	}
	return evens;
}