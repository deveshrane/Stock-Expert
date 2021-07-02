const calc = new Calculations();
calc.createCardsObject();
calc.bubbleSort();

const allCards = Array.from(document.querySelectorAll('.card'));

allCards.forEach((div, idx) => {
    div.firstElementChild.textContent = calc.cards[idx].company;
    for(let i=0;i<3;i++) {
        if(calc.cards[idx].sign == 0) {
            div.children[i].setAttribute('src','img/Arrow-Red.png');
            div.lastElementChild.textContent = "- "+ calc.cards[idx].price;
        } else {
            div.children[i].setAttribute('src','img/Arrow-Green.png');
            div.lastElementChild.textContent = "+ "+ calc.cards[idx].price;
        }
    }

});