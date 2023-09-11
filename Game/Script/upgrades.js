import portfolioPlayer from "./app.js";
import { Investment } from "./assets.js";
import Upgrade from "./upassets.js"; 

const upgradesData = [
    { id: 'cursorup', price: 50, proftMultplier: 2, associatedAssetId: 'cursor' },
    { id: 'minerup', price: 250, proftMultplier: 2, associatedAssetId: 'miner' },
    { id: 'miningup', price: 3000, proftMultplier: 2, associatedAssetId: 'mining' },
    { id: 'farmup', price: 35000, proftMultplier: 2, associatedAssetId: 'farm' },
    { id: 'bankup', price: 50000, proftMultplier: 2, associatedAssetId: 'bank' },
    { id: 'islandup', price: 350000, proftMultplier: 2, associatedAssetId: 'island' },
];

const upElements = {};
const upQuantities = {};

for (const up of upgradesData) {
    upElements[up.id] = document.querySelector(`#${up.id}asset`);
    upQuantities[up.id] = document.querySelector(`#${up.id}q`);
}

const upgrades = upgradesData.map(up => ({
    element: upElements[up.id],
    quantityElement: upQuantities[up.id],
    upgrade: new Upgrade(upElements[up.id], up.price, up.proftMultplier),
    associatedAssetId: up.associatedAssetId,
}));

upgrades.forEach(up => {
    if (!up.quantityElement) {
        up.quantityElement = 0;
    }

    up.element.addEventListener('click', () => {
        if (portfolioPlayer.cash >= up.upgrade.price) {



            const associatedAsset = assets.find(asset => asset.id === up.associatedAssetId);

            if (associatedAsset) {
                
                const newProftPSecond = portfolioPlayer.proftPSecond * associatedAsset.invest.proftMultiplier;
             
                portfolioPlayer.proftPSecond = newProftPSecond;


                portfolioPlayer.buyUpgrade(up.upgrade);
                up.quantityElement.innerText = ++up.quantityElement.innerText || 1;
                const newPrice = Math.round(up.upgrade.price * 5);
                up.upgrade.inflatePrice(newPrice);
            }
        }
    });
});

export default class Upgrades {
    constructor(portfolioPlayer) {
        this.portfolioPlayer = portfolioPlayer;
        this.cashElement = document.querySelector('#cash');
        this.upElement = document.querySelector('#assetscurrently');
        this.upgradeElements = upgradesData.map(up => ({
            costElement: document.querySelector(`#${up.id}c`),
            profitElement: document.querySelector(`#${up.id}r`),
        }));
        portfolioPlayer.addObserver(this);
    }

    update(cash, proftMultplier) {
        this.cashElement.innerText = Math.round(cash);
        this.upElement.innerText = proftMultplier < 10 ? proftMultplier.toFixed(1) : Math.round(proftMultplier);

        this.upgradeElements.forEach((up, index) => {
            up.costElement.innerText = `custo: ${upgradesData[index].price}`;
            up.profitElement.innerText = `upgrade: ${upgradesData[index].proftMultplier}`;
        });
    }
}
