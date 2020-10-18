import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/my_profile_img.jpg';
console.log(profileImg);

const Div = styled.div`
  .pp-main {
    // border: 1px solid red;
    position: relative;
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(
      226deg,
      rgba(0, 0, 0, 0.7) 0,
      rgba(0, 0, 0, 0.7) 100%
    );

    &__img {
      // border: 1px solid red;
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &__basic-info {
      // border: 1px solid grey;
      // position: relative;
      z-index: 3;
      color: white;

      display: inline-block;
      position: absolute;
      top: 50vh;
      margin-top: -100px; // -100px is half the 'assumed' height of this div
      left: 50%;
      width: 400px;
      margin-left: -200px; // -200px is half the width of this div

      &__name {
        font-weight: 400;
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
      }
      &__profession {
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
      }
      &__location {
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
      }
    }
  }
`;

function ProfileMain() {
  return (
    <Div>
      <div className="pp-main">
        <img src={profileImg} alt="profile" className="pp-main__img" />
        <div className="pp-main__basic-info">
          <h3 className="pp-main__basic-info__name">Eneja Kingsley</h3>
          <p className="pp-main__basic-info__profession">Software Engineer</p>
          <p className="pp-main__basic-info__location">Lagos, Nigeria</p>
        </div>
      </div>
    </Div>
  );
}

export default ProfileMain;
