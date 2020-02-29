// assign variables
var timer = document.getElementById('timer');
var questionBox = document.getElementById('questionBox');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var button = document.getElementById('button');
var scoreBoard = document.getElementById('scoreBoard');
var timeRemaining;
var numberOfClicks = 0;
var score = 0;
var numberOfAnswers = 0;
var questionUp = 1;
var answerValue = 0;


// question array
var questions = [
question1 = {
  question: "Which option below is the best example of camel case?",
  firstAnswer: "CamelCase",
  secondAnswer: "camelCase",
  thirdAnswer: "CAMELCASE",
  fourthAnswer: "camelcase",
},
question2 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
},
question3 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Right",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
},
question4 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Right",
  fourthAnswer: "Wrong",
},
question5 = {
  question: "Which one is right?",
  firstAnswer: "Right",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Wrong",
},
question6 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Right",
  fourthAnswer: "Wrong",
},
question7 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Right",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
},
question8 = {
  question: "Which one is right?",
  firstAnswer: "Right",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Wrong",
},
question9 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
},
question10 = {
  question: "Which one is right?",
  firstAnswer: "Wrong",
  secondAnswer: "Wrong",
  thirdAnswer: "Wrong",
  fourthAnswer: "Right",
}
];

console.log(questions.length);
console.log(questions);

// positive score display
function positveScoreDisplay(){
  answerValue = 10;
  scoreBoard.innerText = "Correct! That's " + answerValue + " points for this one. You have " + score + "points total."
}

// negative score display
function negativeScoreDisplay(){
  answerValue = -10;
  scoreBoard.innerText = "Sorry that's wrong! That's " + answerValue + " points for this one. You have " + score + "points total."
}

// assign question and answer content and add event listeners
function assignQuestion(a){
  questionBox.innerText = a.question;
  answer1.innerText = a.firstAnswer;
  answer2.innerText = a.secondAnswer;
  answer3.innerText = a.thirdAnswer;
  answer4.innerText = a.fourthAnswer;

  answer1.addEventListener("click", function(){
    if (a.firstAnswer === a.rightAnswer){
      score = score + 10;
      setTimeout(positveScoreDisplay(), 3000)
    }
    else{
      score = score - 10;
      setTimeout(negativeScoreDisplay(), 3000)
    }
  });
  answer2.addEventListener("click", function(){
    if (a.secondAnswer === a.rightAnswer){
      score = score + 10;
      setTimeout(positveScoreDisplay(), 3000);
    }
    else{
      score = score - 10;
      setTimeout(negativeScoreDisplay(), 3000);
    }
  })
  answer3.addEventListener("click", function(){
    if (a.thirdAnswer === a.rightAnswer){
      score = score + 10;
      setTimeout(positveScoreDisplay(), 3000);
    }
    else{
      score = score - 10;
      setTimeout(negativeScoreDisplay(), 3000);
    }
  })
  answer4.addEventListener("click", function(){
    if (a.fourthAnswer === a.rightAnswer){
      score = score + 10;
      setTimeout(positveScoreDisplay(), 3000);
    }
    else{
      score = score - 10;
      setTimeout(negativeScoreDisplay(), 3000);
    }
  })
};

// start quiz
function startQuiz () {
    timeRemaining = 60;

    setInterval(function() {
        if (timeRemaining >= 0) {
          console.log(timeRemaining);
          // remove the button text and start the timer
          button.remove();
          timer.innerText = "Time Remaining: " + timeRemaining;

          // count down the timer
          timeRemaining--;

          // assign attributes and text to the buttons
          answer1.setAttribute("class", "answerStyle");
          answer2.setAttribute("class", "answerStyle");
          answer3.setAttribute("class", "answerStyle");
          answer4.setAttribute("class", "answerStyle");

          // run functions for the question up
          while (questionUp < 11) {
            if(questionUp === 1){
              assignQuestion(question1);
              questionUp = questionUp + 1;
            };
            if(questionUp === 2){
              assignQuestion(question2);
              questionUp++;
            };
            if(questionUp === 3){
              assignQuestion(question3);
              questionUp++;
            };
            if(questionUp === 4){
              assignQuestion(question4);
              questionUp++;
            };
            if(questionUp === 5){
              assignQuestion(question5);
              questionUp++;
            };
            if(questionUp === 6){
              assignQuestion(question6);
              questionUp++;
            };
            if(questionUp === 7){
              assignQuestion(question7);
              questionUp++;
            };
            if(questionUp === 8){
              assignQuestion(question8);
              questionUp++;
            };
            if(questionUp === 9){
              assignQuestion(question9);
              questionUp++;
            };
            if(questionUp === 10){
              assignQuestion(question10);
              questionUp++;
            }
            else{
              alert("it's over")
            };
            
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

