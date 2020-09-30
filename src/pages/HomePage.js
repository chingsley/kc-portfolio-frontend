import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../components/Logo';
import PageLoader from '../components/PageLoader';

const HomeDiv = styled.div`
  // border: 1px solid red;
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
`;

class HomePage extends React.Component {
  render() {
    return (
      <HomeDiv>
        <div className="window-content">
          <p className="window-content__primary-text">
            Accurately capture your projects, accomplishments and
            qualifications...
          </p>
          <p className="window-content__secondary-text">
            show your abilities and potentials to prospective employers
          </p>
          <button className="window-content__signup-button">Sign up</button>
        </div>
      </HomeDiv>
    );
  }
}

export default HomePage;
