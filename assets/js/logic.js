// Set event listener for click on start button for displayQuestions function
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", displayQuestions);

// Set question index position for randomly generated question
var questionIndex = 0;

// Hide welcome screen, generate random question from array, display question/choices, and remove question from index once selected
function displayQuestions() {
    var hideHome = document.querySelector(".home-wrapper");
    hideHome.classList.add("hidden");

    var questionIndex = Math.floor(Math.random() * questionsArr.length);

    makeOL(questionsArr[questionIndex]);
    questionsArr.splice(questionIndex, 1);
};

// Create ordered list and append to coding questions div
function makeOL(currentQuestion) {

// Display div for question/choices
    var questionSection = document.querySelector(".coding-questions");
    questionSection.classList.remove("hidden");

// Set title of page as question asked
    var questionTitle = document.getElementById("question-title");
    document.getElementById("question-title").textContent = currentQuestion.question;
    
    var list = document.createElement('ol');

// Clear choices from screen each time makeOL function is called
    document.getElementById("answers").innerHTML = "";

// Create list items for choices and append to ordered list
        for (var i = 0; i < currentQuestion.choices.length; i++) {
            
            var item = document.createElement('li');

// Display choices from array per question
            item.appendChild(document.createTextNode(currentQuestion.choices[i]));

// Set event listener for click on choices in list
            item.addEventListener("click", function() {

// If questions array is empty, end quiz
                if (questionsArr.length == 0) {
                    end();
                    return;
                }

// Display feedback for correct/incorrect answer based on user choice
                var result = document.querySelector(".result");
                var resultSection = document.getElementById("result");

                resultSection.classList.remove("hidden");

                if (this.textContent == currentQuestion.answer) {
                    result.textContent = "Correct!";
                } else {
                    result.textContent = "Incorrect!";

// Initiate time penalty for incorrect user choice
                    subtractTime();
                }

// Display next question
                questionIndex++;
                displayQuestions();
            });

// Append list items to ordered list
            list.appendChild(item);
        }

// Append ordered list to answers div
    document.getElementById("answers").appendChild(list);
};

// Set event listener for click on start button for countdown function
startBtn.addEventListener("click", countdown);

// Set variable to store ID for setInterval
var intervalId;

// Start timer countdown on start button click, beginning with timeLeft value
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

// Subtract 10 seconds from timer, stop countdown from start button click, set timer with new value, begin countdown from new time
function subtractTime() {
    var timeLeft = document.getElementById("time").innerHTML -= 10;
    clearInterval(intervalId);
    document.getElementById("time").innerHTML = timeLeft;
    countdown();
};

// When quiz ends, clear screen and display end section
function end() { 
    var unhideEnd = document.getElementById("end");
    unhideEnd.classList.remove("hidden");
    document.getElementById("question-title").innerHTML = "";
    document.getElementById("answers").innerHTML = "";

// Set score to time left at end of quiz, display score, and stop timer
    var score = document.getElementById("time");
    document.getElementById("final-score").textContent = score.textContent + "!";
    clearInterval(intervalId);
};

// Set event listener for click on submit button for submitScore function
var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", submitScore);


function submitScore() {

// Create empty array to push objects to and parse from local storage to return objects
    var scoresArr = JSON.parse(localStorage.getItem("score")) || [];

// Create empty object to store score and initials
    var scoreObj = {};

// Set variables to store score and initials from time left and user input
    var score = document.getElementById("time").textContent;
    var initials = document.getElementById("initials").value;

// Store score and initials in scoreObj object
    scoreObj.score = score;
    scoreObj.initials = initials;

// Add scoreObj to array as string
    scoresArr.push(scoreObj);
    localStorage.setItem("score", JSON.stringify(scoresArr));
    
// If no user input for initials, stop function
        if (!initials) {
            return;
        }
    
// Redirect to highscores page
    window.location.href = "scores.html";
};






