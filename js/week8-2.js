// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get guess from the user
// PROCESSING: Check if guess is correct, if not, help the user to find the answer
// OUTPUT: Display messages that will help the user, if the guess is right, show how many attempts

function guessNumber(){
    let message = "Please enter an integer between 1 and 100.";
    let answer = 43;
    let guess;
    let tries = 0;
  do {
        guess = parseInt(prompt(message));
        tries += 1
        if (guess < answer) {
            message = guess +
            " is too low. Please enter another integer.";
        }
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another integer.";
        }
    } while (guess != answer);
    if (tries == 1) {
      message = guess + " is correct! <br> You got it right on your first try!";
    let output = message;
  document.getElementById("output").innerHTML = output;
    } else {
      message = guess + " is correct! <br> You guessed " + tries + " times before you got the answer correct!";
    let output = message;
  document.getElementById("output").innerHTML = output;
}}