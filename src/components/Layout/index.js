// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Children,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  min-height: 10vh;
  background-color: ${props => props.theme.colors.bg.nav};
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.colors.fg.main};
`;

const Main = styled.main`
  /* padding: 20px; */
`;

const Layout = ({ children }: Props) => (
  <Container>
    <Header>
      <Title>
        Memo
      </Title>
    </Header>
    <Main>
      {children}
    </Main>
  </Container>
);

Layout.defaultProps = {
  children: null,
};

export default Layout;
