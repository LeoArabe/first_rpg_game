export default class Portfolio {
  constructor(){
    this.cash = 0;
    this.investiments = [];
    this.proftPSecond = 0;
    this.Observers = [];
  }

  addObserver(observer) {
    this.Observers.push(observer);

  }

  removeObserver(observer) {
    this.Observers = this.Observers.filter(obs => obs !== observer);

  }

  notfyObservers() {
    for (const observer of this.Observers) {
      observer.update(this.cash, this.proftPSecond);
    }
  }

  updateProftPSecond(){
    this.proftPSecond = this.investiments.reduce((totalProfts, investiment) => {
      return totalProfts + investiment.proftPSecond;
    }, 0);

    this.notfyObservers();
  }

  buyUpgrade(upgrade) {
    if (this.cash >= upgrade.price) {
        this.cash -= upgrade.price;
        
        // Atualiza o proftPSecond multiplicando pelo proftMultiplier da atualização
        this.proftPSecond *= upgrade.proftMultiplier;
        
        // Notifica os observadores (caso você tenha implementado essa funcionalidade)
        this.notfyObservers();
    } else {
        console.log("Saldo insuficiente");
    }
}


  buyInvest(investiment) {
  
    if (this.cash >= investiment.price) {
      this.cash -= investiment.price;
      this.investiments.push(investiment);
      this.updateProftPSecond();
      this.notfyObservers();
    }else {
      console.log("Saldo insuficiente");
    }
  }

  clickChest() {
    this.cash += 10;
    this.notfyObservers();
  } 
}



