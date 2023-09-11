export default class Upgrade {
    constructor(name, price, proftMultiplier) {
        this.name = name;
        this.price = price;
        this.proftMultiplier = proftMultiplier;
    }

    inflatePrice(newValue) {
        this.price = newValue;
    }
}