import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { makeTopNavTransparent, makeTopNavOpaque } from '../store/actions';

const Home = styled.div`
  // overflow-y: scroll;
  // height: 90vh;
  // border: 1px solid transparent;

  .main-window {
    // border: 1px solid red;
    margin-top: -12vh;
    height: 78vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 8rem;
    color: white;
    // background-image: linear-gradient(226deg, #3e3e3e 0, #000 100%);
    background-image: linear-gradient(
        -270deg,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 0.7) 100%
      ),
      url(https://images.unsplash.com/photo-1549818771-cb569f554ac7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
    background-position: 0% 50%;
    // background-position: center;

    .window-content {
      // border: 1px solid red;
      width: 40%;
      color: fcfcfc;

      &__primary-text {
        // border: 1px solid salmon;
        font-size: 2rem;
      }
      &__secondary-text {
        // border: 1px solid salmon;
        font-weight: bold;
      }
      &__signup-button {
        border: none;
        outline: none;
        background-color: #f43544;
        color: white;
        padding: 3px 45px;
        border-radius: 3px;
      }
    }
  }
  .features {
    border: 1px solid red;
    height: 150rem;
    width: 20rem;
  }
`;

class HomePage extends React.Component {
  constructor() {
    super();
    this.featuresRef = React.createRef();
    this.state = {
      isTransparentNavBar: false,
    };
  }

  monitorNavBar = (e) => {
    const pos = this.featuresRef.getBoundingClientRect().top;
    console.log(pos);
    if (pos < 55 && this.state.isTransparentNavBar) {
      this.setState({ isTransparentNavBar: false });
      this.props.makeTopNavOpaque();
    } else if (pos > 55 && !this.state.isTransparentNavBar) {
      this.setState({ isTransparentNavBar: true });
      this.props.makeTopNavTransparent();
    }
  };

  dummyFunction = (e) => {
    console.log(e);
    this.monitorNavBar();
  };

  componentDidMount = () => {
    this.monitorNavBar();
    window.addEventListener('scroll', this.monitorNavBar);
    // window.addEventListener('scroll', this.dummyFunction);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.monitorNavbar);
  }

  componentDidUpdate() {
    // console.log(this.state.isTransparentNavBar);
  }

  render() {
    // this.monitorNavbar(this.featureRef)
    return (
      <Home>
        <div className="main-window">
          <div className="window-content">
            <p className="window-content__primary-text">
              We capture your projects, accomplishments and qualifications...
            </p>
            <p className="window-content__secondary-text">
              showing your abilities and potentials to prospective employers
            </p>
            <button className="window-content__signup-button">Sign up</button>
          </div>
        </div>
        <div
          ref={(element) => (this.featuresRef = element)}
          className="features"
        ></div>
      </Home>
    );
  }
}

export default connect(null, { makeTopNavTransparent, makeTopNavOpaque })(
  HomePage
);
