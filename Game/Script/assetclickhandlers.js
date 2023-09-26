import portfolioPlayer from "./app.js";
import createElements from "./assetElements.js";
import { createAssets } from "./assetsData.js"

const clickBuyNewAsset = (asset) => {
  asset.element.addEventListener('click', () => {
        if (portfolioPlayer.cash >= asset.invest.price) {
           portfolioPlayer.buyInvest(asset.invest);
           asset.quantityElement.innerText = ++asset.quantityElement.innerText || 1;
           const newPrice = Math.round(asset.invest.price * 1.155);
           asset.invest.inflatePrice(newPrice);
        }
      });
}
const clickBuyUpgradeAsset = (asset) => {
  asset.elementUp.addEventListener('click', () => { 
      if (portfolioPlayer.cash >= asset.invest.priceUp) {
          asset.invest.upProftValue(asset.invest.proftPSecond*asset.invest.proftMultiplier);
          portfolioPlayer.buyUpgrade(asset.invest);
          asset.quantityUp.innerText = (parseInt(asset.quantityUp.innerText) + 1).toString();
          const newPrice = Math.round(asset.invest.priceUp * 5);
          asset.invest.inflateUpPrice(newPrice);  

      }
  });
}

function setupAssetClickHandlers(assets){
  assets.forEach(asset => {
    asset.quantityElement = !asset.quantityElement ? 0 : asset.quantityElement;
    asset.quantityUp = !asset.quantityUp ? 0 : asset.quantityUp;
    clickBuyNewAsset(asset);
    clickBuyUpgradeAsset(asset);
  });
}

const elements = createElements();
const assets = createAssets(elements);
setupAssetClickHandlers(assets);

export default assets
