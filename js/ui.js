const calc = new Random();
calc.createCardsObject();
calc.bubbleSort();

const allCards = Array.from(document.querySelectorAll('.card'));

for(let j=0;j<=9;j++) {
    const card = allCards[j];
    if(j<=8) {
        card.firstElementChild.textContent = calc.cards[j].company;
        for(let i=0;i<3;i++) {
            if(calc.cards[j].sign == 0) {
                card.children[i].setAttribute('src','img/Arrow-Red.png');
                card.lastElementChild.textContent = "- "+ calc.cards[j].price;
            } else {
                card.children[i].setAttribute('src','img/Arrow-Green.png');
                card.lastElementChild.textContent = "+ "+ calc.cards[j].price;
            }
        }
    } else {
        card.firstElementChild.textContent = calc.cards[j].special;
        card.firstElementChild.style.fontSize = '16px';
    }
}

const buy = document.querySelector('.buy');
const cross = document.querySelectorAll('.fa-times-circle');
const sell = document.querySelector('.sell');
const buyContainer = document.querySelector('.buy-container');
const sellContainer = document.querySelector('.sell-container');
const body = document. querySelector('body');
const calculator = document.querySelector('#centering-container');
const status = document.querySelector('.status');

buy.addEventListener('click', () => {
    buyContainer.style.display = 'block';
    body.className = 'dark';
    calculator.style.display = 'flex';
    status.style.right = '70rem';
    status.style.animation ='0.5s ease-in pop-in';
});
sell.addEventListener('click', () => {
    sellContainer.style.display = 'block';
    body.className = 'dark';
    calculator.style.display = 'flex';
    status.style.right = '70rem';
    status.style.animation ='0.5s ease-in pop-in';
});
cross[0].addEventListener('click', () => {
    buyContainer.style.display = 'none';
    body.classList.remove('dark');
    calculator.style.display = 'none';
    status.style.right = '3.125rem';
});
cross[1].addEventListener('click', () => {
    sellContainer.style.display = 'none';
    body.classList.remove('dark');
    calculator.style.display = 'none';
    status.style.right = '3.125rem';
});