
const arrayOfCards = []; // store somewhere else
const arrayOfImages = [
        {Id: "Belgium", img:"./Images/belgium.png"},
        {Id: "France", img:"./Images/france.png"},
        {Id: "Belgium", img:"./Images/belgium.png"},
        {Id: "Germany", img:"./Images/germany.png"},
        {Id: "Italy",img:"./Images/italy.png"},
        {Id: "Italy",img:"./Images/italy.png"},
        {Id: "France", img:"./Images/france.png"},
        {Id: "Italy",img:"./Images/italy.png"},
        {Id: "Netherlands", img:"./Images/netherlands.png"},
        {Id: "Germany", img:"./Images/germany.png"},
        {Id: "Portugal", img:"./Images/portugal.png"},
        {Id: "Portugal", img:"./Images/portugal.png"},
        {Id: "Spain", img:"./Images/spain.png"},
        {Id: "Spain", img:"./Images/spain.png"},
        {Id: "UK", img:"./Images/united-kingdom.png"},
        {Id: "UK", img:"./Images/united-kingdom.png"}
    ]; // store somewhere else
let clickedCardsFront = []; // store somewhere else
let clickedCardsBack = [];
let pairs = 0; // store somewhere else

class Game {
    constructor() {
        this.counter = 120;
    }
    start(){
        this.createCards();
        this.assignEventListeners();
        console.log("starting the game");
            
      
      const intervalId = setInterval( () => {
            this.counter--;
            const timerId = document.getElementById("timer");
            timerId.innerText = `${this.counter}`;
            // this.createTimer(counter) = this.counter;
            if (this.counter === 0){
                this.gameOver();
                clearInterval(intervalId);
            }
            // else if (document.querySelectorAll("img front").length === arrayOfCards.length) {
            //     const congratulationsMessage = document.createElement("div");
            //     congratulationsMessage.className = "win";
            //     board.appendChild(congratulationsMessage);
            //     clearInterval(intervalId);
            // }
      },1000)

      // need to hide/anonymize otherwise we can cheat with the devtools
      // Display timer
      // Next level
        
    }

    createCards () {
        for(let i=0; i<16; i++){
            const card = new Card();
            arrayOfCards.push(card);
        }
    }

    assignEventListeners () {
        for(let i=0; i<16; i++){
        arrayOfCards[i].createEventListener();
        }
    }

      isPair() {
        console.log(clickedCardsFront[0]);
        console.log(clickedCardsFront[1])
             if(clickedCardsFront[0].src === clickedCardsFront[1].src){
                pairs++;
             }
            else {
                 clickedCardsFront[0].style.display = "none";
                 clickedCardsFront[1].style.display = "none";
                 clickedCardsBack[0].style.display = "block";
                 clickedCardsBack[1].style.display ="block"
               };
         } 
    
    // createTimer () {
    //     const Timer = document.createElement("div");
    //     Timer.className = "timer";
    //     const TimerText = document.createTextNode(`${this.counter}`);
    //     console.log(TimerText)
    //     Timer.appendChild(TimerText);
    //     const Board = document.getElementById("board");
    //     Board.appendChild(Timer);
    // }

    gameOver () {
        const gameOverMessage = document.createElement("div");
        gameOverMessage.className = "game-over";
        board.appendChild(gameOverMessage);
    }
   
}

  
  
  class Card {
    constructor () {
        this.domElement = this.createDomElementDiv();
        this.backCard = this.createDomElementBackCard();
        this.frontCard = this.createDomElementFrontCard();
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
        // backCard.setAttribute("display", "block");
        this.domElement.appendChild(backCard);
        return backCard 
    };
    
    
    createDomElementFrontCard() {
        const randomNumber = Math.floor(Math.random() * arrayOfImages.length)
        const frontCard = document.createElement('img');
        frontCard.className = "card--image--front";
        frontCard.src = arrayOfImages[randomNumber]["img"];
        frontCard.setAttribute("display", "none");
        this.domElement.setAttribute("id",arrayOfImages[randomNumber]["Id"]);
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
                console.log(this.frontCard);
                if (clickedCardsFront.length === 2){
                    console.log("works when array is 2")
                    game.isPair();
                    clickedCardsFront = [];
                    clickedCardsBack = [];
                    console.log(pairs)
                }
             }
             else {
                 this.backCard.style.display = "block";
                 this.frontCard.style.display = "none";
             };
        });
    };
}

  
  const game = new Game();
  game.start();




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