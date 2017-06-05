import get from 'lodash/get';

export const selectCards = state => {
  const allIds = get(state, 'cards.allIds', []);
  return allIds.reduce((acc, id) => {
    const card = get(state, `cards.byId.${id}`);
    if (card) {
      const frontImage = get(
        state,
        `frontImages.byId.${card.frontImageId}.src`,
        '',
      );
      const backImage = get(
        state,
        `backImages.byId.${card.backImageId}.src`,
        '',
      );
      return [
        ...acc,
        {
          id: card.id,
          isOpened: card.isOpened,
          isGuessed: card.isGuessed,
          frontImage,
          backImage,
        },
      ];
    }
    return acc;
  }, []);
};

export const selectOpenedNotGuessedCards = state =>
  selectCards(state).filter(card => card.isOpened && !card.isGuessed);
