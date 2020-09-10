import React from 'react';
import styled from 'styled-components';
import KcLink from './KcLink';
import Logo from './Logo';

const Nav = styled.nav`
  font-family: montserrat;
  height: 12vh;
  width: 100%;
  background-color: #fafbfc;

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
    float: right;
    line-height: 12vh;
    margin-right: 2rem;
    cursor: pointer;
    display: none;
  }
  #check {
    display: none;
  }
  .logo {
    color: black;
    text-shadow: 2px 2px #e0e0e0;
    font-size: 2rem;
    line-height: 12vh;
    padding: 0 100px;
    font-weight: bold;
    // background-color: #eb2f06;
  }
  .topnav-ul {
    // border: 1px solid blue;
    float: right;
    margin-right: 20px;

    .topnav-ul-li {
      // border: 1px solid red;
      display: inline-block;
      line-height: 12vh;
      margin: 0 0.2em;
    }
  }
  @media only screen and (max-width: 768px) {
    z-index: 1;
    .logo {
      border: 1px solid red;
      font-size: 1.5rem;
      padding-left: 50px;
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
      float: right;
      margin: 0;
      height: 88vh;
      width: 50%;
      background: #2c3e50;
      text-align: center;
      transition: all 0.5s;

      .topnav-ul-li {
        display: block;
        margin: 0;
        // border: 1px solid white;
        // border-bottom: 0.5px solid grey;

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
      <input type="checkbox" name="mobile-nav-trigger" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label htmlFor="" className="logo">
        KeneJA
      </label>
      {/* <Logo /> */}
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
          />
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
