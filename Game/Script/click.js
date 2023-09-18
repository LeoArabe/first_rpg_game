import portfolioPlayer from "./app.js";

let clickValue = 1;
let goldChest = document.querySelector('#gold-chest');

goldChest.addEventListener('mouseover',() => {
    document.querySelector('#gold-chest').style.cursor = 'pointer';
  });

goldChest.addEventListener('click', () => {
  if(portfolioPlayer.proftPSecond > 100){
    clickValue = portfolioPlayer.proftPSecond/100
  }
  portfolioPlayer.clickChest(clickValue);
});

