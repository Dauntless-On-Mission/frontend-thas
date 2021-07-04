let quiz = [
  {
    Question: "Q1: How many time zones are there in Russia?",
    A: "12",
    B: "145",
    C: "14",
    D: "11",
    Ans: "ans4",
  },

  {
    Question:
      "Q2: Which football team is known as ‘The Red Devils’?",
    A: "Manchester United",
    B: "Arsenal",
    C: "Barcelona",
    D: "Japan",
    Ans: "ans1",
  },

  {
    Question: "Q3: Name Disney’s first film? ",
    A: "Luca",
    B: "Toy Story",
    C: "Snow White",
    D: "Ginie world",
    Ans: "ans3",
  },

  {
    Question:
      "Q4:Who invented the World Wide Web?",
    A: "Charles Babbage",
    B: "Tim martin",
    C: "Gueva Martin",
    D: "Tim Berners-Lee",
    Ans: "ans4",
  },

  {
    Question:
      "Q5: Where is Billie Eilish from?",
    A: "Canada",
    B: "Russia",
    C: "Los Angeles",
    D: "Delhi",
    Ans: "ans3",
  },

  {
    Question: "Q6: How many keys does a classic piano have?",
    A: "88",
    B: "87",
    C: "81",
    D: "110",
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
    innerHTML = `<h3 class="showScore">You Scored ${score}/${quiz.length} ✌ </h3>`;
    playAgain.innerHTML = `<button class="restart" onclick="location.reload()"> Play Again </button>`;
  }
});
