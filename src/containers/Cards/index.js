// @flow
import React from 'react';
import { connect } from 'react-redux';
import CardsView from 'components/Cards';
import { selectCards } from './selectors';
import { triggerCardAsync } from './actions';

type Props = {
  cards: Array<any>,
  onCardClick: String => void,
};

const Cards = (props: Props) => <CardsView {...props} />;

const mapStateToProps = state => ({
  cards: selectCards(state),
});

const mapDispatchToProps = dispatch => ({
  onCardClick: cardId => dispatch(triggerCardAsync(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
