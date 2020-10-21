import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/my_profile_img.jpg';
import KcLink from './KcLink';
const height = '50vh';
const Div = styled.div`
  .pp-main {
    // border: 1px solid red;
    position: relative;
    width: 100%;
    height: 40vh;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 0.7) 100%
      ),
      // url(https://images.unsplash.com/photo-1490410006060-e1dc82ab0a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
      url(https://media.istockphoto.com/photos/blue-abstract-background-with-hexagon-picture-id1267148622?s=170x170);
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: top;

    &__img {
      // border: 1px solid red;
      // border-bottom: 2px solid #f43544;
      position: absolute;
      right: 2rem;
      bottom: -5rem;
      // z-index: -1;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      display: block;
      object-fit: cover;
      object-position: 0 0;
    }

    &__basic-info {
      // border: 1px solid grey;
      z-index: 3;
      color: white;
      padding-left: 2rem;
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;

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
      &__contact-btn {
        min-width: 4rem;
        position: absolute;
        bottom: 1rem;
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
          <div className="pp-main__basic-info__contact-btn">
            <KcLink
              color="white"
              bgColorOnHover="black"
              fontSize="0.8rem"
              colorOnHover="white"
              border="1px solid grey"
              text="CONTACT ME"
            />{' '}
            <KcLink
              color="white"
              bgColorOnHover="black"
              colorOnHover="white"
              border="1px solid grey"
              text="FOLLOW ME"
              fontSize="0.8rem"
            />
          </div>
        </div>
      </div>
    </Div>
  );
}

export default ProfileMain;
