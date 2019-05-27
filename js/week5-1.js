// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// DEFINING TABLE
// INPUT: Get radius and height of the cylinder from the user
// PROCESSING: calculate the volume and convert it to liters
// OUTPUT: Display the volume of the cylinder

function volumeofCilinder () {
	//INPUT
	let radius = parseFloat(document.getElementById("radius").value);
	let height = parseFloat(document.getElementById("height").value);
	//PROCESSING
	let volume = Math.PI * Math.pow(radius,2) * height / 61.024;
	let volumerounded = volume.toFixed(2);
	//OUTPUT
	document.getElementById ("output").innerHTML = volumerounded;
	}