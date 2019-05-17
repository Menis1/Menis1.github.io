// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get city, address, and zip code from, input box
// PROCESSING: take values of address labe and put in address format
// OUTPUT: Display address 

function addressBuilder() {	
	//INPUT
		let city = document.getElementById("city").value;
		let state = document.getElementById("state").value;
		let zipcode = document.getElementById("zipcode").value;
	//PROCESSING
		let address = city + ", " + state + ", " + zipcode;	
	//OUTPUT
	document.getElementById("output").innerHTML = address;
}