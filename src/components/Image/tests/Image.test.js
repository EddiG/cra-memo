import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../index';
import Theme from '../../Theme';

describe('Image component', () => {
  it('should rendered successfully', () => {
    const image = renderer.create(<Theme><Image /></Theme>).toJSON();
    expect(image).toMatchSnapshot();
  });
});
