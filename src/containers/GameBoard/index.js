// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Cards from 'containers/Cards';
import Button from './Button';
import { refreshCards } from './actions';

type Props = {
  onRefresh: Function,
};

const Container = styled.section`
`;

const CardsWrap = styled.section`
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: 0 auto;
  ${p => p.theme.media.desktop`width: 60vw;`}
  ${p => p.theme.media.tablet`width: 80vw;`}
  ${p => p.theme.media.phone`width: 80vw;`}
`;

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 20px;
`;

const GameBoard = ({ onRefresh }: Props) => (
  <Container>
    <ControlBar>
      <Button onClick={() => onRefresh()}>
        Refresh
      </Button>
    </ControlBar>
    <CardsWrap>
      <Cards />
    </CardsWrap>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(refreshCards()),
});

export default connect(null, mapDispatchToProps)(GameBoard);
