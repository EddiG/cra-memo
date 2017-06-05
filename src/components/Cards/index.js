// @flow
import React from 'react';
import styled from 'styled-components';
import CardView from '../Card';

type Card = {
  id: String,
  isOpened: Boolean,
  isGuessed: Boolean,
  frontImage: String,
  backImage: String,
};

type Props = {
  cards: Array<Card>,
  onCardClick: String => void,
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  width: ${100 / 4}%;
`;

const Cards = ({ cards, onCardClick }: Props) => (
  <Container>
    {cards.map(card => (
      <CardWrap key={card.id}>
        <CardView
          name={card.id}
          isOpened={card.isOpened}
          frontImage={card.frontImage}
          backImage={card.backImage}
          onClick={() => (card.isGuessed ? null : onCardClick(card.id))}
        />
      </CardWrap>
    ))}
  </Container>
);

export default Cards;
