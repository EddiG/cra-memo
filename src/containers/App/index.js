// @flow
import React from 'react';
import Layout from 'components/Layout';
import Theme from 'components/Theme';
import './global-styles';

type Props = {
  children?: React.Children,
};

const App = ({ children }: Props) => (
  <Theme>
    <Layout>
      {children}
    </Layout>
  </Theme>
);

App.defaultProps = {
  children: null,
};

export default App;
