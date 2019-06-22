// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get instructions for table rows and cells
// PROCESSING: Use a looping structure to process each data row of the table
// OUTPUT: Display the oldest operating Temple

let table = document.getElementById("templeData");
	let yearDedicated = parseInt(table.rows[1].cells[1].innerHTML);
	let temple = table.rows[1].cells[0].innerHTML;
console.table(table)
	
parseInt(table.rows[1].cells[1].innerHTML);

for (let i = 1; i < table.rows.length; i++) { 
	let year = parseInt(table.rows[i].cells[1].innerHTML);
if (yearDedicated > year) {
	yearDedicated = year
	output = table.rows[i].cells[0].innerHTML;
	}
}

document.getElementById("output").innerHTML = output;
