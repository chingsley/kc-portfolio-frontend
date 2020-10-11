import React from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import styled from 'styled-components';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const HomeFind = styled.div`
  .home-find {
    // border: 1px solid gray;
    padding-top: 8rem;
    padding-bottom: 4rem; // to be removed

    &__title {
      // border: 1px solid gray;
      text-align: center;
      letter-spacing: 0.5px;
      // font-weight: 400;
      // color: #0d202f;
    }
    &__search-area {
      border: 1px solid black;
      border-radius: 3px;
      overflow: hidden;
      width: 35%;
      text-align: center;
      display: flex;
      height: 2.5rem;
      margin: auto;

      &__input {
        border: none;
        // border: 1px solid red;
        display: block;
        width: 70%;
        height: 100%;
        outline: none;
      }
      &__btn {
        border: none;
        outline: none;
        display: block;
        width: 30%;
        height: 100%;
        background-color: black;
        color: white;
        font-weight: 400;
        cursor: pointer;
        // box-sizing: border-box;
      }
    }
  }
`;

const HomeFindSection = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <HomeFind>
      <div className="home-find">
        <h3 className="home-find__title">Looking for someone? search below</h3>
        <div className="home-find__search-area" data-aos="fade-up">
          <input type="text" className="home-find__search-area__input" />
          <button className="home-find__search-area__btn">search</button>
        </div>
      </div>
    </HomeFind>
  );
};

export default withRouter(HomeFindSection);
