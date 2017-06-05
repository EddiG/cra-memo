import { css } from 'styled-components';

const baseFontSize = 16;

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 376,
};

export default Object.keys(sizes).reduce((acc, target) => {
  const emSize = sizes[target] / baseFontSize;
  acc[target] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
