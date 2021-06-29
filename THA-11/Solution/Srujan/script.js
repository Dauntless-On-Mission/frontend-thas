const questions = [
    {
        question: 'What is the Japanese name for Attack on Titan?',
        answers :[
            { text: 'Shingeki no kyojin ', correct: true},
            { text: 'Jujutsu kaisen ', correct: false},
            { text: 'Kimi no nawa', correct: false},
            { text: 'Tenki no ko', correct: false},
        ],
    },
    {
        question: "What was Grisha Yeager's job?",
        answers: [
            { text: 'Soldier ', correct: false},
            { text: 'Politician', correct: false},
            { text: 'Scientist', correct: false},
            { text: 'Doctor', correct: true},
        ]
    },
    {
        question: "Who is female Titan?",
        answers: [
            { text: 'Sasha', correct: false},
            { text: 'Peick', correct: false},
            { text: 'Anni', correct: true},
            { text: 'Mikasa', correct: false},
        ]
    },
    {
        question: "Who is considered humanity's strongest soldier?",
        answers: [
            { text: 'Levi Ackerman ', correct: true},
            { text: 'Eren yeager', correct: false},
            { text: 'Mikasa Ackerman', correct: false},
            { text: 'Erwin Smith', correct: false},
        ]
    },
    {
        question: "What's the equipment used for grappling called?",
        answers: [
            { text: 'Grappling Equipment', correct: false},
            { text: 'Jumping Device', correct: false},
            { text: '3D maneuver Gear', correct: true},
            { text: 'Combat Travelling Gear', correct: false},
        ]
    }
]


const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const quesContainer = document.getElementById('ques-container');
const quesEle = document.getElementById('ques');
const answerBtn = document.getElementById('ans-btn');

let shuffledQues, currentQuesIndex;

startBtn.addEventListener('click', startGame);

nextBtn.addEventListener('click', () => {
  currentQuesIndex++;
  setNextQuestion();
})

function startGame() {
  startBtn.classList.add('hide');
  shuffledQues = questions.sort(() => Math.random() - .5);
  currentQuesIndex = 0;
  quesContainer.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQues[currentQuesIndex]);
}

function showQuestion(question) {
  quesEle.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerBtn.appendChild(button);
  })
}

function resetState() {
  clearStatus(document.body);
  nextBtn.classList.add('hide');
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  Array.from(answerBtn.children).forEach(button => {
    setStatus(button, button.dataset.correct);
  })

  if (shuffledQues.length > currentQuesIndex + 1) {
    nextBtn.classList.remove('hide');
  } else {
      startBtn.classList.remove('hide');
      startBtn.innerText = 'Restart';
  }
}

function setStatus(element, correct) {
  clearStatus(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatus(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}