
const arrayOfCards = []; // store somewhere else
const arrayOfImages = [
        {Id: "Belgium", img:"Images/belgium.png"},
        {Id: "France", img:"Images/france.png"},
        {Id: "Belgium", img:"Images/belgium.png"},
        {Id: "Germany", img:"Images/germany.png"},
        {Id: "Italy",img:"Images/italy.png"},
        {Id: "Italy",img:"Images/italy.png"},
        {Id: "France", img:"Images/france.png"},
        {Id: "Italy",img:"Images/italy.png"},
        {Id: "Netherlands", img:"Images/netherlands.png"},
        {Id: "Germany", img:"Images/germany.png"},
        {Id: "Portugal", img:"Images/portugal.png"},
        {Id: "Portugal", img:"Images/portugal.png"},
        {Id: "Spain", img:"Images/spain.png"},
        {Id: "Spain", img:"Images/spain.png"},
        {Id: "UK", img:"Images/united-kingdom.png"},
        {Id: "UK", img:"Images/united-kingdom.png"}
    ]; // store somewhere else


class Game {
    constructor() {
        this.pairs = 0;
    }
    start(){
        this.createCards();
        this.assignEventListeners();
        console.log("starting the game");
        console.log(arrayOfCards);
            
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
    
      // need to hide/anonymize otherwise we can cheat with the devtools
    /*matchCards(card1, card2) {
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
    };*/
    
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

    

     isPair(card1, card2) {
         if(card1.id === card2.id){

         }
         else if (card1.div != card2.div) {
            card1.style.display = "none";
            card2.style.display = "none";
         };
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
        backCard.src = "Images/question-mark.png" ; // always the same cover
        backCard.setAttribute("display", "block");
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