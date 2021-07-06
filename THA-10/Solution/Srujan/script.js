document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [

        {
            names: 'forest',
            img: 'images/img1.jpg'
        },
        {
            names: 'forest',
            img: 'images/img1.jpg'
        },
        {
            names: 'trees',
            img: 'images/img2.jpg'
        },
        {
            names: 'trees',
            img: 'images/img2.jpg'
        },
        {
            names: 'mountains',
            img: 'images/img3.jpg'
        },
        {
            names: 'mountains',
            img: 'images/img3.jpg'
        },
        {
            names: 'mountClouds',
            img: 'images/img4.jpg'
        },
        {
            names: 'mountClouds',
            img: 'images/img4.jpg'
        },
        {
            names: 'sea',
            img: 'images/img5.jpg'
        },
        {
            names: 'sea',
            img: 'images/img5.jpg'
        },
        {
            names: 'seaShore',
            img: 'images/img6.jpg'
        },
        {
            names: 'seaShore',
            img: 'images/img6.jpg'
        },
    ]

    // console.log(cardArray[0].names);

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/bg.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optOneId = cardsChosenId[0]
      const optTwoId = cardsChosenId[1]
      
      if(optOneId == optTwoId) {
        cards[optOneId].setAttribute('src', 'images/bg.jpg')
        cards[optTwoId].setAttribute('src', 'images/bg.jpg')
      
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
       
        cards[optOneId].setAttribute('src', 'images/white.png')
        cards[optTwoId].setAttribute('src', 'images/white.png')
        cards[optOneId].removeEventListener('click', flipCard);
        cards[optTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen)
        // console.log(cardsChosen);

      } else {
        cards[optOneId].setAttribute('src', 'images/bg.jpg')
        cards[optTwoId].setAttribute('src', 'images/bg.jpg')
       
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You Won!'
      }
    }


    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].names)
      cardsChosenId.push(cardId)
    //   console.log(cardsChosenId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })

