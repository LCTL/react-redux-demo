import React from 'react';

import { SideBarIcon } from '../shared/icons';
import { Container } from '../shared/containers';
import { Link } from '../shared/links';

export default props => (
  <Container>
    <div className="ui menu secondary">
      <Link to="/" className="item">
        Demo
      </Link>
      <div className="ui right item" onClick={props.toggleSidebar}>
        <SideBarIcon />
      </div>
    </div>
  </Container>
)
