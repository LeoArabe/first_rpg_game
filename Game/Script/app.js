import Portfolio from "./portfolio.js";
import StoreNup from "./storeNup.js"
import { handleGoldChest } from './goldChest';
import { Investment } from './investment';

const initApp = () => {
    const portfolioPlayer = new Portfolio();
    const storeNup = new StoreNup(portfolioPlayer);

    const updatePortifolio = () => {
        portfolioPlayer.updateProftPSecond();
        portfolioPlayer.cash += portfolioPlayer.proftPSecond;
    }

    setInterval(updatePortifolio, 1000);
};

export default initApp;

initApp.clickChest = (clickValue) => {
    console.log('mais um')
};

handleGoldChest();
