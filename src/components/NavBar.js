import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import KcLink from './KcLink';
import LogoV2 from './LogoV2';

const Hamburger = styled.div`
  ${(props) => {
    return css`
      // border: 1px solid red;
      cursor: pointer;
      display: none;

      .bar1,
      .bar2,
      .bar3 {
        width: 35px;
        height: 5px;
        background-color: #4a99d3;
        margin: 6px 0;
        transition: 0.4s;
      }

      .show-menu.bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      }

      .show-menu.bar2 {
        opacity: 0;
      }

      .show-menu.bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
      @media only screen and (max-width: 768px) {
        display: block;
      }
    `;
  }}
`;

const Nav = styled.nav`
  ${(props) => {
    return css`
      // border: 1px solid red;
      z-index: 1000;
      position: fixed;
      top: 0;
      height: 12vh;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2em;
      background-color: #fafbfc;

      .navlinks {
        // border: 1px solid blue;
        display: inline-block;

        &__ul {
          &__li {
            // border: 1px solid red;
            display: inline-block;
            line-height: 12vh;
            margin: 0 0.2em;
            padding-top: 15px;
          }
        }
      }

      @media only screen and (max-width: 768px) {
        // border: 1px solid blue;
        z-index: 1000;
        padding: 0 1em;

        .navlinks {
          // border: 3px solid #be2edd;
          position: fixed;
          top: 12vh;
          right: ${props.showHamburgerMenu ? 0 : '-100%'};
          margin: 0;
          padding: 0;
          height: 88vh;
          width: 100%;
          transition: all 0.5s;

          &__ul {
            // border: 1px solid #6ab04c;
            float: right;
            width: 70%;
            height: 100%;
            background: #fafbfc;

            &__li {
              // border: 1px solid green;
              display: block;
              margin: 0;
              text-align: center;

              & * {
                color: #4a99d3 !important;
              }
            }
          }
        }
      }
    `;
  }}
`;

function NavBar(props) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const refNavLinks = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const handleOutsideClick = (e) => {
    if (refNavLinks?.current === e.target) {
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
      <Hamburger ref={hamburgerRef} onClick={toggleHamburgerMenu}>
        <div className={showHamburgerMenu ? 'bar1 show-menu' : 'bar1'}></div>
        <div className={showHamburgerMenu ? 'bar2 show-menu' : 'bar2'}></div>
        <div className={showHamburgerMenu ? 'bar3 show-menu' : 'bar3'}></div>
      </Hamburger>
      <div className="navlinks" ref={refNavLinks}>
        <ul className="navlinks__ul">
          <li className="navlinks__ul__li">
            <KcLink
              text="Home"
              to="/"
              color="#4a99d3"
              bgColorOnHover="#4a99d3"
              colorOnHover="#f5f6fa"
              onClick={toggleHamburgerMenu}
            />
          </li>
          <li className="navlinks__ul__li">
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
          <li className="navlinks__ul__li">
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
      </div>
    </Nav>
  );
}

const mapStateToProps = (state) => ({
  isTransparentTopNav: state.isTransparentTopNav,
});

export default connect(mapStateToProps, {})(withRouter(NavBar));
