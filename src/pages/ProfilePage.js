import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from 'styled-components';
import ProfileMain from '../components/ProfileMain';
import ProfileAbout from '../components/ProfileAbout';
import ProfileSkills from '../components/ProfileSkills';
import { makeTopNavTransparent, makeTopNavOpaque } from '../store/actions';

const Profile = style.div`
.profile {
  // background-color: lightblue;
  display: block;
}
`;

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      isTransparentNavBar: false,
    };
    this.refMainLowerBorder = React.createRef();
  }

  monitorNavBar = () => {
    const pos = this.refMainLowerBorder?.getBoundingClientRect()?.top;
    console.log(pos);
    if (pos < 55 && this.state.isTransparentNavBar) {
      this.setState({ isTransparentNavBar: false });
      this.props.makeTopNavOpaque();
    } else if (pos > 55 && !this.state.isTransparentNavBar) {
      this.setState({ isTransparentNavBar: true });
      this.props.makeTopNavTransparent();
    }
  };

  componentDidMount = () => {
    this.monitorNavBar();
    window.addEventListener('scroll', this.monitorNavBar);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.monitorNavbar);
  }

  render() {
    console.log(this.props);
    console.log(this.props.match.params.username);
    // const { username } = this.props.match.params;
    return (
      <>
        <Profile {...this.props} scrollSideNav={this.state.scrollSideNav}>
          <div className="profile">
            <ProfileMain />
            <div
              ref={(element) => (this.refMainLowerBorder = element)}
              className="profile__main-lower-border"
            ></div>
            <ProfileAbout />
            <ProfileSkills />
          </div>
        </Profile>
      </>
    );
  }
}

export default withRouter(
  connect(null, { makeTopNavTransparent, makeTopNavOpaque })(ProfilePage)
);
