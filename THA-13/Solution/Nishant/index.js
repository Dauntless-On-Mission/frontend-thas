const box = document.querySelector('.box');
const next = document.querySelector('.clickMe');

const quotedata = document.querySelector('.quote');
const authordata = document.querySelector('.author');


next.addEventListener('click', () => {
    
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => {
            box.style.display = "flex";
            let author = data.author;
            let quote = data.content;
            // console.log(author);
            // console.log(quote);
            quotedata.innerHTML = quote;
            authordata.innerHTML = `By: ${author}`;
        });
});