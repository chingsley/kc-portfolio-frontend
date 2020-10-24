import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from 'styled-components';
import ProfileMain from '../components/ProfileMain';
import ProfileAbout from '../components/ProfileAbout';
import ProfileSkills from '../components/ProfileSkills';
import { makeTopNavTransparent, makeTopNavOpaque } from '../store/actions';
import ProfileEducation from '../components/ProfileEducation';
import ProfileWorkHistory from '../components/ProfileWorkHistory';
import ProfileProjectListing from '../components/ProfileProjectListing';

const Profile = style.div`
.profile {
  // background-color: lightblue;
  display: block;
}
`;

class ProfilePage extends Component {
  render() {
    return (
      <>
        <Profile {...this.props}>
          <div className="profile">
            <ProfileMain />
            <ProfileAbout />
            <ProfileSkills />
            <ProfileEducation />
            <ProfileWorkHistory />
            <ProfileProjectListing />
          </div>
        </Profile>
      </>
    );
  }
}

export default withRouter(
  connect(null, { makeTopNavTransparent, makeTopNavOpaque })(ProfilePage)
);
