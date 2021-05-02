import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from 'styled-components';
import ProfileMain4 from '../components/ProfileMain4';
import ProfileAbout from '../components/ProfileAbout';
import ProfileSkills from '../components/ProfileSkills2';
import { makeTopNavTransparent, makeTopNavOpaque } from '../store/actions';
// import ProfileEducation from '../components/ProfileEducation';
import ProfileWorkHistory from '../components/ProfileWorkHistory';
import ProfileProjectsListing from '../components/ProfileProjectListing';
import SvgSquareRings from '../svg/SvgSquareRings';
import SvgDots from '../svg/SvgDots';
import { color } from '../utils/variables';

const Profile = style.div`
.profile {
    // background-color: #f7f8fc;
    padding: 0;
    padding-bottom: 5rem;
    display: block;

    &__section {
      // border: 1px solid #dfe0eb;
      position: relative;
      padding: 4rem;
      
      &__svg-top-left {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
      &__svg-top-right {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
      }
      &__svg-bottom-right {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 9;
      }
      &__svg-bottom-left {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
      }

    }
    &__section-about {
      background-color: ${color.lightGrey};
    }
    &__section-skills {
      // background: rgba(74, 153, 211, 0.1);
    }
    &__section-workhistory {
      background-color: ${color.lightGrey};
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

class ProfilePage extends Component {
  render() {
    return (
      <>
        <Profile {...this.props}>
          <div className="profile">
            <ProfileMain4 />
            <div className="profile__section profile__section-about">
              <span className="profile__section__svg-top-right">
                <SvgSquareRings color="#D3844A" opacity="0.1" />
              </span>
              <ProfileAbout />
            </div>
            <div className="profile__section profile__section-skills">
              <span className="profile__section__svg-top-right">
                <SvgDots />
              </span>
              <ProfileSkills />
            </div>
            {/* <div className="profile__section profile__section-education">
              <ProfileEducation />
            </div> */}
            <div className="profile__section profile__section-workhistory">
              <span className="profile__section__svg-top-right">
                <SvgSquareRings opacity="0.1" />
              </span>
              <ProfileWorkHistory />
            </div>
            <div className="profile__section profile__section-projects">
              <span className="profile__section__svg-top-right">
                <SvgDots />
              </span>
              <ProfileProjectsListing />
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
