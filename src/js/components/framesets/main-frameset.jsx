import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import { Divider } from '../shared/dividers';
import { ActiveLink } from '../shared/links';

import TopNavbar from '../navbars/top-navbar';

class MainFrameset extends React.Component {
  toggleSidebar() {
    $(this.refs['sidebar'])
    .sidebar({
      scrollLock: true,
      context: this.refs['mainFrameset']
    })
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle');
  }
  render() {
    const { location } = this.props;
    return (
      <div ref="mainFrameset">
        <div className="ui sidebar right vertical inverted large thin menu" ref="sidebar">
          <ActiveLink to="/dummy-page" location={this.props.location}>
            Dummy Page
          </ActiveLink>
        </div>
        <div className="pusher">
          <TopNavbar toggleSidebar={this.toggleSidebar.bind(this)} location={this.props.location} />
          <Divider className="top" />
          <div className="content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default MainFrameset;
