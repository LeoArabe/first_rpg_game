import { Investment } from "./assets.js";
import Portfolio from "./portfolio.js";
import Store from "./store.js";

const portfolioPlayer = new Portfolio();
const store = new Store(portfolioPlayer);
/*
class ObserverAnonimus {
    constructor(portfolioPlayer){
        portfolioPlayer.addObserver(this);
    }

    update(cash, proftPSecond,investiments){
        console.dir(investiments); 

    } 
}

const observadorAnonimo = new ObserverAnonimus(portfolioPlayer);
*/
setInterval(() => {
    portfolioPlayer.updateProftPSecond();
    portfolioPlayer.cash += portfolioPlayer.proftPSecond;
   
},1000);

export default portfolioPlayer;


