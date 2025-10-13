import questions from "./questions.js";

const highestScoreDOM = document.querySelector(".highest-score");
const noOfQuestionsDOM = document.querySelector(".no-of-questions");

const quizData = JSON.parse(localStorage.getItem("quiz-data"));

const bgAudio = document.querySelector(".bg-audio");
const bgVideo = document.querySelector(".bg-video");

console.log(quizData);
if (quizData) {
  console.log(quizData, highestScoreDOM, noOfQuestionsDOM);
  highestScoreDOM.textContent = quizData["highest-score"];
} else {
  highestScoreDOM.textContent = 0;
}

console.log(questions);
noOfQuestionsDOM.textContent = questions.length;

bgAudio.play();
bgVideo.play();
