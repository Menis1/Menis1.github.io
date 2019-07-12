// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT: Get the first and last number.
//PROCESSING: Add the two numbers.
//OUTPUT: Display the sum.

function addEnds(list) {
    list = [15, 7, 22, 4, 13];
    let firstNum = list[0];
    let lastNum = list[list.length - 1];
    let addNum = firstNum + lastNum;
    document.getElementById("output").innerHTML = addNum;
    document.getElementById("showArray").innerHTML = list;
}