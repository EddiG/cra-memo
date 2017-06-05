// @flow
import styled from 'styled-components';
import LinkButton from 'components/LinkButton';

const StyledLinkButton = styled(LinkButton)`
  color: ${p => p.theme.colors.fg.button};
  text-decoration: none;
  letter-spacing: 0.1em;
  background-color: ${p => p.theme.colors.bg.button};
  padding: 0.8em 0.7em;
  border-radius: 5px;
  ${p => p.theme.media.desktop`font-size: 1em;`}
  ${p => p.theme.media.tablet`font-size: 0.6em;`}
  ${p => p.theme.media.phone`font-size: 0.6em;`}
`;

export default StyledLinkButton;
