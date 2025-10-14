import questions from "./questions.js";

const questionDOM = document.querySelector(".question");
const quizNoDOM = document.querySelector(".quiz-no");
const noOfQuestionsDOM = document.querySelector(".no-of-questions");
const optionsDOM = document.querySelector(".options");
const timerDOM = document.querySelector(".timer");
const nextDOM = document.querySelector(".next");

const tickingAudio = document.querySelector(".ticking");
const correctAudio = document.querySelector(".correct-audio");
const wrongAudio = document.querySelector(".wrong-audio");

const bgAudio = document.querySelector(".bg-audio");

const audioControlsBtn = document.querySelector(".speaker-imgs");

// All 25 questions (randomized order)
let quizData = JSON.parse(localStorage.getItem("quiz-data")) || {
  muted: false,
  "quiz-no": 1,
  "correct-answers": 0,
  "highest-score": localStorage.getItem("highest-score") || 0,
  "bg-music-time": 0,
};

let question = questions[quizData["quiz-no"] - 1];

function generateOptions() {
  optionsDOM.innerHTML = ``;

  question.options
    .sort(() => Math.random() - 0.5)
    .forEach((option) => {
      let optionElement = document.createElement("div");
      optionElement.classList.add("option");
      if (option.correct) optionElement.classList.add("correct-option");
      optionElement.innerHTML = `<p class="option-text">${option.option}</p>
      <div class="msg">
        <span class="wrong-text">You choose</span
        ><span
          ><img
            class="correct-img"
            src="./images/correct.svg"
            alt="correct" />
          <img class="wrong-img" src="./images/wrong.svg" alt="wrong"
        /></span>
      </div>`;
      optionsDOM.append(optionElement);
    });
}

let pauseTimer = false;

function nextQuestion() {
  quizData["bg-music-time"] = Math.floor(bgAudio.currentTime);

  if (quizData["quiz-no"] == questions.length) {
    nextDOM.href = "result.html";
    nextDOM.click();
  }

  if (quizData["quiz-no"] <= questions.length) {
    quizData["quiz-no"]++;
    question = questions[quizData["quiz-no"] - 1];

    console.log(question, quizData["quiz-no"]);
    quizNoDOM.textContent = quizData["quiz-no"];

    timer = question.durationToAnswer;
    pauseTimer = false;

    let mins = String(Math.floor(timer / 60)).padStart(2, "0");
    let secs = String(timer % 60).padStart(2, "0");

    timerDOM.textContent = `${mins}:${secs}`;

    questionDOM.innerHTML = question.question;
    generateOptions();
  }
  localStorage.setItem("quiz-data", JSON.stringify(quizData));
}

function playSound(sound) {
  console.log(sound, quizData.muted);
  if (!quizData.muted) {
    sound.play();

    setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
      console.log("pause");
    }, 1500);
  }
}

bgAudio.currentTime = quizData["bg-music-time"] || 0;

if (!quizData.muted) bgAudio.play();
else {
  audioControlsBtn.classList.add("muted");
}

questionDOM.innerHTML = question.question;
quizNoDOM.textContent = quizData["quiz-no"];
noOfQuestionsDOM.textContent = questions.length;

audioControlsBtn.addEventListener("click", () => {
  audioControlsBtn.classList.toggle("muted");
  quizData.muted = !quizData.muted;
  if (quizData.muted) bgAudio.pause();
  else bgAudio.play();
  console.log(quizData.muted);
});

let timer = question.durationToAnswer;

timerDOM.textContent = `${String(Math.floor(timer / 60)).padStart(
  2,
  "0"
)}:${String(timer % 60).padStart(2, "0")}`;

let halfTimerPlayer = false;
let lowTimerPlayed = false;

generateOptions();

const countDown = setInterval(() => {
  if (!pauseTimer) {
    if (timer == 1) {
      nextQuestion();
    }

    if (
      !halfTimerPlayer &&
      timer < Math.floor(question.durationToAnswer / 2) + 1
    ) {
      playSound(tickingAudio);
      document.documentElement.style.setProperty(
        "--accent-color",
        "197, 190, 0"
      );
      halfTimerPlayer = true;
    }
    if (!lowTimerPlayed && timer < 11) {
      playSound(tickingAudio);
      document.documentElement.style.setProperty(
        "--accent-color",
        "197, 12, 0"
      );
      lowTimerPlayed = true;
    }

    timer--;
    let mins = String(Math.floor(timer / 60)).padStart(2, "0");
    let secs = String(timer % 60).padStart(2, "0");

    timerDOM.textContent = `${mins}:${secs}`;
  }
}, 1000);

optionsDOM.addEventListener("click", (e) => {
  const option = e.target.closest(".option");

  // If the click wasn't inside an .option or already answered, stop
  if (!option) return;

  if (option.classList.contains("correct-option")) {
    option.classList.add("correct");
    quizData["correct-answers"]++;
    localStorage.setItem("quiz-data", JSON.stringify(quizData));

    playSound(correctAudio);

    console.log(quizData);
  } else {
    console.log([...optionsDOM.children]);
    let correctElement = [...optionsDOM.children].filter((option) =>
      option.classList.contains("correct-option")
    )[0];

    correctElement.classList.add("correct");
    option.classList.add("wrong");

    playSound(wrongAudio);
  }
  pauseTimer = true;
});

nextDOM.addEventListener("click", nextQuestion);
