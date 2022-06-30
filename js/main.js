
const arrayOfCards = []; // store somewhere else
const arrayOfImages = [
        {Id: "Belgium", img:"./Images/belgium.png"},
        {Id: "UK", img:"./Images/united-kingdom.png"},
        {Id: "France", img:"./Images/france.png"},
        {Id: "Belgium", img:"./Images/belgium.png"},
        {Id: "Germany", img:"./Images/germany.png"},
        {Id: "Italy",img:"./Images/italy.png"},
        {Id: "France", img:"./Images/france.png"},
        {Id: "Netherlands",img:"./Images/netherlands.png"},
        {Id: "Italy",img:"./Images/italy.png"},
        {Id: "Netherlands", img:"./Images/netherlands.png"},
        {Id: "Germany", img:"./Images/germany.png"},
        {Id: "Portugal", img:"./Images/portugal.png"},
        {Id: "Spain", img:"./Images/spain.png"},
        {Id: "Portugal", img:"./Images/portugal.png"},
        {Id: "Spain", img:"./Images/spain.png"},
        {Id: "UK", img:"./Images/united-kingdom.png"}
    ]; // store somewhere else
let clickedCardsFront = []; // store somewhere else
let clickedCardsBack = [];
let pairs = 0; // store somewhere else
let randomNumbersArr = [];

class Game {
    constructor() {
        this.counter = 120;
    }
    start(){
        this.shuffleArray();
        this.createCards();
        this.assignEventListeners();
            
      
      const intervalId = setInterval( () => {
            this.counter--;
            const timerId = document.getElementById("timer");
            timerId.innerText = `${this.counter}`;
            if (this.counter === 0){
                this.gameOver();
                clearInterval(intervalId);
            }
            else if (pairs === 8) {
              this.congratulations();
              clearInterval(intervalId);
            }
      },1000)

      // Next level
        
    }

    createCards () {
        for(let i=0; i<16; i++){
            const card = new Card(i);
            arrayOfCards.push(card);
        }
    }

    assignEventListeners () {
        for(let i=0; i<16; i++){
        arrayOfCards[i].createEventListener();
        }
    }

      isPair() {
             if(clickedCardsFront[0].src === clickedCardsFront[1].src){
                pairs++;
                clickedCardsFront = [];
                clickedCardsBack = [];
             }
            else {
                setTimeout( () => {
                clickedCardsFront[0].style.display = "none";
                clickedCardsFront[1].style.display = "none";
                clickedCardsBack[0].style.display = "block";
                clickedCardsBack[1].style.display ="block";
                clickedCardsFront = [];
                clickedCardsBack = [];
            },2000)
                    
               };
         } 

    gameOver () {
        const gameOver = document.createElement("div");
        gameOver.className = "game-over";
        const gameOverMessage = document.createTextNode("Time's up ! Unfortunately you didn't find all the pairs before the end of the countdown. Better luck next time");
        gameOver.appendChild(gameOverMessage);
        const tryAgainButton = document.createElement("button");
        tryAgainButton.type = "button";
        tryAgainButton.innerHTML = "Try again";
        //gameOverMessage.appendChild(tryAgainButton);
        board.appendChild(gameOver);
    }

    congratulations () {
      const congratulations = document.createElement("div");
      congratulations.className = "congratulations";
      const congratsMessage = document.createTextNode("Congratulations !!! You found all the pairs.");
      congratulations.appendChild(congratsMessage);
      board.appendChild(congratulations);
    }

    shuffleArray () {
        for (let i = arrayOfImages.length -1; i>0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [arrayOfImages[i], arrayOfImages[j]] = [arrayOfImages[j], arrayOfImages[i]];
        }
    }
   
}

  
  
  class Card {
    constructor (index) {
        this.domElement = this.createDomElementDiv();
        this.backCard = this.createDomElementBackCard();
        this.frontCard = this.createDomElementFrontCard(index);
    };

  
    createDomElementDiv() {
        const newElm = document.createElement('div');
        newElm.className = "card";
        const boardElm = document.getElementById("board"); 
        boardElm.appendChild(newElm);
        return newElm;
    };
        
    createDomElementBackCard() {
        const backCard = document.createElement('img');
        backCard.className = "card--image--back";
        backCard.src = "./Images/question-mark.png" ; // always the same cover
        backCard.style.display = "block";
        this.domElement.appendChild(backCard);
        return backCard 
    };
    
    
    createDomElementFrontCard(index) {
        const frontCard = document.createElement('img');
        frontCard.className = "card--image--front";
        frontCard.src = arrayOfImages[index]["img"];
        frontCard.style.display = "none";
        this.domElement.setAttribute("id",arrayOfImages[index]["Id"]);
        this.domElement.appendChild(frontCard);
        return frontCard
    };
        
    createEventListener() {
        this.domElement.addEventListener( 'click', () => {
           
            if(this.backCard.style.display === "block"){
                  this.backCard.style.display = "none";
                  this.frontCard.style.display = "block";
                clickedCardsFront.push(this.frontCard);
                clickedCardsBack.push(this.backCard);
                if (clickedCardsFront.length === 2){
                    game.isPair();
                }
             }
        });
    };
}

  
  const game = new Game();
  game.start();
