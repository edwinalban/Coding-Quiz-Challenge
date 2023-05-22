var startBtn = document.getElementById("start");
startBtn.addEventListener("click", displayQuestions);
var questionIndex = 0;

function displayQuestions() {
    var hideHome = document.querySelector(".home-wrapper");
    hideHome.classList.add("hidden");

    var questionIndex = Math.floor(Math.random() * questionsArr.length);

    makeOL(questionsArr[questionIndex]);
    questionsArr.splice(questionIndex, 1);
};

function makeOL(currentQuestion) {

    var questionSection = document.querySelector(".coding-questions");
    questionSection.classList.remove("hidden");

    var questionTitle = document.getElementById("question-title");
    document.getElementById("question-title").textContent = currentQuestion.question;
    
    var list = document.createElement('ol');

    document.getElementById("answers").innerHTML = "";

        for (var i = 0; i < currentQuestion.choices.length; i++) {
            
            var item = document.createElement('li');
            
            item.appendChild(document.createTextNode(currentQuestion.choices[i]));

            item.addEventListener("click", function() {
                
                var result = document.querySelector(".result");
                var resultSection = document.getElementById("result")

                resultSection.classList.remove("hidden");

                if (this.textContent == currentQuestion.answer) {
                    result.textContent = "Correct!";
                } else {
                    result.textContent = "Incorrect!";
                    subtractTime();
                }

                questionIndex++;
                displayQuestions();
            });
            list.appendChild(item);
        }

    document.getElementById("answers").appendChild(list);
}

startBtn.addEventListener("click", countdown);

var intervalId;

function countdown(timeLeft) {
    var timeLeft = document.getElementById("time").innerHTML;
    intervalId = setInterval(function () {
        timeLeft--;
        document.getElementById("time").innerHTML = "" + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            document.getElementById("time").innerHTML = "0";
        }
    }, 1000);
};

function subtractTime() {

    var timeLeft = document.getElementById("time").innerHTML -= 10;
    clearInterval(intervalId);
    document.getElementById("time").innerHTML = timeLeft;
    countdown();
};






