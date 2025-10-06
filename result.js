const correctAnswersDOM = document.querySelector(".correct-answers");
const noOfQuestionsDOM = document.querySelector(".no-of-questions");

const correctAnswers = Number(localStorage.getItem("highest-score")) || 15;
const noOfQuestions = Number(localStorage.getItem("no-of-questions")) || 25;
const highestScore = Number(localStorage.getItem("correct-answers")) || 15;

correctAnswersDOM.textContent = correctAnswers;
noOfQuestionsDOM.textContent = noOfQuestions;

highestScore < correctAnswers &&
  localStorage.setItem("highest-score", correctAnswers);
