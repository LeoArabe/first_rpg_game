import Portfolio from "./portfolio.js";
import handleNickname from "./nickname.js";
import AssetManager from "./assetmanager.js";

const portfolioPlayer = new Portfolio();
const assetManager = new AssetManager(portfolioPlayer);

const updatePortfolio = () => {
  portfolioPlayer.updateProftPSecond();
  portfolioPlayer.cash += portfolioPlayer.proftPSecond;
};

setInterval(updatePortfolio, 1000);
handleNickname();

export default portfolioPlayer;
