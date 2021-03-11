import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from 'styled-components';
import ProfileMain2 from '../components/ProfileMain2';
import ProfileAbout from '../components/ProfileAbout';
import ProfileSkills from '../components/ProfileSkills';
import { makeTopNavTransparent, makeTopNavOpaque } from '../store/actions';
import ProfileEducation from '../components/ProfileEducation';
import ProfileWorkHistory from '../components/ProfileWorkHistory';
import ProfileProjectsListing2 from '../components/ProfileProjectListing2';

const Profile = style.div`
.profile {
    // background-color: #f7f8fc;
    padding: 0;
    padding-bottom: 5rem;
    display: block;

    &__section {
      border: 1px solid #dfe0eb;
      padding: 4rem;
      // background-color: #fffefe;
      &:nth-child(2) {
        // border: 1px solid red;
        // border-bottom-left-radius: 4px;
        // border-bottom-right-radius: 4px;
      }
      &:not(:nth-child(2)) {
        // border: 1px solid red;
        // margin-top: 2rem;
        // border-radius: 4px;
      }

    }
    &__section-about {
      // background: rgba(74, 153, 211, 0.05);
      background-color: #fafbfc;
    }
    &__section-skills {
      // background: rgba(74, 153, 211, 0.1);
    }
}
@media only screen and (max-width: 540px) {
  .profile {
    &__section  {
      // border: 1px solid red;
      padding: 1rem;
    }
  }
}
`;

// border-radius: 0px 6px 6px 0px;

class ProfilePage extends Component {
  render() {
    return (
      <>
        <Profile {...this.props}>
          <div className="profile">
            <ProfileMain2 />
            <div className="profile__section profile__section-about">
              <ProfileAbout />
            </div>
            <div className="profile__section profile__section-skills">
              <ProfileSkills />
            </div>
            {/* <div className="profile__section profile__section-education">
              <ProfileEducation />
            </div>
            <div className="profile__section profile__section-workhistory">
              <ProfileWorkHistory />
            </div> */}
            <div className="profile__section profile__section-projects">
              <ProfileProjectsListing2 />
            </div>
          </div>
        </Profile>
      </>
    );
  }
}

export default withRouter(
  connect(null, { makeTopNavTransparent, makeTopNavOpaque })(ProfilePage)
);
