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
let questions = [
  {
    question: "Which company developed JavaScript?",
    durationToAnswer: 30,
    marks: 5,
    options: [
      { correct: false, option: "Microsoft" },
      { correct: false, option: "Oracle" },
      { correct: false, option: "Google" },
      { correct: true, option: "Netscape" },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    durationToAnswer: 30,
    marks: 5,
    options: [
      { correct: true, option: "&lt;script&gt;" },
      { correct: false, option: "&lt;javascript&gt;" },
      { correct: false, option: "&lt;scripting&gt;" },
      { correct: false, option: "&lt;js&gt;" },
    ],
  },
  {
    question: "Which operator is used for strict equality (value and type)?",
    durationToAnswer: 30,
    marks: 4,
    options: [
      { correct: false, option: "=" },
      { correct: false, option: "==" },
      { correct: true, option: "===" },
      { correct: false, option: "!=" },
    ],
  },
  {
    question:
      "What is the output of the following code?<br><br>let a = '5';<br>let b = 5;<br>console.log(a + b);",
    durationToAnswer: 45,
    marks: 6,
    options: [
      { correct: false, option: "NaN" },
      { correct: true, option: "55" },
      { correct: false, option: "10" },
      { correct: false, option: "TypeError" },
    ],
  },
  {
    question:
      "Which array method creates a new array with results of calling a function on every element?",
    durationToAnswer: 30,
    marks: 4,
    options: [
      { correct: false, option: "reduce()" },
      { correct: true, option: "map()" },
      { correct: false, option: "forEach()" },
      { correct: false, option: "filter()" },
    ],
  },
  {
    question: "What prints?<br><br>console.log( '5' - 3 );",
    durationToAnswer: 45,
    marks: 6,
    options: [
      { correct: false, option: "NaN" },
      { correct: false, option: "'2'" },
      { correct: true, option: "2" },
      { correct: false, option: "53" },
    ],
  },
  {
    question: "Which method adds an item to the beginning of an array?",
    durationToAnswer: 30,
    marks: 3,
    options: [
      { correct: false, option: "slice()" },
      { correct: false, option: "splice()" },
      { correct: true, option: "unshift()" },
      { correct: false, option: "push()" },
    ],
  },
  {
    question: "Which keyword creates a constant whose value cannot be changed?",
    durationToAnswer: 30,
    marks: 4,
    options: [
      { correct: false, option: "static" },
      { correct: false, option: "let" },
      { correct: true, option: "const" },
      { correct: false, option: "var" },
    ],
  },
  {
    question:
      "What is the output?<br><br>const a = [1,2];<br>const b = a;<br>b.push(3);<br>console.log(a.length);",
    durationToAnswer: 60,
    marks: 8,
    options: [
      { correct: false, option: "Error" },
      { correct: false, option: "Undefined" },
      { correct: false, option: "2" },
      { correct: true, option: "3" },
    ],
  },
  {
    question: "Which built-in method rounds a number to the nearest integer?",
    durationToAnswer: 30,
    marks: 3,
    options: [
      { correct: true, option: "Math.round()" },
      { correct: false, option: "parseInt()" },
      { correct: false, option: "toFixed()" },
      { correct: false, option: "Math.floor()" },
    ],
  },
  {
    question:
      "What keyword is used to create a function in JavaScript (classic syntax)?",
    durationToAnswer: 30,
    marks: 3,
    options: [
      { correct: false, option: "fn" },
      { correct: true, option: "function" },
      { correct: false, option: "fun" },
      { correct: false, option: "def" },
    ],
  },
  {
    question:
      "Output of this snippet?<br><br>for (let i=0;i<3;i++){<br>  setTimeout(()=> console.log(i), 0);<br>}",
    durationToAnswer: 60,
    marks: 8,
    options: [
      { correct: false, option: "0<br>0<br>0" },
      { correct: false, option: "3<br>3<br>3" },
      { correct: false, option: "Error" },
      { correct: true, option: "0<br>1<br>2" },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript (single-line)?",
    durationToAnswer: 30,
    marks: 3,
    options: [
      { correct: false, option: "<!-- -->" },
      { correct: true, option: "//" },
      { correct: false, option: "#" },
      { correct: false, option: "/* */" },
    ],
  },
  {
    question: "What is printed?<br><br>console.log([...'abc']);",
    durationToAnswer: 45,
    marks: 6,
    options: [
      { correct: false, option: "a b c" },
      { correct: true, option: "[ 'a', 'b', 'c' ]" },
      { correct: false, option: "['abc']" },
      { correct: false, option: "Error" },
    ],
  },
  {
    question: "What does DOM stand for in web development?",
    durationToAnswer: 30,
    marks: 4,
    options: [
      { correct: false, option: "Dynamic Object Model" },
      { correct: true, option: "Document Object Model" },
      { correct: false, option: "Document Oriented Model" },
      { correct: false, option: "Data Object Model" },
    ],
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    durationToAnswer: 30,
    marks: 5,
    options: [
      { correct: false, option: "Object.parse()" },
      { correct: false, option: "toObject()" },
      { correct: true, option: "JSON.parse()" },
      { correct: false, option: "JSON.stringify()" },
    ],
  },
  {
    question:
      "Tricky: what does this produce?<br><br>console.log(typeof null);",
    durationToAnswer: 45,
    marks: 6,
    options: [
      { correct: false, option: "error" },
      { correct: false, option: "undefined" },
      { correct: true, option: "object" },
      { correct: false, option: "null" },
    ],
  },
  {
    question: "What is the output?<br><br>console.log(typeof NaN);",
    durationToAnswer: 45,
    marks: 6,
    options: [
      { correct: true, option: "number" },
      { correct: false, option: "object" },
      { correct: false, option: "NaN" },
      { correct: false, option: "undefined" },
    ],
  },
  {
    question:
      "Which keyword shows the developer a value for debugging in the console?",
    durationToAnswer: 30,
    marks: 3,
    options: [
      { correct: false, option: "alert()" },
      { correct: false, option: "print()" },
      { correct: true, option: "console.log()" },
      { correct: false, option: "debug()" },
    ],
  },
  {
    question:
      "How do you declare a variable in modern JavaScript (block-scoped)?",
    durationToAnswer: 30,
    marks: 4,
    options: [
      { correct: false, option: "var" },
      { correct: true, option: "let" },
      { correct: false, option: "dim" },
      { correct: false, option: "define" },
    ],
  },
  {
    question:
      "Output of this 'add 10' question:<br><br>let x = 10;<br>function addTen(y){<br>  return y + 10;<br>}<br>console.log(addTen(x));",
    durationToAnswer: 45,
    marks: 6,
    options: [
      { correct: false, option: "1010" },
      { correct: false, option: "10" },
      { correct: false, option: "undefined" },
      { correct: true, option: "20" },
    ],
  },
  {
    question:
      "Which event triggers when a page finishes loading in the browser?",
    durationToAnswer: 30,
    marks: 4,
    options: [
      { correct: true, option: "onload" },
      { correct: false, option: "onclick" },
      { correct: false, option: "onchange" },
      { correct: false, option: "onready" },
    ],
  },
  {
    question: "How do you add an element to the end of an array?",
    durationToAnswer: 30,
    marks: 3,
    options: [
      { correct: false, option: "shift()" },
      { correct: false, option: "unshift()" },
      { correct: true, option: "push()" },
      { correct: false, option: "pop()" },
    ],
  },
  {
    question: "What does this print?<br><br>console.log(0 == '');",
    durationToAnswer: 45,
    marks: 6,
    options: [
      { correct: false, option: "false" },
      { correct: false, option: "undefined" },
      { correct: false, option: "TypeError" },
      { correct: true, option: "true" },
    ],
  },
];

let quizData = JSON.parse(localStorage.getItem("quiz-data")) || {
  muted: false,
  "quiz-no": 1,
  "correct-answers": 0,
  "no-of-questions": questions.length,
  "highest-score": localStorage.getItem("highest-score") || 0,
};

let question = questions[quizData["quiz-no"] - 1];

function nextQuestion() {
  if (quizData["quiz-no"] < questions.length) {
    quizData["quiz-no"]++;
    window.location.reload();
  } else {
    nextDOM.href = "result.html";
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

bgAudio.play();

questionDOM.innerHTML = question.question;
quizNoDOM.textContent = quizData["quiz-no"];
noOfQuestionsDOM.textContent = questions.length;

question.options.forEach((option) => {
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

const countDown = setInterval(() => {
  if (timer == 1) {
    nextQuestion();
  }

  if (
    !halfTimerPlayer &&
    timer < Math.floor(question.durationToAnswer / 2) + 1
  ) {
    playSound(tickingAudio);
    document.documentElement.style.setProperty("--accent-color", "197, 190, 0");
    halfTimerPlayer = true;
  }
  if (!lowTimerPlayed && timer < 11) {
    playSound(tickingAudio);
    document.documentElement.style.setProperty("--accent-color", "197, 12, 0");
    lowTimerPlayed = true;
  }

  timer--;
  let mins = String(Math.floor(timer / 60)).padStart(2, "0");
  let secs = String(timer % 60).padStart(2, "0");

  timerDOM.textContent = `${mins}:${secs}`;
}, 1000);

let firstTime = true;
optionsDOM.addEventListener("click", (e) => {
  const option = e.target.closest(".option");

  // If the click wasn't inside an .option or already answered, stop
  if (!option || !firstTime) return;

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
  firstTime = false;
  clearInterval(countDown);
});

nextDOM.addEventListener("click", nextQuestion);
