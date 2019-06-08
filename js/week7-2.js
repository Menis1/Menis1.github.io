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
document.getElementById("dofw").innerHTML = day[d.getDay()];

if (d.getDay() == (0) || d.getDay() == (6)) {
    let sleep = "Sleep in.";
    document.getElementById("sleepin").innerHTML = sleep
  } else if ((d.getMonth() == 0) && (d.getDate() == 1)) {
      let sleep = "Sleep in.";
      document.getElementById("sleepin").innerHTML = sleep
  } else if ((d.getMonth() == 11) && (d.getDate() == 25)) {
      let sleep = "Sleep in.";
      document.getElementById("sleepin").innerHTML = sleep
  } else if ((d.getMonth() == 6) && (d.getDate() == 4)) {
      let sleep = "Sleep in.";
      document.getElementById("sleepin").innerHTML = sleep
  } else {
    let sleep = "Get up!"
    document.getElementById("sleepin").innerHTML = sleep
  }