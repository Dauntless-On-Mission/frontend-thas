const btn  = document.getElementById('dis');
const disMeme = document.querySelector('.container');

async function getData() {
    const res = await fetch('https://meme-api.herokuapp.com/gimme')
    const data = await res.json()
    return data.preview.pop();
}

btn.addEventListener('click', async () => {
    let response = getData();
    let dataFetched = await response;
    disMeme.innerHTML = "<img src='"+ dataFetched +"' class='container-image' />";
})