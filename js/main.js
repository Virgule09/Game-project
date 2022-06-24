class Game {

    start(){

        
    }
};


class Card {
    constructor (ID) {
        this.Id = ID;
        this.height = 10;
        this.width = 5;
        this.domElement = this.createDomElement();
    }

    createDomElement() {
        const newElm = document.createElement('div');
        newElm.Id = this.Id;

        const frontCard = document.createElement('img');
        frontCard.className = "front";
        newElm.appendChild(frontCard);

        const backCard = document.createElement('img');
        backCard.className = "back";
        newElm.appendChild(backCard);
        
        const boardElm = document.getElementById("board"); 
        boardElm.appendChild(newElm);

    }
    
    flipCard() {

    }
}