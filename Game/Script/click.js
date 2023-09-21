import { setupCursorPointers } from './cursor';
import { clickChest } from './app';

export function hadleGoldChest() {
  let clickValue = 1;
  const goldChest = document.querySelector('#gold-chest');

  setupCursorPointers();

  goldChest.addEventListener('mouseover', () => {
    goldChest.style.cursor = 'pointer';
  });

  goldChest.addEventListener('click', () => {
    if(clickChest.proftPSecond > 100) {
      clickValue = clickChest.proftPSecond / 100;
    }
    clickChest(clickValue);
  });
}





