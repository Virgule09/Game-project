
const arrayOfCards = []; // store somewere else
const arrayOfImages = [
        {Id: "Belgium", img:"Images/belgium.png"},
        {Id: "France", img:"Images/france.png"},
        {Id: "Germany", img:"Images/germany.png"},
        {Id: "Italy",img:"Images/italy.png"},
        {Id: "Netherlands", img:"Images/netherlands.png"},
        {Id: "Portugal", img:"Images/portugal.png"},
        {Id: "Spain", img:"Images/spain.png"},
        {Id: "UK", img:"Images/united-kingdom.png"}]; // store somewere else


class Game {
    constructor() {
        this.pairs = [];
    }
    start(){
        const card1 = new Card();
        const card2 = new Card();
        console.log("starting the game");


      let counter = 5;
      const intervalId = setInterval(function () {
            counter--;
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
    
      // need to hide/anonymize otherwise we can cheat with the devtools
    matchCards(card1, card2) {
        for (let i=0; i<clickedCards.length;i++){
            if( clickedCards[i] === clickedCards[i+1]) {
                this.pairs++
            }
            else {
                card1.backcard.style.display = block;
                card2.backcard.style.display = block;
            };
        };
        console.log(this.pairs)
    };
    
      // Display timer

      // Next level
        
    }

  
  
  class Card {
    constructor () {
        this.domElement = this.createDomElement();
    }

  
    createDomElement() {
        let cardsNumber = 8;
        for (let i=0; i<cardsNumber ; i++) {
        
        //Create card div
        const newElm = document.createElement('div');
        newElm.className = "card";
        
        // create back image
        const backCard = document.createElement('img');
        backCard.className = "card--image--back";
        backCard.src = "Images/question-mark.png" ; // always the same cover
        newElm.appendChild(backCard);

        // create front card
        const frontCard = document.createElement('img');
        frontCard.className = "card--image--front";
        frontCard.src = arrayOfImages[i]["img"];
        newElm.setAttribute("id",arrayOfImages[i]["Id"]);
        
        /* picks a random image from the array without repeating
        frontCard.src = "";
        function noRepeat(arrayOfImages) {
            let copy = arrayOfImages.slice(0);
            console.log(copy)
            return function () {
                if(copy.length < 1) { copy = arrayOfImages.slice(0)}
                let index = Math.floor(Math.random() * copy.length);
                let item = copy[index];
                copy.slice(index, 1);
                return item;
            };
        }
        const chooser = noRepeat(arrayOfImages)
        frontCard.src = chooser();*/

        newElm.appendChild(frontCard);

        // flip the cards on click
        newElm.addEventListener( 'click', function() {
            if(backCard.style.display == "block"){
                backCard.style.display = "none";
                frontCard.style.display = "block";
            }
            else {
                backCard.style.display = "block";
                frontCard.style.display = "none";
            }
       
        const clickedCards = [];
        clickedCards.push(newElm.getAttribute("Id"));
        function matchCards(card1, card2) {
            for (let i=0; i<clickedCards.length;i++){
                if( clickedCards[i] === clickedCards[i+1]) {
                    this.pairs++
                }
                else {
                    card1.backcard.style.display = block;
                    card2.backcard.style.display = block;
                };
            };
            console.log(this.pairs)
        };
        });
        
        //append new div with the back and front to the board
        const boardElm = document.getElementById("board"); 
        boardElm.appendChild(newElm);
  
          // need to push the two cards created at random positions in the array
        }
    }
    
    
  }
  
  const game = new Game();
  game.start();
