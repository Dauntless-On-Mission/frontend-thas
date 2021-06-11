let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText);
        if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

// document.addEventListener('keydown', function(e) {
//     if (e.buttons == 65) {
//         document.getElementById('audio').onplay();
//     }
// })

// var audio = document.getElementById("audio");
// function bell(){
//     audio.onplay();
    
// }