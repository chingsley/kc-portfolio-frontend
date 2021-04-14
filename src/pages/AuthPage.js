import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { validatePasswordResetToken } from '../store/actions/auth';
import PageLoader from '../components/PageLoader';

import style, { css } from 'styled-components';
import SvgDots from '../svg/SvgDots';
import PlaceholderComponent from '../components/PlaceholderComponent';
import LoginForm from '../components/LoginForm';

const MIN_HEIGHT = '22rem';

const Section = style.section`
  ${(props) => {
    return css`
      // border: 1px solid red;
      color: black;
      background: linear-gradient(
        180deg,
        rgba(74, 153, 211, 0.5) -71%,
        rgba(74, 153, 211, 0) 71%,
        #ffffff
      );
      .main {
        // border: 1px solid red;
        padding: 2rem 3rem;
        width: 77%;
        margin: 0 auto;
        position: relative;
        &__dots-1 {
          // border: 3px solid red;
          position: absolute;
          top: 0;
          right: 0;
        }
        &__dots-2 {
          // border: 3px solid red;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        &__contents {
          // border: 1px solid lightblue;
          background: #ffffff;
          box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
          border-radius: 10px;
          padding: 3rem;
          position: relative; // so that z-index will take effect and position this div above the span of the SVGs. The span of the SVGs with a position of
          z-index: 1;
          &__title {
            // border: 1px solid red;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 25px;
            letter-spacing: 0.01em;
            color: #4a99d3;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto 2rem;
            &__wrapper {
              padding-bottom: 0.4rem;
              border-bottom: 2px solid #4a99d3;
            }
          }
          &__subtitle {
            font-weight: 500;
            font-size: 1.2rem;
            display: inline-block;
            margin-bottom: 1.5rem;
          }
          &__flex {
            // border: 1px solid red;
            display: flex;
            justify-content: space-between;

            &__right,
            &__left {
              // border: 1px solid salmon;
              // background: rgba(74, 153, 211, 0.1);
              min-height: ${MIN_HEIGHT};
              width: 48%;
            }
            &__right {
              // background-color: #fafbfc;
              border-right: 2px solid rgba(74, 153, 211, 0.2);
              border-bottom: 2px solid rgba(74, 153, 211, 0.2);
            }
            &__left {
              // border: 1px solid red;
              // background: #fafbfc;
              padding: 1rem;
              border-left: 2px solid rgba(74, 153, 211, 0.2);
              border-bottom: 2px solid rgba(74, 153, 211, 0.2);
              &__hidden-subtitle {
                // border: 1px solid red;
                font-weight: 500;
                font-size: 1.2rem;
                display: inline-block;
                margin-bottom: 1.5rem;
                display: none;
              }
            }
          }
        }
      }
      @media only screen and (max-width: 768px) {
        .main {
          width: 100%;
          &__contents {
            padding: 1rem;
            &__subtitle {
              display: none;
            }
            &__flex {
              flex-direction: column;
              &__left {
                width: 100%;
                &:not(:first-child) {
                  margin-bottom: 4rem;
                }
                &__hidden-subtitle {
                  display: block;
                }
              }
              &__right {
                display: none;
              }
            }
          }
        }
      }
      @media only screen and (max-width: 540px) {
        .main {
          width: 100%;
          padding: 0;
          &__contents {
            border-radius: 0;
          }
        }
      }
    `;
  }}
`;

class AuthPage extends React.Component {
  componentDidMount() {
    const {
      location: { pathname },
      match: {
        params: { resetToken },
      },
    } = this.props;
    if (pathname.match(/password\/reset\/*/)) {
      console.log(this.props);
      this.props.validatePasswordResetToken(resetToken, this.props.history);
    }
  }

  render() {
    const { pathname } = this.props.location;
    if (
      pathname.match(/^\/password\/reset\/*/) &&
      !this.props.isValidPasswordResetToken
    ) {
      return <PageLoader />;
    }
    return (
      <Section>
        <div className="main">
          <span className="main__dots-1">
            <SvgDots />
          </span>
          <div className="main__contents">
            <h6 className="main__contents__title">
              <span className="main__contents__title__wrapper">Login</span>
            </h6>
            <span className="main__contents__subtitle">
              Welcome back Kingsley, Please Login
            </span>
            <div className="main__contents__flex">
              <div className="main__contents__flex__left">
                <span className="main__contents__flex__left__hidden-subtitle">
                  Welcome back Kingsley, Please Login
                </span>
                <LoginForm />
              </div>
              <div className="main__contents__flex__right">
                <PlaceholderComponent />
              </div>
            </div>
          </div>
          <span className="main__dots-2">
            <SvgDots />
          </span>
        </div>
      </Section>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isValidPasswordResetToken: state.isValidPasswordResetToken,
  successMessage: state.messages.successMessage,
  infoMessage: state.messages.infoMessage,
  errorMessage: state.messages.errorMessage,
});

export default connect(mapStateToProps, { validatePasswordResetToken })(
  withRouter(AuthPage)
);
