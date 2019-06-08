// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get the customer subtotal
// PROCESSING: If the subtotal, on Tuesday or Wednesday, is greater than $50, subtract 10% from the subtotal.
// OUTPUT: Display the total amount due by adding sales tax of 6% to the subtotal.

let d = new Date();
let dayOfWeek = d.getDay();
let day = new Array(7);
  day[0] = "Sunday"
  day[1] = "Monday"
  day[2] = "Tuesday"
  day[3] = "Wednesday"
  day[4] = "Thursday"
  day[5] = "Friday"
  day[6] = "Saturday"
document.getElementById("dOfW").innerHTML = day[d.getDay()];

function Sale() {
  let tax = .06;
  let subTotal = parseInt(document.getElementById("subTotal").value);
  
  if (d.getDay() == (2 || 3)) {
		if (subTotal > 50) {
    	let discount = .10;
    	let discountTotal = subTotal * discount;
    	let nsubtotal = subTotal - discountTotal;
    	let ttotal = nsubtotal * tax;
    	let total = nsubtotal + ttotal;		
			document.getElementById("toutput").innerHTML = "Final Cost: $" + total.toFixed(2);
  }} else {    
    let ttotal = subTotal * tax;
    let total = subTotal + ttotal;
		document.getElementById("toutput").innerHTML = "Final Cost: $" + total.toFixed(2);
  }
}