import React from 'react';
import styled from 'styled-components';
import KcLink from './KcLink';

const Nav = styled.div`
  // border: 1px solid red;
  height: 12vh;
  background-color: #fafbfc;
  // box-shadow: 0 20px 20px -28px #34495e;
  // border-bottom: 1px solid rgba(128, 128, 128, 0.2);

  position: fixed;
  top: 0;
  width: 100%;

  .nav-ul {
    // border: 1px solid #2980b9;
    margin: 0;
    height: 100%;
    display: flex;
    padding: 0;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    list-style-type: none;

    li {
      margin-right: 1.3rem;
    }
  }
`;

function NavBar() {
  return (
    <Nav>
      <ul className="nav-ul">
        <li>
          <KcLink
            text="Home"
            to="/home"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="#f5f6fa"
          />
        </li>
        <li>
          <KcLink
            text="Projects"
            to="/projects"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="white"
          />
        </li>
        <li>
          <KcLink
            text="Sign In"
            to="/account"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="#f5f6fa"
          />
        </li>
        <li>
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
