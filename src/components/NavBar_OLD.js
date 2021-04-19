import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import KcLink from './KcLink';
import LogoV2 from './LogoV2';
import XButton from './XButton';

const Nav = styled.nav`
  ${(props) => {
    return css`
      // border: 1px solid red;
      z-index: 1000;
      position: fixed;
      top: 0;
      // font-family: montserrat;
      height: 12vh;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2em;
      background-color: #fafbfc;

      & > * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
      }
      .checkbtn {
        font-size: 30px;
        color: black;
        line-height: 12vh;
        cursor: pointer;
        display: none;
      }
      #check {
        display: none;
      }
      .topnav-ul {
        // border: 1px solid blue;
        display: inline-block;

        .topnav-ul-li {
          // border: 1px solid red;
          display: inline-block;
          line-height: 12vh;
          margin: 0 0.2em;
          padding-top: 15px;
        }
      }

      @media only screen and (max-width: 768px) {
        // border: 1px solid blue;
        z-index: 1000;
        padding: 0 1em;

        .checkbtn {
          // border: 1px solid red;
          display: block;
          &__hamburger-menu {
            color: #4a99d3;
          }
        }
        .topnav-ul {
          position: fixed;
          // top: 12vh;
          top: 0;
          // left: -100%;
          right: -100%;
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 70%;
          background: #fafbfc;
          transition: all 0.5s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          // position: relative;

          &__close-nav {
            position: absolute;
            top: 1.3rem;
            right: 1rem;
          }

          .topnav-ul-li {
            // border: 1px solid green;
            display: block;
            margin: 0;
            text-align: center;

            & * {
              color: #4a99d3 !important;
            }
          }
        }
        #check:checked ~ .topnav-ul {
          // left: 0;
          right: 0;
        }
      }
    `;
  }}
`;

function NavBar(props) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const refSlidingNav = useRef(null);

  const toggleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu);

  const handleOutsideClick = (e) => {
    if (!refSlidingNav?.current.contains(e.target) && showHamburgerMenu) {
      setShowHamburgerMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  return (
    <Nav {...props} showHamburgerMenu={showHamburgerMenu}>
      <LogoV2 />
      <input
        type="checkbox"
        name="mobile-nav-trigger"
        id="check"
        checked={showHamburgerMenu}
        onClick={toggleHamburgerMenu}
        readOnly
      />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars checkbtn__hamburger-menu"></i>
      </label>
      <ul className="topnav-ul" ref={refSlidingNav}>
        <span
          className="topnav-ul__close-nav"
          onClick={() => setShowHamburgerMenu(false)}
        >
          <XButton />
        </span>
        <li className="topnav-ul-li">
          <KcLink
            text="Home"
            to="/"
            color="#4a99d3"
            bgColorOnHover="#4a99d3"
            colorOnHover="#f5f6fa"
            onClick={toggleHamburgerMenu}
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="Projects"
            to="/projects"
            color="#4a99d3"
            bgColorOnHover="#4a99d3"
            colorOnHover="#f5f6fa"
            onClick={toggleHamburgerMenu}
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="Sign In"
            to="/login"
            color="#4a99d3"
            bgColorOnHover="#4a99d3"
            colorOnHover="#f5f6fa"
            onClick={toggleHamburgerMenu}
            data-testid="signin-nav-link"
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="Contact Me"
            to="/contacts"
            color="#4a99d3"
            bgColorOnHover="#4a99d3"
            colorOnHover="#f5f6fa"
            onClick={toggleHamburgerMenu}
          />
        </li>
      </ul>
    </Nav>
  );
}

const mapStateToProps = (state) => ({
  isTransparentTopNav: state.isTransparentTopNav,
});

export default connect(mapStateToProps, {})(withRouter(NavBar));
