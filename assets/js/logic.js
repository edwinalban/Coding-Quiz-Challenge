var questionTitle = document.getElementById("question-title");
// var answers = document.getElementById("answers");

document.getElementById("question-title").textContent = questionsArr[0].question1;
// document.getElementById("answers").textContent = questionsArr[0].choices;

function makeOL(questionsArr) {
    var list = document.createElement('ol');

        for (var i = 0; i < questionsArr.length; i++) {
            var item = document.createElement('li');
            
            item.appendChild(document.createTextNode(array[i]));

            list.appendChild(item);
        }
    return list;
}

document.getElementById("answers").appendChild(makeOL(questionsArr[0]));

console.log(questionTitle);
console.log(list);

