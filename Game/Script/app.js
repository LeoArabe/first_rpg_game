import Portfolio from "./portfolio.js";
import StoreNup from "./storeNup.js";
import { handleNickname } from "./nickname.js";

const portfolioPlayer = new Portfolio();
const storeNup = new StoreNup(portfolioPlayer);

const updatePortfolio = () => {
  portfolioPlayer.updateProftPSecond();
  portfolioPlayer.cash += portfolioPlayer.proftPSecond;
};

setInterval(updatePortfolio, 1000);
handleNickname();

export default portfolioPlayer;
