import Portfolio from "./portfolio.js";
import Store from "./store.js";
import Upgrades from "./upgrades.js";

const portfolioPlayer = new Portfolio();
const store = new Store(portfolioPlayer);
const upgrade = new Upgrades(portfolioPlayer);

setInterval(() => {
    portfolioPlayer.updateProftPSecond();
    portfolioPlayer.cash += portfolioPlayer.proftPSecond;
   
},1000);

export default portfolioPlayer;


