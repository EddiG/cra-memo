// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string,
  alt: string,
  className: string,
};

const Image = ({ src, alt, className, ...props }: Props) => (
  <img src={src} alt={alt} className={className} {...props} />
);

const StyledImage = styled(Image)`

`;

export default StyledImage;
