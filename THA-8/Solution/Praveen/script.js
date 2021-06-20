const press = document.querySelectorAll('.box');


press.forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle("white")
    })
  })

