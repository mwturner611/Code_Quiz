// assign variables
var timer = document.getElementById('timer');
var question = document.getElementById('question');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var button = document.getElementById('button');
var timeRemaining;
var numberOfClicks = 0;

// start quiz
function startQuiz () {
    timeRemaining = 10;

    setInterval(function() {
        if (timeRemaining >= 0) {
          console.log(timeRemaining);
          timer.innerText = timeRemaining;
          timeRemaining--;
        }
        else{
            clearInterval();
        }
    }, 1000);
}

button.addEventListener("click", function(){
  if (numberOfClicks === 0){
    startQuiz();
  }
  else{
    nextQuestion();
  }
});