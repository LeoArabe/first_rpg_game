import portfolioPlayer from "./app.js";
import { Investiment } from "./assets.js";

let cursorQtdAtual = 0;
let minerqQtdAtual = 0;
let miningqQtdAtual = 0;
let farmqQtdAtual = 0;
let bankqQtdAtual = 0;
let islandqQtdAtual = 0;

const cursor = document.querySelector('#cursorasset');
const miner = document.querySelector('#minerasset');
const mining = document.querySelector('#miningasset');
const farm = document.querySelector('#farmasset');
const bank = document.querySelector('#bankasset');
const island = document.querySelector('#islandasset');

const cursorq = document.querySelector('#cursorq');
const minerq = document.querySelector('#minerq');
const miningq = document.querySelector('#miningq');
const farmq = document.querySelector('#farmq');
const bankq = document.querySelector('#bankq');
const islandq = document.querySelector('#islandq');

const cursorAssets = new Investiment(cursor,15,0.1);
const mineradorAssets = new Investiment(miner,100,1);
const mineradoraAssets = new Investiment(mining,1100,8);
const fabricaAssets = new Investiment(farm,12000,47);
const bancoAssets = new Investiment(bank,130000,200);
const ilhaAssets = new Investiment(island,2000000,1000);

cursor.addEventListener('click', () =>{
    if(portfolioPlayer.cash>=cursorAssets.price){
        portfolioPlayer.buyInvest(cursorAssets);
        cursorQtdAtual += 1;
        cursorq.innerText = cursorQtdAtual;
        var newPrice = Math.round(cursorAssets.price * 1.155);
        cursorAssets.inflatePrice(newPrice);
    }
    
})

miner.addEventListener('click', () =>{
    if(portfolioPlayer.cash>=mineradorAssets.price){
        portfolioPlayer.buyInvest(mineradorAssets);
        minerqQtdAtual += 1;
        minerq.innerText = minerqQtdAtual;
        var newPrice = Math.round(mineradorAssets.price * 1.155);
        mineradorAssets.inflatePrice(newPrice);
    }
})

mining.addEventListener('click', () =>{
    if(portfolioPlayer.cash>=mineradoraAssets.price){
        portfolioPlayer.buyInvest(mineradoraAssets);
        miningqQtdAtual += 1;
        miningq.innerText = miningqQtdAtual;
        var newPrice = Math.round(mineradoraAssets.price * 1.155);
        mineradoraAssets.inflatePrice(newPrice);
    }
})

farm.addEventListener('click', () =>{
    if(portfolioPlayer.cash>=fabricaAssets.price){
        portfolioPlayer.buyInvest(fabricaAssets);
        farmqQtdAtual += 1;
        farmq.innerText = farmqQtdAtual;
        var newPrice = Math.round(fabricaAssets.price * 1.155);
        fabricaAssets.inflatePrice(newPrice);
    }
})

bank.addEventListener('click', () =>{
    if(portfolioPlayer.cash>=bancoAssets.price){
        portfolioPlayer.buyInvest(bancoAssets);
        bankqQtdAtual += 1;
        bankq.innerText = bankqQtdAtual;
        var newPrice = Math.round(bancoAssets.price * 1.155);
        bancoAssets.inflatePrice(newPrice);
    }
})

island.addEventListener('click', () =>{
    if(portfolioPlayer.cash>=ilhaAssets.price){
        portfolioPlayer.buyInvest(ilhaAssets);
        islandqQtdAtual += 1;
        islandq.innerText = islandqQtdAtual;
        var newPrice = Math.round(ilhaAssets.price * 1.155);
        ilhaAssets.inflatePrice(newPrice);
    }
})


export default class Store {
    constructor(portfolioPlayer) {
        this.portfolioPlayer = portfolioPlayer;
        this.cashElement = document.querySelector('#cash');
        this.assetsElement = document.querySelector('#assetscurrently');
        this.cursorElement = document.querySelector('#cursorc');
        this.minerElement = document.querySelector('#minerc');
        this.miningElement = document.querySelector('#miningc');
        this.farmElement = document.querySelector('#farmc');
        this.bankElement = document.querySelector('#bankc');
        this.islandElement = document.querySelector('#islandc');
        this.cursorElementr = document.querySelector('#cursorr');
        this.minerElementr = document.querySelector('#minerr');
        this.miningElementr = document.querySelector('#miningr');
        this.farmElementr = document.querySelector('#farmr');
        this.bankElementr = document.querySelector('#bankr');
        this.islandElementr = document.querySelector('#islandr');
        portfolioPlayer.addObserver(this);
    }

    buyInvest(name, price, proftPSecond) {
        const investiment = new Investiment(name, price, proftPSecond);
        this.portfolioPlayer.buyInvest(investiment);
        console.log(investiment)
    }

    update(cash, proftPSecond) {
        this.cashElement.innerText = Math.round(cash);
        this.assetsElement.innerText = proftPSecond<10 ? proftPSecond.toFixed(1) : Math.round(proftPSecond);
        this.cursorElement.innerText = `custo: ${cursorAssets.price}`;
        this.minerElement.innerText = `custo: ${mineradorAssets.price}`;
        this.miningElement.innerText = `custo: ${mineradoraAssets.price}`;
        this.farmElement.innerText = `custo: ${fabricaAssets.price}`;
        this.bankElement.innerText = `custo: ${bancoAssets.price}`;
        this.islandElement.innerText = `custo: ${ilhaAssets.price}`;
        this.cursorElementr.innerText = `rende: ${cursorAssets.proftPSecond}`;
        this.minerElementr.innerText = `rende: ${mineradorAssets.proftPSecond}`;
        this.miningElementr.innerText = `rende: ${mineradoraAssets.proftPSecond}`;
        this.farmElementr.innerText = `rende: ${fabricaAssets.proftPSecond}`;
        this.bankElementr.innerText = `rende: ${bancoAssets.proftPSecond}`;
        this.islandElementr.innerText = `rende: ${ilhaAssets.proftPSecond}`;
        
    }
}

