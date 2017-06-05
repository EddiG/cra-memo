import { triggerCardAsync } from '../sagas';
import * as actions from '../actions';

describe('cards saga', () => {
  describe('triggerCardAsync when we have not opened cards', () => {
    const action = actions.triggerCardAsync('card1');
    const generator = triggerCardAsync(action);
    const openedCards = [];

    it('should select opened cards', () => {
      const selectOpenedCardsDesc = generator.next().value;
      expect(selectOpenedCardsDesc).toMatchSnapshot();
    });

    it('should dispatch TRIGGER_CARD', () => {
      const putTriggerCardDesc = generator.next(openedCards).value;
      expect(putTriggerCardDesc).toMatchSnapshot();
    });
  });
  describe('triggerCardAsync when we have one opened card', () => {
    const action = actions.triggerCardAsync('card1');
    const generator = triggerCardAsync(action);
    const openedCards = [{ id: 'card1' }];

    it('should select opened cards', () => {
      const selectOpenedCardsDesc = generator.next().value;
      expect(selectOpenedCardsDesc).toMatchSnapshot();
    });

    it('should dispatch TRIGGER_CARD', () => {
      const putTriggerCardDesc = generator.next(openedCards).value;
      expect(putTriggerCardDesc).toMatchSnapshot();
    });

    it('should start in race validateCardsAsync saga and TRIGGER_CARD_ASYNC', () => {
      const raceValidateCardsDesc = generator.next(openedCards).value;
      expect(raceValidateCardsDesc).toMatchSnapshot();
    });
  });
  describe('triggerCardAsync when we have more than one opened cards', () => {
    const action = actions.triggerCardAsync('card1');
    const generator = triggerCardAsync(action);
    const openedCards = [{ id: 'card1' }, { id: 'card2' }];

    it('should select opened cards', () => {
      const selectOpenedCardsDesc = generator.next().value;
      expect(selectOpenedCardsDesc).toMatchSnapshot();
    });

    it('should dispatch VALIDATE_CARDS', () => {
      const putValidateCardsDesc = generator.next(openedCards).value;
      expect(putValidateCardsDesc).toMatchSnapshot();
    });

    it('should dispatch TRIGGER_CARD', () => {
      const putTriggerCardDesc = generator.next().value;
      expect(putTriggerCardDesc).toMatchSnapshot();
    });
  });
});
