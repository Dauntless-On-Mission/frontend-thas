const press = document.querySelectorAll('.childbox');


press.forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle("white")
    })
  })