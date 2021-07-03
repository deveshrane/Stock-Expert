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

const buy = document.querySelector('.buy');
const cross = document.querySelectorAll('.fa-times-circle');
const sell = document.querySelector('.sell');
const buyContainer = document.querySelector('.buy-container');
const sellContainer = document.querySelector('.sell-container');
const body = document. querySelector('body');
const calculator = document.querySelector('#centering-container');
buy.addEventListener('click', () => {
    buyContainer.style.display = 'block';
    body.className = 'dark';
    calculator.style.display = 'flex';
});
sell.addEventListener('click', () => {
    sellContainer.style.display = 'block';
    body.className = 'dark';
    calculator.style.display = 'flex';
});
cross[0].addEventListener('click', () => {
    buyContainer.style.display = 'none';
    body.classList.remove('dark');
    calculator.style.display = 'none';
});
cross[1].addEventListener('click', () => {
    sellContainer.style.display = 'none';
    body.classList.remove('dark');
    calculator.style.display = 'none';
});