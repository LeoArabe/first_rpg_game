export class Investment {
    constructor(name, price, priceUp, proftPSecond, proftMultiplier) {
        this.name = name;
        this.price = price;
        this.priceUp = priceUp;
        this.proftPSecond = proftPSecond;
        this.proftMultiplier = proftMultiplier;
    }

    inflatePrice(newValue) {
        this.price = newValue;
    }

    inflateUpPrice(newValue) {
        this.priceUp = newValue;
    }

    upProftValue(newProfit) {
        this.proftPSecond = newProfit;
    }
}
