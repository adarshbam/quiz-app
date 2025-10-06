const highestScoreDOM = document.querySelector(".highest-score");
const noOfQuestionsDOM = document.querySelector(".no-of-questions");

highestScoreDOM.textContent = localStorage.getItem("highest-score") || 15;
noOfQuestionsDOM.textContent = localStorage.getItem("no-of-questions") || 25;
