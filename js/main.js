class Game {

    start(){
      
      const timeOutId = setTimeout(function (){
        const gameOverMessage = document.createElement("div");
        board.appendChild(gameOverMessage);
      } ,1000*120);
  
      if (document.querySelectorAll("img.front").length === arrayOfCards.length) {
        const congratulationsMessage = document.createElement("div");
        congratulationsMessage.Id = "win";
        board.appendChild(congratulationsMessage);
        clearTimeout(timeOutId);
      };
        
    }
  };
  
  const arrayOfCards = [];
  const arrayOfImages = [];
  
  class Card {
    constructor (ID) {
        this.Id = ID;
        this.height = 10;
        this.width = 5;
        this.domElement = this.createDomElement();
    }
  
    createDomElement() {
        let randomNumber = math.round(math.random*arrayOfImages.length);
        const newElm = document.createElement('div');
        newElm.Id = this.Id;
  
        const frontCard = document.createElement('img');
        frontCard.className = "front";
        frontCard.src = arrayOfImages[randomNumber];
        newElm.appendChild(frontCard);
  
        const backCard = document.createElement('img');
        backCard.className = "back";
        backCard.src = ""; // always the same cover
        newElm.appendChild(backCard);
        
        const boardElm = document.getElementById("board"); 
        boardElm.appendChild(newElm);
  
          // need to create the same card twice
  
          // need to push the two cards created at random positions in the array
        arrayOfCardspush()
    }
    
    flipCard() {
      const cardId = document.getElementsByTagName("img");
      cardId.addEventListener("click", flipCard);
      card.classList.toggle("flipCard");
    }
  
    // need to hide/anonymize the src or ids otherwise we can cheat with  the devtools
    matchCards() {
      if(frontCard.src === frontCard.src) {
  
      }
      else {
  
      }
    }
  }
  