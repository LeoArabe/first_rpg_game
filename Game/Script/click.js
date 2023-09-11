import portfolioPlayer from "./app.js";

let goldChest = document.querySelector('#gold-chest');

goldChest.addEventListener('mouseover',() => {
    document.querySelector('#gold-chest').style.cursor = 'pointer';
  });

goldChest.addEventListener('click', () => {
    portfolioPlayer.clickChest();
    console.log(`Saldo atualizado: ${Math.round(portfolioPlayer.cash)}`)
    //portfolioPlayer.notfyObservers();
});

