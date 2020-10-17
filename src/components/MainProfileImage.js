import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/my_profile_img.jpg';
console.log(profileImg);

const Div = styled.div`
  .pp-main {
    height: 50vh;
    background-image: linear-gradient(
      -270deg,
      rgba(0, 0, 0, 1) 0,
      rgba(0, 0, 0, 0.5) 100%
    );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: rgba(255, 255, 255, 0.8);
    position: relative;

    &__basic-info {
      border: 1px solid grey;
      display: inline-block;
      position: absolute;
      top: 10%;
      left: 10%;

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
  .test {
    border: 1px solid red;
    position: relative;
    // z-index: 2;
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(
      226deg,
      rgba(0, 0, 0, 0.2) 0,
      rgba(0, 0, 0, 0.5) 100%
    );

    &__img {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &__overlay-text {
      position: relative;
      // top: -10px;
      z-index: 3;
      color: white;

      &__basic-info {
        border: 1px solid grey;
        display: inline-block;
        // position: absolute;
        top: 10%;
        left: 10%;

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
  }
`;

function MainProfileImage() {
  return (
    <Div>
      <div className="pp-main">
        <div className="pp-main__basic-info">
          <h3 className="pp-main__basic-info__name">Eneja Kingsley</h3>
          <p className="pp-main__basic-info__profession">Software Engineer</p>
          <p className="pp-main__basic-info__location">Abuja, Nigeria</p>
        </div>
      </div>
      <div className="test">
        <img src={profileImg} alt="profile" className="test__img" />
        <div className="test__overlay-text">
          <div className="test__overlay-text__basic-info">
            <h3 className="test__overlay-text__basic-info__name">
              Eneja Kingsley
            </h3>
            <p className="test__overlay-text__basic-info__profession">
              Software Engineer
            </p>
            <p className="test__overlay-text__basic-info__location">
              Abuja, Nigeria
            </p>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default MainProfileImage;
