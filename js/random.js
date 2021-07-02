class Calculations{
    constructor() {
    this.cards = [];
    this.company = ['HDFC', 'Tata', 'Reliance', 'Infosys', 'Apple', 'Tesla'];
    }
    randomDeviationPrice() {
        while(1>0) {
            let rand = Math.floor(Math.random()*30+1);
            if(rand % 5 === 0) {
               return rand;
            }
        }
    }
    randomDeviationSign() {
        let rand = Math.random() >= 0.5 ? 1 : 0;
        return rand;
    }
    randomCompanyName() {
        let rand = Math.floor(Math.random()*6);
        return this.company[rand];
    }
    createCardsObject() {
        for(let i=0;i<=9;i++) {
            this.cards.push({
                price: 0,
                sign: 0,
                company: ""
            });
            this.cards[i].price = this.randomDeviationPrice();
            this.cards[i].sign= this.randomDeviationSign();
            this.cards[i].company = this.randomCompanyName();
        }
    }
    bubbleSort()
    {
        let i, j;
        for (i = 0; i < this.cards.length-1; i++)
        {
            for (j = 0; j < this.cards.length-i-1; j++)
            {
                if (this.cards[j].company > this.cards[j+1].company)
                {
                    let temp = this.cards[j];
                    this.cards[j] = this.cards[j+1];
                    this.cards[j+1] = temp;
                }
            }

        }
    }
}