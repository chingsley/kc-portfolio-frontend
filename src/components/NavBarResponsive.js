import React from 'react';
import styled from 'styled-components';
import KcLink from './KcLink';

const Nav = styled.nav`
  // border: 1px solid red;
  font-family: montserrat;
  height: 12vh;
  width: 100%;
  background-color: #fafbfc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;

  position: fixed;
  top: 0;

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
    }
  }
  @media only screen and (max-width: 768px) {
    // border: 1px solid green;
    z-index: 2;
    padding: 0 1em;
    .logo {
      border: 1px solid red;
      font-size: 1.5rem;
      // padding-left: 50px;
    }
    .checkbtn {
      display: block;
    }
    .topnav-ul {
      // border: 1px solid red;
      position: fixed;
      top: 12vh;
      // left: -100%;
      right: -100%;
      margin: 0;
      height: 88vh;
      width: 50%;
      background: #2c3e50;
      text-align: center;
      transition: all 0.5s;

      .topnav-ul-li {
        // border: 1px solid white;
        display: block;
        margin: 0;

        & * {
          color: white !important;
        }
      }
    }
    #check:checked ~ .topnav-ul {
      // left: 0;
      right: 0;
    }
  }
`;

function NavBar() {
  return (
    <Nav>
      {/* <Logo width="80px" mobile_width="120px" /> */}
      <p>logo</p>
      <input type="checkbox" name="mobile-nav-trigger" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <ul className="topnav-ul">
        <li className="topnav-ul-li">
          <KcLink
            text="Home"
            to="/"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="#f5f6fa"
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="Projects"
            to="/projects"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="white"
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="Sign In"
            to="/login"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="#f5f6fa"
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="Sign Up"
            to="/signup"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="#f5f6fa"
            data-testid="signup-nav-link"
          />
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
