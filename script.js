// assign variables
var timer = document.getElementById('timer');
var questionBox = document.getElementById('questionBox');
var ul1 = document.getElementById('ul1');
var ul2 = document.getElementById('ul2');
var button = document.getElementById('button');
var scoreBoard = document.getElementById('scoreBoard');
var imgArea = document.getElementById('imgArea');
var userAnswer = document.querySelectorAll('forAnsers');
var timeRemaining;
var score = 0;
var totalPossible = 0;
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
  firstAnswer: {text: "Wrong", rW: "0"},
  secondAnswer: {text: "Wrong", rW: "0"},
  thirdAnswer: {text: "Wrong", rW: "0"},
  fourthAnswer: {text: "Right", rW: "1"},
},
question3 = {
  question: "Which one is right?",
  firstAnswer: {text: "Wrong", rW: "0"},
  secondAnswer: {text: "Right", rW: "1"},
  thirdAnswer: {text: "Wrong", rW: "0"},
  fourthAnswer: {text: "Wrong", rW: "0"},
},
question4 = {
  question: "Which one is right?",
  firstAnswer: {text: "Wrong", rW: "0"},
  secondAnswer: {text: "Wrong", rW: "0"},
  thirdAnswer: {text: "Right", rW: "1"},
  fourthAnswer: {text: "Wrong", rW: "0"},
},
question5 = {
  question: "Which one is right?",
  firstAnswer: {text: "Right", rW: "1"},
  secondAnswer: {text: "Wrong", rW: "0"},
  thirdAnswer: {text: "Wrong", rW: "0"},
  fourthAnswer: {text: "Wrong", rW: "0"},
},
question6 = {
  question: "Which one is right?",
  firstAnswer: {text: "Wrong", rW: "0"},
  secondAnswer: {text: "Wrong", rW: "0"},
  thirdAnswer: {text: "Right", rW: "1"},
  fourthAnswer: {text: "Wrong", rW: "0"},
},
question7 = {
  question: "Which one is right?",
  firstAnswer: {text: "Wrong", rW: "0"},
  secondAnswer: {text: "Right", rW: "1"},
  thirdAnswer: {text: "Wrong", rW: "0"},
  fourthAnswer: {text: "Wrong", rW: "0"},
},
question8 = {
  question: "Which one is right?",
  firstAnswer: {text: "Right", rW: "1"},
  secondAnswer: {text: "Wrong", rW: "0"},
  thirdAnswer: {text: "Wrong", rW: "0"},
  fourthAnswer: {text: "Wrong", rW: "0"},
},
question9 = {
  question: "Which one is right?",
  firstAnswer: {text: "Wrong", rW: "0"},
  secondAnswer: {text: "Wrong", rW: "0"},
  thirdAnswer: {text: "Wrong", rW: "0"},
  fourthAnswer: {text: "Right", rW: "1"},
},
question10 = {
  question: "Which one is right?",
  firstAnswer: {text: "Wrong", rW: "0"},
  secondAnswer: {text: "Wrong", rW: "0"},
  thirdAnswer: {text: "Wrong", rW: "0"},
  fourthAnswer: {text: "Right", rW: "1"},
}
];

// create quiz image on screen
var imgVar = document.createElement("img");
imgVar.setAttribute("src", "assets/quiz.png");
imgVar.style.margin = "10px";
imgVar.style.padding = "10px";
imgVar.setAttribute("height" , "150");
imgVar.setAttribute("width", "150");
imgArea.appendChild(imgVar);

// remove img from screen
function removeImg(){
  imgVar.remove();
}

// positive score display
function positveScoreDisplay(){
  totalPossible = 10 * (questionUp + 1);
  score = score + 10;
  scoreBoard.innerText = "Correct! you've got " + score + " points out of " + totalPossible + " points possible."
  setTimeout(function(){ scoreBoard.innerText = '';}, 3000);
  questionUp = questionUp + 1;
  assignQuestion(questionUp);
}

// negative score display
function negativeScoreDisplay(){
  totalPossible = 10 * (questionUp + 1);
  scoreBoard.innerText = "Sorry that's wrong! You lose 10 seconds! You have " + score + " points out of " + totalPossible + " points possible"
  setTimeout(function(){ scoreBoard.innerText = '';}, 3000);
  questionUp = questionUp + 1;
  assignQuestion(questionUp);
}

// assign question and answer content and add event listeners
function assignQuestion(a){
  // clear prior question content
  ul1.innerHTML = "";
  ul2.innerHTML = "";
  questionBox.innerHTML = "";
  
  // create list items
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");

  // store li's in array
  var listItems = document.getElementsByTagName("li");

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

  // assign styles to the answer list
  li1.setAttribute("class","answerStyle");
  li2.setAttribute("class","answerStyle");
  li3.setAttribute("class","answerStyle");
  li4.setAttribute("class","answerStyle");    

  // append them to the page
  ul1.appendChild(li1);
  ul1.appendChild(li2);
  ul2.appendChild(li3);
  ul2.appendChild(li4);

 //Look for clicks on the answers
  for (var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', checkAnswer);
  };
 
};

// check answer function
function checkAnswer(){
  if(this.value === 1){
    positveScoreDisplay();
  }
  else{
    timeRemaining = timeRemaining - 10;
    negativeScoreDisplay();
  };
}

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
        // stop tiimer and end the game function due to out of time
        clearInterval();
    }
  }, 1000);
   
}


// start button launches the timer function and question function
button.addEventListener("click", function(){
  startQuiz();
  assignQuestion(questionUp);
  removeImg();

  });

