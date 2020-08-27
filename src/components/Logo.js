import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  width: 18rem;
  height: 25px;
  display: flex;
  margin-bottom: 2rem;

  .logo-title {
    height: 100%;
    font-weight: 700;
    font-size: 1.8rem;
    text-shadow: 2px 2px #e0e0e0;
    box-sizing: border-box;
    display: flex;
    justify-items: center;
    align-items: center;
    padding-left: 0.5rem;
    padding-top: 0;

    /* border: 1px solid black; */
  }

  .logo {
    width: 25px;
    height: 100%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    overflow: hidden;
    background-image: url('./logo_2.jpg');
    background-position: center;
    background-repeat: no-repeat;

    /* border: 1px solid red; */
  }
`;

export default () => (
  <Logo>
    {/* <div className="logo-container"> */}
    <div className="logo" />
    <div className="logo-title">Ching</div>
    {/* </div> */}
  </Logo>
);
