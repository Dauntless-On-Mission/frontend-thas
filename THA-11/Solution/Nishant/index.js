// Question taken from 
// https://www.javatpoint.com/javascript-mcq
// q7C, 15B, 16D, 18D, 22B

let data = [
{
    QuestionNo: "Question-1",
    Question: "The function and var are known as: ",
    A: "Keywords",   
    B: "Data types",
    C: "Declaration statements",
    D: "Prototypes",

    Ans: "Declaration statements"
},

{
    QuestionNo: "Question-2",
    Question: "Which of the following variables takes precedence over the others if the names are the same?",
    A: "Global variable",      
    B: "The local element",
    C: "The two of the above",
    D: "None of the above",
    
    Ans: "The local element"
},

{
    QuestionNo: "Question-3",
    Question: "Which one of the following is the correct way for calling the JavaScript code?",
    A: "Preprocessor",         
    B: "Triggering Event",
    C: "RMI",
    D: "Function/Method",

    Ans: "Function/Method"
},

{
    QuestionNo: "Question-4",
    Question: "Which of the following option is used as hexadecimal literal beginning?",
    A: "00",
    B: "0x",
    C: "0X",
    D: "Both 0x and 0X",
    
    Ans: "Both 0x and 0X"
},

{
    QuestionNo: "Question-5",
    Question: "Which of the following number object function returns the value of the number?",
    A: "toString()",   
    B: "valueOf()",
    C: "toLocaleString()",
    D: "toPrecision()",
    
    Ans: "valueOf()"
}
];


const option = document.querySelectorAll('.opt')
const reset = document.querySelector(".reset");
const box = document.querySelector(".box");
const scorecard = document.querySelector(".score");
const start = document.querySelector(".start");


const queNo = document.querySelector(".questionNo");
const que = document.querySelector(".question");
const option1 = document.querySelector(".option-1");
const option2 = document.querySelector(".option-2");
const option3 = document.querySelector(".option-3");
const option4 = document.querySelector(".option-4");

let questionLoad = 0;
let score = 0;
scorecard.innerHTML = `Your Score: ${score}/5 `;


start.addEventListener('click', () => {
    start.style.display = "none";
    box.style.display = "flex";
    reset.style.display = "none";
    loadData();
})


function loadData() {
    let q = data[questionLoad];
    queNo.innerHTML = q.QuestionNo;
    que.innerHTML = q.Question;
    option1.innerHTML = q.A;
    option2.innerHTML = q.B;
    option3.innerHTML = q.C;
    option4.innerHTML = q.D;
}

// console.log(option);

option.forEach(item => {
    item.addEventListener('click', (e) => {
        
        // console.log(e.target);

        if(e.target.innerText === data[questionLoad].Ans.toString()) {
            color = true;
            score++;
            scorecard.innerHTML = `Your Score: ${score}/5 `;
            AsignColor(e.target);

        }
        else {
            color = false;
            scorecard.innerHTML = `Your Score: ${score}/5 `;
            AsignColor(e.target);
        }

        box.style.pointerEvents = "none";
        setTimeout(() => {
            box.style.pointerEvents = "auto";
        }, 1500);

        questionLoad++;
        setTimeout(() => {
            loadData()
        }, 1500);

        setTimeout(() => {
            if(questionLoad >= 5) {
                reset.style.display = "block";
            }
        }, 1500);
    })
});


function AsignColor(value) {
    let defaultColor = value.style.backgroundColor;
    if(color) {
        value.style.backgroundColor = "green";
    }
    else {
        value.style.backgroundColor = "red";
    }

    setTimeout(() => {
        value.style.backgroundColor = defaultColor;
    }, 1500);
}

reset.addEventListener('click', () => {
    start.style.display = "block";
    box.style.display = "none";
    questionLoad = 0;
    score = 0;
    scorecard.innerHTML = `Your Score: ${score}/5 `;
});