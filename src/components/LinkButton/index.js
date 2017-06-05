// @flow
import React from 'react';
import Link from '../Link';

type Props = {
  onClick: () => void,
  children?: React.Children,
};

const LinkButton = ({ onClick, children, ...props }: Props) => (
  <Link href="#" onClick={() => onClick()} role="button" {...props}>
    {children}
  </Link>
);

LinkButton.defaultProps = {
  children: null,
};

export default LinkButton;
