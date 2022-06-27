
const arrayOfCards = []; // store somewere else
const arrayOfImages = ["Images/belgium.png","Images/france.png","Images/germany.png","Images/germany.png","Images/italy.png","Images/netherlands.png","Images/portugal.png","Images/spain.png","Images/united-kingdom.png"]; // store somewere else


class Game {
    constructor() {
        
    }
    start(){
        const card = new Card();
        card.createDomElement();
        console.log("starting the game");


      let counter = 5;
      const intervalId = setInterval(function () {
            counter--;
            //console.log(counter)
            if (counter === 0){
                const gameOverMessage = document.createElement("div");
                gameOverMessage.className = "game-over";
                board.appendChild(gameOverMessage);
                clearInterval(intervalId)
            }
            /*else if (document.querySelectorAll("img front").length === arrayOfCards.length) {
                const congratulationsMessage = document.createElement("div");
                congratulationsMessage.className = "win";
                board.appendChild(congratulationsMessage);
                clearInterval(intervalId);
            }*/
      },1000)
      

      

    }

    flipCard() {
        const cardId = document.getElementsByTagName("img");
        cardId.addEventListener("click", flipCard);
        cardId.classList.toggle("flipCard");
      };
    
      // need to hide/anonymize the src or ids otherwise we can cheat with the devtools
    matchCards() {
        if(frontCard.src === frontCard.src) {
    
        }
        else {
    
        }
      };
      // Display timer

      // Next level
        
    }

  
  
  class Card {
    constructor (ID) {
        this.Id = ID;
        this.height = 10;
        this.width = 5;
        this.domElement = this.createDomElement();
    }

  
    createDomElement() {
        let cardsNumber = 8;
       
        for (let i=0; i<cardsNumber ; i++) {
       
        //Create card div
        let randomNumber = Math.round(Math.random()*arrayOfImages.length);
        const newElm = document.createElement('div');
        newElm.Id = this.Id;
        newElm.className = "card";
        
        // create back image
        const backCard = document.createElement('img');
        backCard.className = "card--image--back";
        
        backCard.src = "Images/question-mark.png" ; // always the same cover
        /*backCard.addEventListener('click', function() {
            backCard.style.display = "none";
            frontCard.style.display = "block";
        })*/
        newElm.appendChild(backCard);

        // create front card
        const frontCard = document.createElement('img');
        frontCard.className = "card--image--front";
        frontCard.src = `${arrayOfImages[randomNumber]}`;
        newElm.appendChild(frontCard);

        //click
        newElm.addEventListener( 'click', function() {
            console.log(backCard)
            if(backCard.style.display == "block"){
                backCard.style.display = "none";
                frontCard.style.display = "block";
                console.log("click inside if")
            }
            else {
                backCard.style.display = "block";
                frontCard.style.display = "none";
            }
        });
        
        //append new div with the back and front to the board
        const boardElm = document.getElementById("board"); 
        boardElm.appendChild(newElm);
        // boardElm.appendChild(newElm.clone());  // need to create the same card twice
  
          // need to push the two cards created at random positions in the array
        arrayOfCards.push()
        }
    }
    
    
  }
  
  const game = new Game();
  game.start();
