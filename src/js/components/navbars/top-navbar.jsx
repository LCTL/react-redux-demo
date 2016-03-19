import React from 'react';

import { SideBarIcon, SearchIcon } from '../shared/icons';
import { Container } from '../shared/containers';
import { Link } from '../shared/links';
import profileImage from '../../../assets/steve.jpg';

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
      <div className="ui right menu secondary grid">
        <div className="computer tablet only row">
          <div className="item account-profile">
            <img src={profileImage} alt="profile image" />
            <a>Steve Jobs</a>
          </div>
          <div className="item" onClick={props.toggleSidebar}>
            <SideBarIcon className="toggle-sidebar" />
          </div>
        </div>
        <div className="mobile only row">
          <div className="item" onClick={props.toggleSidebar}>
            <SideBarIcon className="toggle-sidebar" />
          </div>
        </div>
      </div>
    </div>
  </Container>
)
