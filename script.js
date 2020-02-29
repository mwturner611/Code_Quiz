// assign variables
var timer = document.getElementById('timer');
var questionBox = document.getElementById('questionBox');
var ul1 = document.getElementById('ul1');
var ul2 = document.getElementById('ul2');
var button = document.getElementById('button');
var scoreBoard = document.getElementById('scoreBoard');
var timeRemaining;
var numberOfClicks = 0;
var score = 0;
var numberOfAnswers = 0;
var questionUp = 0;
var answerValue = 0;


// question array
var questions = [
question1 = {
  question: "Which option below is the best example of camel case?",
  firstAnswer: {text: "CamelCase", rW: "0"},
  secondAnswer: {text: "camelCase", rW: "1"},
  thirdAnswer: {text: "CAMELCASE", rW: "0"},
  fourthAnswer: {text: "camelcase", rW: "0"},
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

// positive score display
function positveScoreDisplay(){
  answerValue = 10;
  scoreBoard.innerText = "Correct! That's " + answerValue + " points for this one. You have " + score + "points total."
}

// negative score display
function negativeScoreDisplay(){
  scoreBoard.innerText = "Sorry that's wrong! You have " + score + "points total."
}

// assign question and answer content and add event listeners
function assignQuestion(a){
  // create list items
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");

  // assign question and answers
  questionBox.innerText = questions[a].question;
  li1.innerText = questions[a].firstAnswer.text;
  li2.innerText = questions[a].secondAnswer.text;
  li3.innerText = questions[a].thirdAnswer.text;
  li4.innerText = questions[a].fourthAnswer.text;

  // assign value to li tags
  li1.value = questions[a].firstAnswer.rW;
  li2.value = questions[a].secondAnswer.rW;
  li3.value = questions[a].thirdAnswer.rW;
  li4.value = questions[a].fourthAnswer.rW;

  // append them to the page
  ul1.appendChild(li1);
  ul1.appendChild(li2);
  ul2.appendChild(li3);
  ul2.appendChild(li4);

  // assign styles to the answer list
  li1.setAttribute("class","answerStyle");
  li2.setAttribute("class","answerStyle");
  li3.setAttribute("class","answerStyle");
  li4.setAttribute("class","answerStyle");
    
};

// start timer function
function startQuiz () {
  timeRemaining = 60;

  setInterval(function() {
    if (timeRemaining > 0) {
      
      // remove the button text and start the timer
      button.remove();
      timer.innerText = "Time Remaining: " + timeRemaining;

      // count down the timer
      timeRemaining--;
    }
    else{
        clearInterval();
    }
  }, 1000);
  assignQuestion(questionUp);  
}


// start button launches the timer function and question function
button.addEventListener("click", function(){
  startQuiz();
  });

