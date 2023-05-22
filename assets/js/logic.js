var startBtn = document.getElementById("start");
startBtn.addEventListener("click", displayQuestions);
var questionIndex = 0;

function displayQuestions() {
    var hideHome = document.querySelector(".home-wrapper");
    hideHome.classList.add("hidden");

    var questionIndex = Math.floor(Math.random() * questionsArr.length);

    console.log(questionsArr[questionIndex]);

    makeOL(questionsArr[questionIndex]);
    questionsArr.splice(questionIndex, 1);
};

function makeOL(currentQuestion) {

    var questionSection = document.querySelector(".coding-questions");
    questionSection.classList.remove("hidden");

    var questionTitle = document.getElementById("question-title");
    document.getElementById("question-title").textContent = currentQuestion.question;
    
    var list = document.createElement('ol');
   
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
                }

                questionDelay();
                questionIndex++;
                displayQuestions();
            });
            list.appendChild(item);
        }

    document.getElementById("answers").appendChild(list);
}

startBtn.addEventListener("click", countdown);

var timer = document.getElementById("time");

function countdown() {
    
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timer.textContent = timeLeft;
            timeLeft--; 
        } else {
            timer.textContent = '0';
            clearInterval(timeInterval);
            // displayMessage();
        };
    }, 1000);
};

function questionDelay() {

    var timeLeft = 1;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timeLeft--;
         } else {
            clearInterval(timeInterval);
            
            var liElement = document.getElementById("answers");
            console.log(liElement);
            liElement.classList.add("hidden");
        }

        if (questionsArr === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}




