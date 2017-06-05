// @flow
import { withProps } from 'recompose';
import styled from 'styled-components';
import NormalImage from 'components/Image';

const NonDraggableImage = withProps({ draggable: false })(NormalImage);

const Image = styled(NonDraggableImage)`
  position: absolute;
  display: block;
  width: 100%;
  backface-visibility: hidden;
  user-select: none;
`;

export default Image;
