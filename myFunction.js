//creates the variable score and sets it to 0
//declared score variable//
var score = 0
//function to check which radio button is selected and display "submitted" if the correct answer was selectet, score increases//
function checkButton() {
            if(document.getElementById('Purple').checked) {
                document.getElementById("Incorrect").innerHTML
                    = "Submitted";
            }
            else if(document.getElementById('Orange').checked) {
                document.getElementById("Correct").innerHTML
                    = "Submitted";
                score++;
            }
            else if(document.getElementById('Black').checked) {
                document.getElementById("Incorrect").innerHTML
                    = "Submitted";
            }
            else if(document.getElementById('Red').checked) {
                document.getElementById("Incorrect").innerHTML
                    = "Submitted";
            }
        }

function checkButton2() {
            if(document.getElementById('One').checked) {
                document.getElementById("Incorrect2").innerHTML
                    = "Submitted";
            }
            else if(document.getElementById('Three').checked) {
                document.getElementById("Incorrect2").innerHTML
                    = "Submitted";
            }
            else if(document.getElementById('Five').checked) {
                document.getElementById("Correct2").innerHTML
                    = "Submitted";
                score++;
            }
            else if(document.getElementById('Six').checked) {
                document.getElementById("Incorrect2").innerHTML
                    = "Submitted";
            }
        }

function checkButton3() {
            if(document.getElementById('Trumpet').checked) {
                document.getElementById("Correct3").innerHTML
                    = "Submitted";
                score++;
            }
            else if(document.getElementById('Piano').checked) {
                document.getElementById("InCorrect3").innerHTML
                    = "Submitted";
            }
            else if(document.getElementById('Flute').checked) {
                document.getElementById("Incorrect3").innerHTML
                    = "Submitted";
            }
            else if(document.getElementById('Violin').checked) {
                document.getElementById("Incorrect3").innerHTML
                    = "Submitted";
            }
        }

function checkButton4() {
            if(document.getElementById('One2').checked) {
                document.getElementById("Incorrect4").innerHTML
                    = "Submitted";
            }
            else if(document.getElementById('Two2').checked) {
                document.getElementById("Incorrect4").innerHTML
                    = "Submitted";
            }
            else if(document.getElementById('Three2').checked) {
                document.getElementById("Correct4").innerHTML
                    = "Submitted";
                score++;
            }
            else if(document.getElementById('Four2').checked) {
                document.getElementById("Incorrect4").innerHTML
                    = "Submitted";
            }
        }
// function to check score and display text depending on the score
function checkScore() {
  if(score == 0) {
    document.getElementById("Score").innerHTML
        = "You got 0%, do you even remember Conor's Name?";
  }
  else if(score == 1) {
    document.getElementById("Score").innerHTML
        = "You got 25%, you know Conor a bit";
  }
  else if(score == 2) {
    document.getElementById("Score").innerHTML
        = "You got 50%, you're starting to know Conor";
  }
  else if(score == 3) {
    document.getElementById("Score").innerHTML
        = "You got 75%, you know some things about Conor!";
  }
  else if(score == 4) {
    document.getElementById("Score").innerHTML
        = "You got 100%, you know a lot about Conor!";
  }
}
