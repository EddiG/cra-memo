// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import media from './media';

type Props = {
  children?: React.Children,
};

const theme = {
  colors: {
    fg: {
      main: '#b1b1b1',
      avatar: '#53bdff',
      button: '#fff',
    },
    bg: {
      nav: '#333333',
      main: '#fff',
      button: '#e0b305',
    },
  },
  media,
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

Theme.defaultProps = {
  children: null,
};

export default Theme;
