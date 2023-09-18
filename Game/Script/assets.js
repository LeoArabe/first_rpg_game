
addEventListener('mouseover',() => {
    document.querySelector('.allassets').style.cursor = 'pointer';
    document.querySelector('.allupassets').style.cursor = 'pointer';
  });

export class Investment {
    constructor(name, price, proftPSecond) {
        this.name = name;
        this.price = price;
        this.proftPSecond = proftPSecond;
    }

    inflatePrice(newValue) {
        this.price = newValue;
    }

    upProftValue(newProfit) {
        this.proftPSecond = newProfit;
    }
}