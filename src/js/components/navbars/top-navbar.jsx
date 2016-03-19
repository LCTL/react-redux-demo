import React from 'react';

import { SideBarIcon, SearchIcon } from '../shared/icons';
import { Container } from '../shared/containers';
import { Link } from '../shared/links';

export default props => (
  <Container>
    <div className="ui menu secondary top">
      <Link to="/" className="item">
        Demo
      </Link>
      <div className="item">
        <div className="ui icon input">
          <input type="text" placeholder="Ask or Search" />
          <SearchIcon />
        </div>
      </div>
      <div className="ui right item" onClick={props.toggleSidebar}>
        <SideBarIcon />
      </div>
    </div>
  </Container>
)
