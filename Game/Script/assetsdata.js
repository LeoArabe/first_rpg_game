import Investment from "./investment.js"; 

const assetsData = [
    { id: 'cursor', price: 15, priceUp: 50, proftPSecond: 0.1, proftMultplier: 2 },
    { id: 'miner', price: 100, priceUp: 250, proftPSecond: 1, proftMultplier: 1.8 },
    { id: 'mining', price: 1100, priceUp: 3000, proftPSecond: 8, proftMultplier: 1.6 },
    { id: 'farm', price: 12000, priceUp: 35000, proftPSecond: 47, proftMultplier: 1.4 },
    { id: 'bank', price: 130000, priceUp: 50000, proftPSecond: 200, proftMultplier: 1.3 },
    { id: 'island', price: 2000000, priceUp: 350000, proftPSecond: 1000, proftMultplier: 1.2 },
  ];

function createAssets(elements) {
    return assetsData.map(asset => ({
    element: elements[asset.id].assetElement,
    quantityElement: elements[asset.id].assetQuantity,
    elementUp: elements[asset.id].upgradeElement,
    quantityUp: elements[asset.id].upgradeQuantity,
    invest: new Investment(
      elements[asset.id], asset.price, asset.priceUp,
       asset.proftPSecond, asset.proftMultplier),
  }));
  }
  
  export { assetsData , createAssets }