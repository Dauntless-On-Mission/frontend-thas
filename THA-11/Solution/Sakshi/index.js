const questions = [    
    {
    
    question: "What is 10 + 20?",
    answers: ["23","25","28","30"],
    correct: "30"
    },
    
    {
    
    question: "How many days are in week?", 
    answers: ["5","6","7","8"],
    correct: "7"
    },
    
    {
    
     question: "A year consists of how many months?",
     answers: ["9","10","11","12"],
     correct: "12"
    },
    
    {
    
     question: "How many days are in a year?", 
     answers: ["365","366","367","368"],
     correct: "365"
    },
    ]
     
    const btn = document.getElementsByClassName("btn")
    const btns_wrapper = document.getElementById("btns-wrapper");
    const qtn = document.getElementById("question");
    let i=0;
    const start_btn = document.getElementById("start-btn");
    const content = document.getElementById("wrapper");
    let qtn_count = document.getElementById("qtn-count");
    let max_qtn = document.getElementById("max-qtn")
    let score = document.getElementById("score");
    let max_score = document.getElementById("max-score");
    let isCorrect = false;
    
    start_btn.addEventListener("click" , ()=> {
        content.style.display = "block";
        start_btn.style.display = "none";
        score.textContent = 0;
        qtn.textContent = questions[i].question;
        qtn_count.textContent = 1;
        max_qtn.textContent = questions.length;
        max_score.textContent = questions.length;
    
        btn[0].textContent = questions[0].answers[0];
        btn[1].textContent = questions[0].answers[1];
        btn[2].textContent = questions[0].answers[2];
        btn[3].textContent = questions[0].answers[3];
    });
       
    btns_wrapper.addEventListener("click" , (e)=> {
    
        if (e.target.tagName === "BUTTON") {  
            if (e.target.innerText === questions[i].correct.toString()) {;		
            isCorrect = true;
            checkAnswer(e.target);   
            score.textContent++;    
            }
            else {
               isCorrect = false;	
               checkAnswer(e.target);    
                
            } 
            i++;
            
            btns_wrapper.style.pointerEvents = "none";    
    
            setTimeout(function () {
                btns_wrapper.style.pointerEvents = "auto";  
            },1500)
    
            setTimeout(function() {  
                if (i >= questions.length) {
                    alert(`You got ${score.textContent} answers right out of ${questions.length} questions`);  
                    reset();
                }
                qtn.textContent = questions[i].question;
    
                btn[0].textContent = questions[i].answers[0];
                btn[1].textContent = questions[i].answers[1];
                btn[2].textContent = questions[i].answers[2];
                btn[3].textContent = questions[i].answers[3];	
                qtn_count.textContent++;
    
                },1500)
            }     
    });
    
    function checkAnswer(obj){
       let original = obj.style.backgroundColor;
    
       if (isCorrect) {
          obj.style.backgroundColor = 'green';
       }   
       else {
          obj.style.backgroundColor = 'red';  
       }   
       setTimeout(function(){
            obj.style.backgroundColor = original;
       }, 1500);
    }

    function reset() {
    i = 0;
    score.textContent = 0;
    score.textContent = 0;	
    content.style.display = "none";
    start_btn.style.display = "block";
    }