export default [
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
    question: "Javascript is created by?",
    durationToAnswer: 30,
    marks: 5,
    options: [
      { correct: true, option: "Brendan Eich" },
      { correct: false, option: "Ryan Daul" },
      { correct: false, option: "Elon Musk" },
      { correct: true, option: "Bill Gates" },
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
    question: "What does this produce?<br><br>console.log(typeof null);",
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
