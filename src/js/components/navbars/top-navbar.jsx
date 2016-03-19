import React from 'react';

import { SideBarIcon } from '../shared/icons';
import { Container } from '../shared/containers';

export default props => (
  <Container>
    <div className="ui menu secondary">
      <div className="item">
        Demo
      </div>
      <div className="ui right item" onClick={props.toggleSidebar}>
        <SideBarIcon />
      </div>
    </div>
  </Container>
)
