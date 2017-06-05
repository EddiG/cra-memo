// @flow
import React from 'react';
import styled from 'styled-components';
import Image from './Image';

type Props = {
  name: String,
  isOpened: Boolean,
  frontImage: String,
  backImage: String,
  onClick: Function,
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 5%;
  cursor: pointer;
  perspective: 800px;
  &:after {
    content: '';
    display: block;
    margin-top: 100%;
  }
`;

const Rotater = styled.div`
  position: absolute;
  width: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${props => (props.opened ? 'rotateY(180deg)' : 'none')};
`;

const FrontImage = styled(Image)`
  transform: rotateY(180deg);
  border: 5px solid #e0b305;
  background-color: white;
`;

const BackImage = styled(Image)`
  transform: translateZ(1px);
`;

const Card = ({ name, isOpened, frontImage, backImage, onClick }: Props) => (
  <Container onClick={() => onClick()}>
    <Rotater opened={isOpened}>
      <FrontImage src={frontImage} alt={name} />
      <BackImage src={backImage} alt={name} />
    </Rotater>
  </Container>
);

export default Card;
