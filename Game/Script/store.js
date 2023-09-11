import portfolioPlayer from "./app.js";
import { Investment } from "./assets.js";

const assetsData = [
    { id: 'cursor', price: 15, proftPSecond: 0.1 },
    { id: 'miner', price: 100, proftPSecond: 1 },
    { id: 'mining', price: 1100, proftPSecond: 8 },
    { id: 'farm', price: 12000, proftPSecond: 47 },
    { id: 'bank', price: 130000, proftPSecond: 200 },
    { id: 'island', price: 2000000, proftPSecond: 1000 },
  ];

const elements = {};
const quantities = {};

for(const asset of assetsData) {
    elements[asset.id] = document.querySelector(`#${asset.id}asset`);
    quantities[asset.id] = document.querySelector(`#${asset.id}q`);
}



const assets = assetsData.map(asset => ({
    element: elements[asset.id],
    quantityElement: quantities[asset.id],
    invest: new Investment(elements[asset.id], asset.price, asset.proftPSecond),
}));

assets.forEach(asset => {

    if(!asset.quantityElement) {
        asset.quantityElement = 0;
    }
    
    asset.element.addEventListener('click', () => {
        if (portfolioPlayer.cash >= asset.invest.price) {
            portfolioPlayer.buyInvest(asset.invest);
            asset.quantityElement.innerText = ++asset.quantityElement.innerText || 1;
            const newPrice = Math.round(asset.invest.price * 1.155);
            asset.invest.inflatePrice(newPrice);
        
        }
    });
});

export default class Store {
    constructor(portfolioPlayer){
        this.portfolioPlayer = portfolioPlayer;
        this.cashElement = document.querySelector('#cash');
        this.assetElement = document.querySelector('#assetscurrently');
        this.assetElements = assetsData.map(asset => ({
            costElement: document.querySelector(`#${asset.id}c`),
            profitElement: document.querySelector(`#${asset.id}r`),
        }));
        portfolioPlayer.addObserver(this);
    }

    buyInvest(name, price, proftPSecond) {
        const investment = new Investment(name, price, proftPSecond);
        this.portfolioPlayer.buyInvest(investment);
    }

    update(cash, proftPSecond) {
        
        this.cashElement.innerText = Math.round(cash);
        this.assetElement.innerText = proftPSecond < 10 ? proftPSecond.toFixed(1) : Math.round(proftPSecond);
       
        this.assetElements.forEach((asset, index) => {
            
            asset.costElement.innerText = `custo: ${assets[index].invest.price}`;
            asset.profitElement.innerText = `rende: ${assets[index].invest.proftPSecond}`;
        });
    }
}