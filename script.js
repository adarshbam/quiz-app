const highestScoreDOM = document.querySelector(".highest-score");
const noOfQuestionsDOM = document.querySelector(".no-of-questions");

const quizData = JSON.parse(localStorage.getItem("quiz-data"));
console.log(quizData);
if (quizData) {
  console.log(quizData, highestScoreDOM, noOfQuestionsDOM);
  highestScoreDOM.textContent = quizData["highest-score"];
  noOfQuestionsDOM.textContent = quizData["no-of-questions"];
} else {
  highestScoreDOM.textContent = 0;
  noOfQuestionsDOM.textContent = 25;
}
