// assign variables
var timer = document.getElementById('timer');
var questionBox = document.getElementById('questionBox');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var button = document.getElementById('button');
var timeRemaining;
var numberOfClicks = 0;
var score = 0;
var numberOfAnswers = 0;
var questionUp = 1;

// question objecs


var question1 = {
  question: "Which option below is the best example of camel case?",
  firstAnswer: "CamelCase",
  secondAnswer: "camelCase",
  thirdAnswer: "CAMELCASE",
  fourthAnswer: "camelcase",
}
var question2 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
}
var question3 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Right",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
}
var question4 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Right",
  fourthAnswer: "Wrong",
}
var question5 = {
  question: "Which one is right?",
  firstAnswer: "Right",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Wrong",
}
var question6 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Right",
  fourthAnswer: "Wrong",
}
var question7 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Right",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
}
var question8 = {
  question: "Which one is right?",
  firstAnswer: "Right",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Wrong",
}
var question9 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
}
var question10 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
}

function assignQuestion(){

  questionBox.innerText = question1.question;
  answer1.innerText = question1.firstAnswer;
  answer2.innerText = question1.secondAnswer;
  answer3.innerText = question1.thirdAnswer;
  answer4.innerText = question1.fourthAnswer;
}

// start quiz
function startQuiz () {
    timeRemaining = 60;

    setInterval(function() {
        if (timeRemaining >= 0) {
          console.log(timeRemaining);
          // Change button text and start the timer
          button.innerText = "Submit";
          timer.innerText = "Time Remaining: " + timeRemaining;

          // count down the timer
          timeRemaining--;

          // assign attributes and text to the buttons
          answer1.setAttribute("class", "answerStyle");
          answer2.setAttribute("class", "answerStyle");
          answer3.setAttribute("class", "answerStyle");
          answer4.setAttribute("class", "answerStyle");

          // assign question and answer text for question

          assignQuestion();

          if (questionUp === 1){
            answer1.addEventListener("click", function(){
              questionUp++;
              questionBox.innerText = "Wrong!"
              timeRemaining = timeRemaining - 10;  
            })
            answer2.addEventListener("click", function(){
              questionUp++;
              questionBox.innerText = "Correct!"
              timeRemaining = timeRemaining + 5;
              score = score + 10;  
            })
            answer3.addEventListener("click", function(){
              questionUp++;
              questionBox.innerText = "Wrong!"
              timeRemaining = timeRemaining - 10;  
            })
            answer4.addEventListener("click", function(){
              questionUp++;
              questionBox.innerText = "Wrong!"
              timeRemaining = timeRemaining - 10;  
            })
          }

         

          
        }
        else{
            clearInterval();
        }
    }, 1000);
}


// have button setoff the first function and second function
button.addEventListener("click", function(){
  if (numberOfClicks === 0){
    startQuiz();
    numberOfClicks++
    console.log(numberOfClicks);
  }});

