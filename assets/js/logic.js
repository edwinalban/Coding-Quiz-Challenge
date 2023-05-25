// Sets event listener for click on start button for displayQuestions function
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", displayQuestions);

// Sets question index position for randomly generated question
var questionIndex = 0;

// Hides welcome screen, generates random question from array, displays question/choices, and removes question from index once selected
function displayQuestions() {
    var hideHome = document.querySelector(".home-wrapper");
    hideHome.classList.add("hidden");

    var questionIndex = Math.floor(Math.random() * questionsArr.length);

    makeOL(questionsArr[questionIndex]);
    questionsArr.splice(questionIndex, 1);
};

// Creates ordered list and appends to coding questions div
function makeOL(currentQuestion) {

// Displays div for question/choices
    var questionSection = document.querySelector(".coding-questions");
    questionSection.classList.remove("hidden");

// Sets title of page as question asked
    var questionTitle = document.getElementById("question-title");
    document.getElementById("question-title").textContent = currentQuestion.question;
    
    var list = document.createElement('ol');

// Clears choices from screen each time makeOL function is called
    document.getElementById("answers").innerHTML = "";

// Creates list items for choices and appends to ordered list
        for (var i = 0; i < currentQuestion.choices.length; i++) {
            
            var item = document.createElement('li');

// Displays choices from array per question
            item.appendChild(document.createTextNode(currentQuestion.choices[i]));

// Sets event listener for click on choices in list
            item.addEventListener("click", function() {

// If questions array is empty, ends quiz
                if (questionsArr.length == 0) {
                    end();
                    return;
                }

// Displays feedback for correct/incorrect answer based on user choice
                var result = document.querySelector(".result");
                var resultSection = document.getElementById("result");

                resultSection.classList.remove("hidden");

                if (this.textContent == currentQuestion.answer) {
                    result.textContent = "Correct!";
                } else {
                    result.textContent = "Incorrect!";

// Initiates time penalty for incorrect user choice
                    subtractTime();
                }

// Displays next question
                questionIndex++;
                displayQuestions();
            });

// Appends list items to ordered list
            list.appendChild(item);
        }

// Appends ordered list to answers div
    document.getElementById("answers").appendChild(list);
};

// Sets event listener for click on start button for countdown function
startBtn.addEventListener("click", countdown);

// Set variable to store ID for setInterval
var intervalId;

// Starts timer countdown on start button click, beginning with timeLeft value
function countdown(timeLeft) {
    var timeLeft = document.getElementById("time").innerHTML;

// Countdown every 1 second, if time expires, set timer to 0, stop countdown, and end quiz
    intervalId = setInterval(function () {
        timeLeft--;
        document.getElementById("time").innerHTML = "" + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            document.getElementById("time").innerHTML = "0";
            end();
        }
    }, 1000);
};

// Subtracts 10 seconds from timer, stops countdown from start button click, sets timer with new value, begins countdown from new time
function subtractTime() {
    var timeLeft = document.getElementById("time").innerHTML -= 10;
    clearInterval(intervalId);
    document.getElementById("time").innerHTML = timeLeft;
    countdown();
};

// When quiz ends, clears screen and displays end section
function end() { 
    var unhideEnd = document.getElementById("end");
    unhideEnd.classList.remove("hidden");
    document.getElementById("question-title").innerHTML = "";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").innerHTML = "";

// Sets score to time left at end of quiz, displays score, and stops timer
    var score = document.getElementById("time");
    document.getElementById("final-score").textContent = score.textContent + "!";
    clearInterval(intervalId);
};

// Sets event listener for click on submit button for submitScore function
var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", submitScore);


function submitScore() {

// Creates empty array to push objects to and parses from local storage to return objects
    var scoresArr = JSON.parse(localStorage.getItem("score")) || [];

// Creates empty object to store score and initials
    var scoreObj = {};

// Sets variables to store score and initials from time left and user input
    var score = document.getElementById("time").textContent;
    var initials = document.getElementById("initials").value;

// Stores score and initials in scoreObj object
    scoreObj.score = score;
    scoreObj.initials = initials;

// Adds scoreObj to array as string in local storage
    scoresArr.push(scoreObj);
    localStorage.setItem("score", JSON.stringify(scoresArr));
    
// If no user input for initials, stops function
        if (!initials) {
            return;
        }
    
// Redirects to highscores page
    window.location.href = "scores.html";
};






