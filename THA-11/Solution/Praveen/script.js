let quiz = [
  {
    Question: "Q1: Which planet in our solar system spins the fastest?",
    A: "Neptune",
    B: "Jupiter",
    C: "Earth",
    D: "Mercury",
    Ans: "ans4",
  },

  {
    Question:
      "Q2: Which of the following part of the Sun is visible to humans?",
    A: "Photosphere       ",
    B: "Corona            ",
    C: "Chromospheres     ",
    D: "Core              ",
    Ans: "ans1               ",
  },

  {
    Question: "Q3: Which is the deepest point from the sea level on the Earth?",
    A: "North Channel",
    B: "Pacific Ocean",
    C: "Mariana Trench",
    D: "Red Sea",
    Ans: "ans3",
  },

  {
    Question:
      "Q4:What is the time taken by the light of the Sun to reach the Earth?",
    A: "8 Minute",
    B: "9 Minute",
    C: "7 Minute 20 Second",
    D: "8 Minute 18 Second",
    Ans: "ans4",
  },

  {
    Question:
      "Q5: Which of the following planets in the Solar System takes the shortest revolution?",
    A: "Neptune",
    B: "Mars",
    C: "Mercury",
    D: "Venus",
    Ans: "ans3",
  },

  {
    Question: "Q6: Which planet in the Solar System has the highest density?",
    A: "Earth",
    B: "Uranus",
    C: "Neptune",
    D: "Jupiter",
    Ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
let showScore = document.querySelector("#showScore1");
let playAgain = document.querySelector("#playAgain1");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quiz[questionCount];

  question.innerText = questionList.Question;

  option1.innerText = questionList.A;
  option2.innerText = questionList.B;
  option3.innerText = questionList.C;
  option4.innerText = questionList.D;

  // question.innerText = quiz[0].Question;
  // console.log(quiz[0].Question);
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  console.log(quiz[questionCount].Ans);

  if (checkedAnswer === quiz[questionCount].Ans) {
    score++;
    console.log(score);
  }

  questionCount++;

  deselectAll();

  if (questionCount < quiz.length) {
    loadQuestion();
  } else {
    submit.style.visibility = "hidden";
    // let showScore = document.createElement("div")
    // let playAgain = document.createElement("div")
    showScore.innerHTML = `<h3 class="showScore">You Scored ${score}/${quiz.length} ✌ </h3>`;
    playAgain.innerHTML = `<button class="restart" onclick="location.reload()"> Play Again </button>`;
  }
});
