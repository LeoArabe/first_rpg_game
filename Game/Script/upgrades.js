import portfolioPlayer from "./app.js";
import Upgrade from "./upassets.js"; 
import { assets } from "./store.js";

const upgradesData = [
    { id: 'cursorup', price: 50, proftMultplier: 2, associatedAssetId: 'cursorasset' },
    { id: 'minerup', price: 250, proftMultplier: 2, associatedAssetId: 'minerasset' },
    { id: 'miningup', price: 3000, proftMultplier: 2, associatedAssetId: 'miningasset' },
    { id: 'farmup', price: 35000, proftMultplier: 2, associatedAssetId: 'farmasset' },
    { id: 'bankup', price: 50000, proftMultplier: 2, associatedAssetId: 'bankasset' },
    { id: 'islandup', price: 350000, proftMultplier: 2, associatedAssetId: 'islandasset' },
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
    associatedAssetId: up.associatedAssetId,
    upgrade: new Upgrade(upElements[up.id], up.price, up.proftMultplier),
}));

upgrades.forEach(up => {
    if (!up.quantityElement) {
        up.quantityElement = 0;
    }

    up.element.addEventListener('click', () => {
        
        
        if (portfolioPlayer.cash >= up.upgrade.price) {

            const associatedAsset = assets.find(asset => asset.element.id === up.associatedAssetId); 

            if (associatedAsset) {
                associatedAsset.invest.upProftValue(associatedAsset.invest.proftPSecond*2);
                console.log(portfolioPlayer.proftPSecond)
                console.log(portfolioPlayer.investiments)

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
            up.costElement.innerText = `custo: ${upgrades[index].upgrade.price}`;
            up.profitElement.innerText = `upgrade: ${upgradesData[index].proftMultplier}`;
        });
    }
}
