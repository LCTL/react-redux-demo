import * as React from 'react';
import { Link as RouterLink } from 'react-router';
import { statelessComponentFactory as factory } from '../../utils/react-utils';

const link = factory(RouterLink);

export const Link = link();
export const ActiveLink = link('item', (props) => {
  const
    { to, location } = props,
    path: string = location.pathname,
    active: string = path === to ? 'active' : '';
  return Object.assign({}, props, {className: active});
});
