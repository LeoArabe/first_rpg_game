import setupCursorPointer from './cursor.js';
import portfolioPlayer from './app.js';

export function handleGoldChest() {
  let clickValue = 1;
  const goldChest = document.querySelector('#gold-chest');

  setupCursorPointer();

  goldChest.addEventListener('mouseover', () => {
    goldChest.style.cursor = 'pointer';
  });

  goldChest.addEventListener('click', () => {
    if (portfolioPlayer.proftPSecond > 100) {
      clickValue = portfolioPlayer.proftPSecond / 100;
    }
    portfolioPlayer.clickChest(clickValue);
    
  });
}

handleGoldChest(portfolioPlayer);



