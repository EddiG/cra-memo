import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../index';
import Theme from '../../Theme';

describe('Layout component', () => {
  it('should rendered successfully', () => {
    const layout = renderer.create(<Theme><Layout /></Theme>).toJSON();
    expect(layout).toMatchSnapshot();
  });
});
