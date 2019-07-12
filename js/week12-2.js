// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT: Get the numbers from the list.
//PROCESSING: Select the middle number, if the numbers list is even make an average of the two middle numbers.
//OUTPUT: Display the result.


function getMiddle(list) {
    list = [13, 31, 7, 27, 22, 44];
    let answer = 0;
    numLength = list.length;
    if (numLength % 2 === 0) {       
        answer = (list[numLength / 2 - 1] + list[numLength / 2]) / 2;
    } else { 
        answer = list[(numLength - 1) / 2];
    }
    document.getElementById("output").innerHTML = list;
    document.getElementById("showArray").innerHTML = answer;
    return answer;
}
function getMiddleOdd(list) {
    list = [40, 4, 27, 70, 31];
    let answer = 0;
    numLength = list.length;
    if (numLength % 2 === 0) { 
        answer = (list[numLength / 2 - 1] + list[numLength / 2]) / 2;
    } else { 
        answer = list[(numLength - 1) / 2];
    }
    document.getElementById("output").innerHTML = list;
    document.getElementById("showArray").innerHTML = answer;
    }