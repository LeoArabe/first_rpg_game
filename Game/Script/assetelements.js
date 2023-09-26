import { assetsData  } from "./assetsData.js"

export default function createElements() {
    const elements = {};

    for (const asset of assetsData) {
      elements[asset.id] = {
          assetElement: document.querySelector(`#${asset.id}asset`),
          assetQuantity: document.querySelector(`#${asset.id}q`),
          upgradeElement: document.querySelector(`#${asset.id}upasset`),
          upgradeQuantity: document.querySelector(`#${asset.id}upq`)
      };
    }

    return elements;
}


