import shuffle from 'lodash/shuffle';
import flatten from 'lodash/flatten';
import times from 'lodash/times';
import random from 'lodash/random';
import first from 'lodash/first';
import {
  selectCardsQuantity,
  selectFrontImages,
  selectBackImages,
} from './selectors';

const getRandomItem = items => {
  const randomIndex = random(items.length - 1);
  return items[randomIndex];
};

export function generateCards(state, needShuffle = true) {
  const cardsQuantity = selectCardsQuantity(state);
  const frontImagesIds = selectFrontImages(state);
  const backImagesIds = selectBackImages(state);
  const cardsPairsQuantity = cardsQuantity / 2;
  const cardsPairs = times(cardsPairsQuantity, idx => {
    let frontImageId = '';
    if (frontImagesIds.length >= idx + 1) {
      frontImageId = frontImagesIds[idx];
    } else {
      frontImageId = getRandomItem(frontImagesIds);
    }
    const backImageId = first(backImagesIds);
    const cardFirstId = `card${idx + 1}`;
    const cardSecondId = `card${idx + 1 + cardsPairsQuantity}`;
    return [
      {
        id: cardFirstId,
        pairCardId: cardSecondId,
        isOpened: false,
        isGuessed: false,
        frontImageId,
        backImageId,
      },
      {
        id: cardSecondId,
        pairCardId: cardFirstId,
        isOpened: false,
        isGuessed: false,
        frontImageId,
        backImageId,
      },
    ];
  });
  const cards = flatten(cardsPairs);
  return needShuffle ? shuffle(cards) : cards;
}

export default generateCards;
