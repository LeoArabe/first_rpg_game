import { assetsData } from "./assetsData.js"
import assets from "./assetClickHandlers.js"

export default class AssetManager {
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