import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../index';
import Theme from '../../Theme';

describe('Link component', () => {
  it('should rendered successfully', () => {
    const link = renderer.create(<Theme><Link href="#" /></Theme>).toJSON();
    expect(link).toMatchSnapshot();
  });
});
