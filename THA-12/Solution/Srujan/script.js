const inp = document.querySelector('#input')
const addBtn = document.querySelector('#btn');
const toDo = document.querySelector('.todoItems')


let toDoEle = [];


addBtn.addEventListener('click', () => {
    
    let divData = document.createElement('input');
    divData.type = "checkbox";
    divData.className = "todoItem";
    divData.checked = true;
    toDo.appendChild(divData);


    let para = document.createElement('p');
    para.innerHTML = inp.value;
    toDo.appendChild(para);

    toDoEle.push(inp.value);

    toDoEle.forEach(() => {
        localStorage.setItem('data',JSON.stringify(toDoEle));
        localStorage.getItem('data');
    })

    inp.value = '';

    let btns = document.createElement('button');
    btns.className = 'btn1';
    btns.innerHTML = '&#10060';
    toDo.appendChild(btns); 

    btns.addEventListener('click', () => {
        divData.remove();
        para.remove();
        btns.remove();
    })
    
});
