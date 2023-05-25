// Adds record on page load
addRecord();

// On submit button click adds new high score to ol
function addRecord() {
    var recordScores = JSON.parse(localStorage.getItem("score"));
    var list = document.getElementById("scores-list")

// Creates list items/text content and appends to ordered list of scores
    for (var i = 0; i < recordScores.length; i++) {
    var item = document.createElement('li');

    item.textContent = `Player: ${recordScores[i].initials} Score: ${recordScores[i].score}`;

    list.appendChild(item);
    };
};

// Sets event listener for click on Clear Highscores button
var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", clearRecords);

// Clears records from local storage and highscores page
function clearRecords() {
    var records = document.getElementById("scores-list");
    records.innerHTML = "";
    localStorage.clear();
};


