var startBtn = document.getElementById("start");
startBtn.addEventListener("click", displayQuestions);

function displayQuestions() {

    var hideHome = document.querySelector(".home-wrapper");
    hideHome.classList.add("hidden");

    var questionIndex = Math.floor(Math.random() * questionsArr.length);
    var currentQuestion = questionsArr[questionIndex];

    makeOL(currentQuestion);
};

function makeOL(currentQuestion) {

    var questionSection = document.querySelector(".coding-questions");
    questionSection.classList.remove("hidden");

    var questionTitle = document.getElementById("question-title");
    document.getElementById("question-title").textContent = currentQuestion.question;
    
    var list = document.createElement('ol');
   
        for (var i = 0; i < currentQuestion.choices.length; i++) {
            console.log(currentQuestion.choices[i]);
            var item = document.createElement('li');
            
            item.appendChild(document.createTextNode(currentQuestion.choices[i]));

            list.appendChild(item);
        }

    document.getElementById("answers").appendChild(list);
}

startBtn.addEventListener("click", countdown);

var timer = document.getElementById("time");

function countdown() {
    var timeLeft = 75;
// need set interval
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timer.textContent = timeLeft;
            timeLeft--; 
        } else {
            timer.textContent = '0';
            clearInterval(timeInterval);
            // displayMessage();
        }
    }, 1000);
}

// need splice to remove questions that have already been answered

// can i select li with querySelectorAll, set items as targets and once clicked, compare choices to 
// answerIndex value in array
