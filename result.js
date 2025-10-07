const correctAnswersDOM = document.querySelector(".correct-answers");
const noOfQuestionsDOM = document.querySelector(".no-of-questions");
const correctLabelDOM = document.querySelector(".green");
const wrongLabelDOM = document.querySelector(".red");

const reset = document.querySelector(".retry");

const quizData = JSON.parse(localStorage.getItem("quiz-data"));

const correctAnswers = quizData["correct-answers"] || 0;
const noOfQuestions = quizData["no-of-questions"] || 20;
const highestScore = quizData["highest-score"] || 0;

console.log(quizData);

correctAnswersDOM.textContent = correctAnswers;
noOfQuestionsDOM.textContent = noOfQuestions;

if (highestScore < correctAnswers) {
  quizData["highest-score"] = correctAnswers;
  localStorage.setItem("quiz-data", JSON.stringify(quizData));
}

let correctPercentage = Math.floor((correctAnswers / noOfQuestions) * 100);
console.log(correctPercentage);

correctLabelDOM.textContent = `${correctPercentage}%`;
wrongLabelDOM.textContent = `${100 - correctPercentage}%`;

document.documentElement.style.setProperty(
  "--result-percentage",
  `${correctPercentage}%`
);

reset.addEventListener("click", () => {
  quizData["quiz-no"] = 1;
  quizData["correct-answers"] = 0;

  localStorage.setItem("quiz-data", JSON.stringify(quizData));
});
