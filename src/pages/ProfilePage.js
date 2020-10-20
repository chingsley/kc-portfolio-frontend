import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style, { css } from 'styled-components';
import ProfileMain from '../components/ProfileMain';
import ProfileAbout from '../components/ProfileAbout';

const Profile = style.div`
        ${(props) =>
          props.scrollSideNav
            ? css`
                // border: 2px solid red;
                .profile {
                  // background-color: lightblue;
                  display: flex;

                  &__side-nav {
                    // background-color: lightpink;
                    border: 1px solid grey;
                    width: 20%;
                    height: none;
                    position: relative;
                  }

                  &__right-contents {
                    // background-color: lightgreen;
                    // height: 120vh;
                    margin-left: 0;
                    width: 80%;
                  }
                }
              `
            : css`
                .profile {
                  // background-color: lightblue;
                  display: block;

                  &__side-nav {
                    // background-color: yellow;
                    border: 1px solid black;
                    position: fixed;
                    left: 0;
                    top: 12vh;
                    height: 88vh;
                    width: 20%;
                  }

                  &__right-contents {
                    // background-color: lightgreen;
                    margin-left: 20%;
                    height: 120vh;
                  }
                }
              `}
`;

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      scrollSideNav: false,
    };
    this.footerTopRef = React.createRef();
  }

  handleScroll = (e) => {
    const pos = this.footerTopRef?.getBoundingClientRect()?.top;

    if (pos < 902 && !this.scrollSideNav) {
      this.setState({ scrollSideNav: true });
    } else {
      this.setState({ scrollSideNav: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    console.log(this.props);
    console.log(this.props.match.params.username);
    const { username } = this.props.match.params;
    return (
      <>
        <Profile {...this.props} scrollSideNav={this.state.scrollSideNav}>
          <div className="profile" onScroll={() => this.handleScroll()}>
            <div className="profile__side-nav">This is the side nav</div>
            <div className="profile__right-contents">
              <ProfileMain />
              <ProfileAbout />
            </div>
          </div>
        </Profile>
        <div
          className="just-before-footer"
          ref={(element) => (this.footerTopRef = element)}
        ></div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default withRouter(connect(mapStateToProps, {})(ProfilePage));
