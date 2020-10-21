import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style, { css } from 'styled-components';
import ProfileMain from '../components/ProfileMain';
import ProfileAbout from '../components/ProfileAbout';
import ProfileSkills from '../components/ProfileSkills';

const Profile = style.div`
.profile {
  // background-color: lightblue;
  display: block;

  &__right-contents {
    // background-color: lightgreen;
    // margin-left: 20%;
  }
}
`;

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props);
    console.log(this.props.match.params.username);
    const { username } = this.props.match.params;
    return (
      <>
        <Profile {...this.props} scrollSideNav={this.state.scrollSideNav}>
          <div className="profile">
            <div className="profile__right-contents">
              <ProfileMain />
              <ProfileAbout />
              <ProfileSkills />
            </div>
          </div>
        </Profile>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default withRouter(connect(mapStateToProps, {})(ProfilePage));
