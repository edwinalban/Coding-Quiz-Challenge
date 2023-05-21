var startBtn = document.getElementById("start");
startBtn.addEventListener("click", displayQuestions);

function displayQuestions() {

    var hideHome = document.querySelector(".home-wrapper");

    hideHome.setAttribute("class", "hidden");

    var questionIndex = Math.floor(Math.random() * questionsArr.length);
    var currentQuestion = questionsArr[questionIndex];

    makeOL(currentQuestion);
    toggleHidden();
};

function makeOL(currentQuestion) {

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

// add function to toggle class hidden and display question on click
function toggleHidden() {

    var showHidden = document.querySelector(".hidden");

    if (showHidden.style.display === "none") {
        showHidden.style.display = "flex";
    } else {
        showHidden.style.display = "none";
    }
}
