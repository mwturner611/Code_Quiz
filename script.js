// assign variables
var timer = document.getElementById('timer');
var questionBox = document.getElementById('questionBox');
var ul1 = document.getElementById('ul1');
var ul2 = document.getElementById('ul2');
var button = document.getElementById('button');
var scoreBoard = document.getElementById('scoreBoard');
var imgArea = document.getElementById('imgArea');
var userAnswer = document.querySelectorAll('forAnsers');
var spotForHS = document.getElementById('highScores');
var timeRemaining;
var score = 0;
var totalPossible = 0;
var questionUp = 0;
var answerValue = 0;
var highScores = [];


// question array
var questions = [
question1 = {
  question: "Q1 - Which option below is the best example of camel case?",
  firstAnswer: {text: "CamelCase", rW: "0"},
  secondAnswer: {text: "camelCase", rW: "1"},
  thirdAnswer: {text: "CAMELCASE", rW: "0"},
  fourthAnswer: {text: "camelcase", rW: "0"},
},
question2 = {
  question: "Q2 - How do you find an HTML element using it's ID?",
  firstAnswer: {text: "document.findElementByID('ID')", rW: "0"},
  secondAnswer: {text: "document.lookElementByID('ID')", rW: "0"},
  thirdAnswer: {text: "document.getElementWithID('ID')", rW: "0"},
  fourthAnswer: {text: "document.getElementByID('ID')", rW: "1"},
},
question3 = {
  question: "Q3 - If using JavaScript in HTML document, it should be inserted between which type tags?",
  firstAnswer: {text: "<head></head>", rW: "0"},
  secondAnswer: {text: "<script></script>", rW: "1"},
  thirdAnswer: {text: "<footer></footer>", rW: "0"},
  fourthAnswer: {text: "<header></header>", rW: "0"},
},
question4 = {
  question: "Q4 - What JavaScript logical operator means 'or' ",
  firstAnswer: {text: "or", rW: "0"},
  secondAnswer: {text: "|", rW: "0"},
  thirdAnswer: {text: "||", rW: "1"},
  fourthAnswer: {text: "//", rW: "0"},
},
question5 = {
  question: "Q5 - What are three prominent JavaScript data types?",
  firstAnswer: {text: "number, string, boolean", rW: "1"},
  secondAnswer: {text: "letter, number, symbol", rW: "0"},
  thirdAnswer: {text: "number, boolean, character", rW: "0"},
  fourthAnswer: {text: "number, string, poetry", rW: "0"},
},
question6 = {
  question: "Q6 - A JavaScript function is.....?",
  firstAnswer: {text: "another name for a complete JavaScript file", rW: "0"},
  secondAnswer: {text: "an unnecessary complication", rW: "0"},
  thirdAnswer: {text: "a block of code designed to perform a particular task", rW: "1"},
  fourthAnswer: {text: "another name for an 'if' statement", rW: "0"},
},
question7 = {
  question: "Q7 - What is the scope of variables declared within a function?",
  firstAnswer: {text: "global", rW: "0"},
  secondAnswer: {text: "local", rW: "1"},
  thirdAnswer: {text: "foreign", rW: "0"},
  fourthAnswer: {text: "homely", rW: "0"},
},
question8 = {
  question: "Q8 - How do you access the '40' out of the following object. var person = {firstName:'John', lastName:'Doe', age:40, eyeColor:'grey'};",
  firstAnswer: {text: "person.age;", rW: "1"},
  secondAnswer: {text: "document.person(age);", rW: "0"},
  thirdAnswer: {text: "person[2];", rW: "0"},
  fourthAnswer: {text: "draw.person.age", rW: "0"},
},
question9 = {
  question: "Q9 - Which is the best written 'for loop' to console.log each array item?",
  firstAnswer: {text: "for (var i = 0, i < array, i++) {console.log(array)};", rW: "0"},
  secondAnswer: {text: "while (i < array.lenth, i++) {console.log(array[i])};", rW: "0"},
  thirdAnswer: {text: "when (i < array.lenth, i++) {console.log(array[i])};", rW: "0"},
  fourthAnswer: {text: "for (var i = 0, i < array.lenth, i++) {console.log(array[i])};", rW: "1"},
},
question10 = {
  question: "Q10 - If var x = 9.656.  Which answer below will return 9.66?",
  firstAnswer: {text: "x.valueOf();", rW: "0"},
  secondAnswer: {text: "x.toString();", rW: "0"},
  thirdAnswer: {text: "x.toPrecision(2);", rW: "0"},
  fourthAnswer: {text: "x.toFixed(2);", rW: "1"},
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
  scoreBoard.innerText = "Correct! You get 5 bonus seconds! You've got " + score + " points out of " + totalPossible + " points possible."
  setTimeout(function(){ scoreBoard.innerText = '';}, 3000);
  questionUp = questionUp + 1;

  if (questionUp < 10){
    assignQuestion(questionUp);
  }
  else {
    timeRemaining = 0;
  }
}

// negative score display
function negativeScoreDisplay(){
  totalPossible = 10 * (questionUp + 1);
  scoreBoard.innerText = "Sorry that's wrong! You lose 10 seconds! You have " + score + " points out of " + totalPossible + " points possible"
  setTimeout(function(){ scoreBoard.innerText = '';}, 3000);
  questionUp = questionUp + 1;

  if (questionUp < 10){
    assignQuestion(questionUp);
  }
  else {
    timeRemaining = 0;
  }

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

// create form function
function createForm(){
  // clear last question/timer and ask for name
  ul1.innerHTML = "";
  ul2.innerHTML = "";
  questionBox.innerHTML = "The games over, Please enter your name below for the high scores record";
  timer.innerHTML = "";

  // create a form,div for box and button.  Add attributes as needed.
  var form = document.createElement("form");
  var userNameForm = document.createElement("div");
  userNameForm.setAttribute("class", "form-group");
  var formLabel = document.createElement("label");
  formLabel.setAttribute("for", "name");
  var inputBox = document.createElement("input");
  inputBox.setAttribute("type", "name");
  inputBox.setAttribute("class", "form-control");
  inputBox.setAttribute("id", "inputName");
  inputBox.setAttribute("placeholder", "Please enter your name");
  var buttonForForm = document.createElement("button");
  buttonForForm.setAttribute("type", "submit");
  buttonForForm.setAttribute("class", "btn");
  buttonForForm.setAttribute("class", "btn-primary");
  buttonForForm.innerText = "Submit";

  // append the form, input box and button to the question box
  questionBox.appendChild(form);
  form.appendChild(userNameForm);
  userNameForm.appendChild(inputBox);
  form.appendChild(buttonForForm);

  // placeholder name of user/score based on # of keys in local storage
  keys = Object.keys(localStorage);
  var number = parseInt((keys.length)) + 1;
  var nextUser = "user" + number;
  
  // add an event listener to the button
  buttonForForm.addEventListener('click', function(){
    localStorage.setItem(nextUser,score + " Score" + " for " + inputBox.value);
    postHighScores();
  });
}

// localStorage.clear();

postHighScores();
// post high scores function
function postHighScores (){
  keys = Object.keys(localStorage),
  i = keys.length;

  while (i--) {
    highScores.push(localStorage.getItem(keys[i]));
  }

  highScores.sort(function(a,b){
    return b.split(" ")[0] - a.split(" ")[0];});
  
  for (var k = 0; k < highScores.length; k++){
    var newli = document.createElement("li");
    newli.innerText = highScores[k];
    spotForHS.appendChild(newli);
  }  
}


// check answer function
function checkAnswer(){
  if(this.value === 1){
    timeRemaining = timeRemaining + 5;
    positveScoreDisplay();
  }
  else{
    timeRemaining = timeRemaining - 10;
    negativeScoreDisplay();
  };
}

// subtracts 1 from time and clears interval if at zero time Remaining
function countDown(){
  if (timeRemaining >= 0){
    button.remove();
    timer.innerText = "Time Remaining: " + timeRemaining;
    timeRemaining--;
  }
  else {
    clearInterval(timerVariable);
    createForm();
  }
}

// starts setInterval function referencing countDown() 
function startQuiz () {
  timeRemaining = 10;
  timerVariable = setInterval(countDown,1000);
}


// start button launches the timer function and question function
button.addEventListener("click", function(){
  startQuiz();
  assignQuestion(questionUp);
  removeImg();
});

