// on submit button click add new high score to ol
addRecord();

function addRecord() {
    var recordScores = JSON.parse(localStorage.getItem("score"));
    var list = document.getElementById("scores-list")

    for (var i = 0; i < recordScores.length; i++) {
    var item = document.createElement('li');

    item.textContent = `Player: ${recordScores[i].initials} Score: ${recordScores[i].score}`;

    list.appendChild(item);
    };
};

var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", clearRecords);

function clearRecords() {
    var records = document.getElementById("scores-list");
    records.innerHTML = "";
    localStorage.clear();
};
