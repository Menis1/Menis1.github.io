// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: The user selects the weather
// PROCESSING: Choose the right type of shoes in according with the weather
// OUTPUT: Display the right type of shoes to wear

function footWear () {
	let weather = document.getElementById("weather").value;
	if (weather == "hot") {
		 footwear = "sandals";
	}
	else if (weather == "rain") {
		 footwear = "galoshes";
	}
	else if (weather == "snow") {
		 footwear = "boots";
	}
	else if (weather == "cool") {
		 footwear = "shoes";
	}
	document.getElementById('output').innerHTML = footwear;
}