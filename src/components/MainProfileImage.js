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
    display: inline-block;
    position: relative;
  }
  .test:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: url('${profileImg}') repeat;
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
        <img
          src={'../assets/logo_2.jpg'}
          alt="profile"
          width="100px"
          height="100px"
          className="testing__img"
        />
      </div>
    </Div>
  );
}

export default MainProfileImage;
