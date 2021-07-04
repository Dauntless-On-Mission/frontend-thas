const boxes = document.querySelectorAll('.container .box');

const colors = ["#00008B","#00611C","#009933","#ffcc00","#99004d","#993366","#9900cc","#009999","#e699ff","#e600e6","#9CCB19","#800080","#993333","#8B2252","	#8B5A2B"];
const noOfColors = colors.length;
const noOfBoxes = boxes.length;

var clickedElements = [];

function assignIndexToBox(box, i){
    /** index as the box number */
    /*box.innerText = i;*/
    box.id = i;
}

function assignColorToBox(box, i){
    /** giving each color twice */
    if(i >= noOfColors){
        box.style.backgroundColor = colors[i-noOfColors];
    }else{
        box.style.backgroundColor = colors[i];
    }
}

function randomizeColor(box){
    /** randomize colors using order property of flexbox  */
    box.style.order = parseInt(Math.random()*noOfBoxes);
}

function freezeBoxes(){
    var box1ID = clickedElements[0].id;
    var box2ID = clickedElements[1].id;

    var box1 = document.getElementById(box1ID);
    var box2 = document.getElementById(box2ID);

    box1.classList.add('freeze');
    box2.classList.add('freeze');
}

function hideThemAfterSomeTime(){
    setTimeout(function(){
        var box1ID = clickedElements[0].id;
        var box2ID = clickedElements[1].id;
    
        var box1 = document.getElementById(box1ID);
        var box2 = document.getElementById(box2ID);
    
        box1.classList.add('hideColor');
        box2.classList.add('hideColor');
        clickedElements = [];
    }, 500);
}

function checkIfGameFinished(){

    if(document.querySelectorAll('.freeze').length == noOfBoxes){
        setTimeout(function(){
            alert('YaY! you finished the game');
            window.location.reload();
        }, 100);
    }
}

function handleBoxClick(){
    if(this.classList.contains('freeze') == false){
        
        this.classList.remove('hideColor');
 
        var obj = {id: this.id, color: this.style.backgroundColor};
        clickedElements.push(obj);
    
        console.log(clickedElements);
        if(clickedElements.length == 2){
            if(clickedElements[0].color == clickedElements[1].color){
                console.log('you clicked 2 same colors');
                freezeBoxes();
                clickedElements = [];
            }else{
                console.log('you clicked 2 different colors');
                hideThemAfterSomeTime();
            }
        }
        checkIfGameFinished();
    }   
}

function gameStart(){
    for(var i=0; i < noOfBoxes; i++){
        
        assignIndexToBox(boxes[i], i);

        assignColorToBox(boxes[i], i);

        randomizeColor(boxes[i]); 

        /** attach click listener */
        boxes[i].addEventListener('click', handleBoxClick);
    }
}

gameStart();