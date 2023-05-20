var startBtn = document.getElementById("start");
startBtn.addEventListener("click", displayQuestions);

function displayQuestions() {

    for (var i =0; i < questionsArr; i++)
    var questionIndex = Math.floor(Math.random() * questionsArr.length);
    var currentQuestion = questionsArr[questionIndex];

    makeOL();
};

function makeOL(questionsArr) {
    var questionTitle = document.getElementById("question-title");

    document.getElementById("question-title").textContent = questionsArr.question;
    
    var list = document.createElement('ol');

        for (var i = 0; i < questionsArr.length; i++) {
            var item = document.createElement('li');
            
            item.appendChild(document.createTextNode(questionsArr[i]));

            list.appendChild(item);
        }
    return list;
}

document.getElementById("answers").appendChild(displayQuestions(questionsArr.choices));