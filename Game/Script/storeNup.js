import portfolioPlayer from "./app.js";
import { Investment } from "./investment.js"; 

const assetsData = [
    { id: 'cursor', price: 15, priceUp: 50, proftPSecond: 0.1, proftMultplier: 2 },
    { id: 'miner', price: 100, priceUp: 250, proftPSecond: 1, proftMultplier: 1.8 },
    { id: 'mining', price: 1100, priceUp: 3000, proftPSecond: 8, proftMultplier: 1.6 },
    { id: 'farm', price: 12000, priceUp: 35000, proftPSecond: 47, proftMultplier: 1.4 },
    { id: 'bank', price: 130000, priceUp: 50000, proftPSecond: 200, proftMultplier: 1.3 },
    { id: 'island', price: 2000000, priceUp: 350000, proftPSecond: 1000, proftMultplier: 1.2 },
  ];

const elements = {};

for (const asset of assetsData) {
  elements[asset.id] = {
      assetElement: document.querySelector(`#${asset.id}asset`),
      assetQuantity: document.querySelector(`#${asset.id}q`),
      upgradeElement: document.querySelector(`#${asset.id}upasset`),
      upgradeQuantity: document.querySelector(`#${asset.id}upq`)
  };
}

const assets = assetsData.map(asset => ({
  element: elements[asset.id].assetElement,
  quantityElement: elements[asset.id].assetQuantity,
  elementUp: elements[asset.id].upgradeElement,
  quantityUp: elements[asset.id].upgradeQuantity,
  invest: new Investment(
    elements[asset.id], asset.price, asset.priceUp,
     asset.proftPSecond, asset.proftMultplier),
}));

assets.forEach(asset => {
  asset.quantityElement = !asset.quantityElement ? 0 : asset.quantityElement;
  asset.quantityUp = !asset.quantityUp ? 0 : asset.quantityUp;
 
  asset.element.addEventListener('click', () => {
    if (portfolioPlayer.cash >= asset.invest.price) {
       portfolioPlayer.buyInvest(asset.invest);
       asset.quantityElement.innerText = ++asset.quantityElement.innerText || 1;
       const newPrice = Math.round(asset.invest.price * 1.155);
       asset.invest.inflatePrice(newPrice);
    }
  });

  asset.elementUp.addEventListener('click', () => { 
    if (portfolioPlayer.cash >= asset.invest.priceUp) {
        asset.invest.upProftValue(asset.invest.proftPSecond*asset.invest.proftMultiplier);
        portfolioPlayer.buyUpgrade(asset.invest);
        asset.quantityUp.innerText = (parseInt(asset.quantityUp.innerText) + 1).toString();
        const newPrice = Math.round(asset.invest.priceUp * 5);
        asset.invest.inflateUpPrice(newPrice);  

    }
  });
});

export default class StoreNup {
  constructor(portfolioPlayer){
      this.portfolioPlayer = portfolioPlayer;
      this.cashElement = document.querySelector('#cash');
      this.assetElement = document.querySelector('#assetscurrently');
      this.assetElements = assetsData.map(asset => ({
          costElement: document.querySelector(`#${asset.id}c`),
          profitElement: document.querySelector(`#${asset.id}r`),
          costUpElement: document.querySelector(`#${asset.id}upc`),
          profitUpElement: document.querySelector(`#${asset.id}upr`),
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
          asset.costUpElement.innerText = `upgrade: ${assets[index].invest.priceUp}`;
          asset.profitUpElement.innerText = `rendimento x ${assets[index].invest.proftMultiplier}`;
      });
  }
}