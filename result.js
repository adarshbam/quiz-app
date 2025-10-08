const correctAnswersDOM = document.querySelector(".correct-answers");
const noOfQuestionsDOM = document.querySelector(".no-of-questions");
const correctLabelDOM = document.querySelector(".green");
const wrongLabelDOM = document.querySelector(".red");
const finalMsgDOM = document.querySelector(".result-msg");

const reset = document.querySelector(".retry");

const quizData = JSON.parse(localStorage.getItem("quiz-data"));

const correctAnswers = quizData["correct-answers"] || 0;
const noOfQuestions = quizData["no-of-questions"] || 20;

const highestScore = quizData["highest-score"] || 0;

const scoreMsgs = {
  30: "Keep learning, you can do better!", // 0 - 30%
  50: "Barely passing, but progress is progress!", // 30 - 50%
  70: "Average performance, keep improving!", // 50 - 70%
  90: "Excellent! You’re getting really good!", // 70 - 90%
  100: "You aced the exam and passed with flying colors!", // 90 - 100%
};

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

// Loop through the scoreMsgs keys to find the right message
for (let key in scoreMsgs) {
  if (correctPercentage <= key) {
    console.log(correctPercentage, key);
    finalMsgDOM.textContent = scoreMsgs[key];
    break;
  }
}

document.documentElement.style.setProperty(
  "--result-percentage",
  `${correctPercentage}%`
);

reset.addEventListener("click", () => {
  quizData["quiz-no"] = 1;
  quizData["correct-answers"] = 0;

  localStorage.setItem("quiz-data", JSON.stringify(quizData));
});
