let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screentext = '';

for(item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // console.log('button is', buttonText);

        if(buttonText == 'CE'){
            screentext = "";
            screen.value = screentext;
        }
        else if(buttonText == 'C'){
            screentext = screentext.substring(0, screentext.length-1);
            screen.value = screentext;
        }
        else if(buttonText == '=') {
            screen.value = eval(screentext);
            screentext = screen.value;
        }
        else {
            screentext += buttonText;
            screen.value = screentext;
        }

    });
}

