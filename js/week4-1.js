// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get first name from input box
// PROCESSING: Add first name in favorite scripture on click
// OUTPUT: Display the with first name 

function insertName() {
  //INPUT
  let name = document.getElementById("name").value;
	
  //PROCESSING
  let output = ` - Behold, thou art ${name}, and I have spoken unto thee because of thy desires; therefore treasure up these words in thy heart. Be faithful and diligent in keeping the commandments of God, and I will encircle thee in the arms of my love.`;

	// OUTPUT
  const scripture = document.getElementById("output");
  scripture.innerHTML = output;
}