// @flow
import React from 'react';

type Props = {
  href: string,
  children?: React.Children,
};

const Link = ({ href, children, ...props }: Props) => (
  <a href={href} {...props}>{children}</a>
);

Link.defaultProps = {
  children: null,
};

export default Link;
