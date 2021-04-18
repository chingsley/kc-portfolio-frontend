import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import profileImg from '../assets/my_profile_img.jpg';
import Typewriter from 'typewriter-effect';
import SvgSquareRings from '../svg/SvgSquareRings';

const Div = styled.div`
  .pp-main {
    // border: 1px solid red;
    position: relative;
    width: 100%;
    min-height: 28rem;
    color: black;
    background-image: linear-gradient(
        105deg,
        rgba(74, 153, 211, 0.5) 0%,
        rgba(74, 153, 211, 0.5),
        50%,
        #fafbfc 50%
      ),
      url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBhdHRlcm5zJTIwd2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60);
    background-repeat: no-repeat;
    background-position: cover;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    // gap: 5%;
    // flex-wrap: wrap;

    &__svg-rings {
      // border: 1px solid red;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: rotateY(180deg);
    }
    &__svg-dots-n-rings {
      // border: 1px solid red;
      position: absolute;
      right: 0;
      // bottom: 0;
    }
    &__left {
      // border: 1px solid #b8e994;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

      &__img-div {
        border-bottom: 5px solid rgba(74, 153, 211, 0.3);
        border-left: 5px solid rgba(74, 153, 211, 0.3);
        border-radius: 50%;
        &__img {
          // border: 1px solid red;
          // border-bottom: 2px solid #d3844a;
          // border-bottom: 2px solid #4a99d3;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          display: block;
          object-fit: cover;
          object-position: 0 0;
          box-shadow: 2px 2px 25px rgb(0 0 0 / 16%);
        }
      }
    }

    &__right {
      // border: 1px solid #34ace0;
      width: 50%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2%;
      text-align: left;

      &__name {
        // border: 1px solid #706fd3;
        // color: #260041;
        // color: #34495e;
        color: #102a42;
        margin: 0;
        padding: 0;
        margin-bottom: 0.8rem;
        font-style: normal;

        font-size: 25px;
        font-weight: 700;
        -webkit-letter-spacing: 5px;
        -moz-letter-spacing: 5px;
        -ms-letter-spacing: 5px;
        letter-spacing: 5px;
        line-height: 1.8;
      }
      &__intro {
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
        // color: #260041;
        // color: #34495e;
        color: #102a42;
        font-size: 16px;
      }
      &__contact-btns {
        min-width: 4rem;
        // margin-top: 2rem;
        position: absolute;
        bottom: 4rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .pp-main {
      height: 88vh;
      flex-direction: column-reverse;
      justify-content: space-between;
      gap: 0;
      overflow: hidden;
      &__left {
        width: 100%;
        padding: 1rem;
        display: block;
        &__img-div {
          border-bottom: none;
          border-left: none;
          &__img {
            // border: 1px solid red;
            display: block;
            float: right;
            margin-right: 10%;
            margin-bottom: 15%;
            width: 100px;
            height: 100px;
          }
        }
      }
      &__right {
        width: 100%;
        height: 50vh;
        // align-items: center;
        text-align: center;

        &__contact-btns {
          display: none;
        }
      }
      &__svg-rings {
        // border: 1px solid red;
        display: none;
      }
      &__svg-dots-n-rings {
        // border: 1px solid red;
        top: 50%;
      }
    }
  }
`;

function ProfileMain2() {
  const [showMainBtns, setShowMainBtns] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Div>
      <div className="pp-main">
        <span className="pp-main__svg-rings">
          <SvgSquareRings color="#D3844A" opacity="0.2" />
        </span>
        <span className="pp-main__svg-dots-n-rings">
          <SvgSquareRings color="rgba(74, 153, 211, 0.3)" />
        </span>
        <div className="pp-main__left">
          <div className="pp-main__left__img-div">
            <img
              src={profileImg}
              alt="profile"
              className="pp-main__left__img-div__img"
            />
          </div>
        </div>
        <div className="pp-main__right">
          <div className="pp-main__right__name">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString(`KINGSLEY ENEJA`)
                  .pauseFor(500)
                  .callFunction(() => {
                    console.log('String typed out!');
                    setShowMainBtns(true);
                  })
                  // .pauseFor(1500)
                  // .changeDeleteSpeed(50)
                  // .deleteChars(8)
                  // .pauseFor(500)
                  // .typeString('C.')
                  .start();
              }}
            />
          </div>
          {showMainBtns && (
            <p
              className="pp-main__right__intro"
              data-aos="fade-down"
              // data-aos-delay={100}
            >
              I'm fullstack software engineer with a zeal for creating simple
              but ingenious solutions on both the backend and the frontend.
            </p>
          )}
        </div>
      </div>
    </Div>
  );
}

export default ProfileMain2;
