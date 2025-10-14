import questions from "./questions.js";

const correctAnswersDOM = document.querySelector(".correct-answers");
const noOfQuestionsDOM = document.querySelector(".no-of-questions");
const correctLabelDOM = document.querySelector(".correct-per");
const wrongLabelDOM = document.querySelector(".wrong-per");
const finalMsgDOM = document.querySelector(".result-msg");
const pieChart = document.querySelector(".pie-chart");

const reset = document.querySelector(".retry");

const quizData = JSON.parse(localStorage.getItem("quiz-data"));

const aceVideo = document.querySelector(".ace-video");
const aceAudio1 = document.querySelector(".ace-audio-1");
const aceAudio2 = document.querySelector(".ace-audio-2");

const correctAnswers = quizData["correct-answers"] || 0;
const noOfQuestions = questions.length;

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

pieChart.title = `Correct: ${correctPercentage}% | Incorrect: ${
  100 - correctPercentage
}%`;

// Loop through the scoreMsgs keys to find the right message
for (let key in scoreMsgs) {
  if (correctPercentage <= key) {
    console.log(correctPercentage, key);
    finalMsgDOM.textContent = scoreMsgs[key];
    break;
  }
}

if (correctPercentage > 90) {
  aceVideo.classList.remove("hidden");
  aceVideo.play();

  document.body.style.color = "white";
  document.body.style.textShadow = "0 4px 4px rgba(0,0,0.1)";

  document.body.padding = "0";
  aceAudio1.play();
  setTimeout(() => {
    aceAudio2.play();
  }, 4000);

  setInterval(() => {
    aceAudio1.play();
    setTimeout(() => {
      aceAudio2.play();
    }, 4000);
  }, 6000);
}

let correctCount = 0;
const correctTimer = setInterval(() => {
  console.log(correctPercentage);
  if (correctCount > correctPercentage - 2) clearInterval(correctTimer);
  correctCount++;

  document.documentElement.style.setProperty(
    "--correct",
    `${correctCount - 0.5}%`
  );
}, 20);

let incorrectCount = 0;
const incorrectTimer = setInterval(() => {
  console.log(100 - correctPercentage);
  if (incorrectCount > 98 - correctPercentage) clearInterval(incorrectTimer);
  incorrectCount++;

  document.documentElement.style.setProperty(
    "--incorrect",
    `${incorrectCount}%`
  );
}, 10);

reset.addEventListener("click", () => {
  quizData["quiz-no"] = 1;
  quizData["correct-answers"] = 0;

  localStorage.setItem("quiz-data", JSON.stringify(quizData));
});

export {
  correctAnswers as score,
  noOfQuestions as total,
  correctPercentage as percent,
};
