import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import profileImg from '../assets/my_profile_img.jpg';
import Typewriter from 'typewriter-effect';
import SvgSquareRings from '../svg/SvgSquareRings';
import SocialMediaIcons from './SocialMediaIcons';
import bgImgMain from '../assets/bgimg-main.jpeg';
import { color } from '../utils/variables';

const Div = styled.div`
  .pp-main {
    // border: 1px solid red;
    position: relative;
    width: 100%;
    min-height: 80vh;
    color: black;
    background-image: linear-gradient(
        105deg,
        rgba(74, 153, 211, 0.5) 0%,
        rgba(74, 153, 211, 0.5),
        50%,
        ${color.lightGrey} 50%
      ),
      url(${bgImgMain});
    background-repeat: no-repeat;
    background-size: cover;
    // background-position: center;
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
      border: 1px solid #b8e994;
      // background-image: url(${profileImg});
      background-image: linear-gradient(
          rgba(74, 153, 211, 0.5) 0%,
          rgba(74, 153, 211, 0.5) 100%
        ),
        url(/static/media/my_profile_img.47c3dea5.jpg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: -1;

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
      &__icons {
        // border: 1px solid red;
        position: absolute;
        bottom: 0;
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

      &__content {
        // border: 1px solid red;
        padding-right: 1rem;
        height: 14rem;
        &__name {
          // border: 1px solid #706fd3;
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
        &__resume-btn {
          display: inline-block;
          background-color: rgba(211, 132, 74, 0.8);
          padding: 0.5rem 1rem;
          color: #102a42;
          cursor: pointer;
          border-radius: 2px;
          margin-top: 1rem;
          float: right;
          text-decoration: none;
          font-weight: bold;
          box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .pp-main {
      // border: 1px solid red;
      height: 88vh;
      flex-direction: column-reverse;
      justify-content: space-between;
      gap: 0;
      overflow: hidden;
      &__left {
        // border: 1px solid red;
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
            // margin-right: 1rem;
            // margin-bottom: 15%;
            width: 150px;
            height: 150px;
          }
        }
        &__icons {
          display: none;
        }
      }
      &__right {
        // border: 1px solid red;
        width: 100%;
        height: 50vh;
        text-align: center;
        flex-grow: 1;

        &__content {
          &__resume-btn {
            float: none;
            margin-top: 2rem;
          }
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
            {/* <img
              src={profileImg}
              alt="profile"
              className="pp-main__left__img-div__img"
            /> */}
          </div>

          {showMainBtns && (
            <>
              <div
                className="pp-main__left__icons"
                data-aos="fade-up"
                data-aos-delay={1000}
              >
                <SocialMediaIcons horizontalSpacing="2.5rem" />
              </div>
            </>
          )}
        </div>
        <div className="pp-main__right">
          <div className="pp-main__right__content">
            <div
              className="pp-main__right__content__name"
              data-aos="fade-down"
              data-aos-delay={100}
            >
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
              <>
                <p
                  className="pp-main__right__content__intro"
                  data-aos="fade-up"
                >
                  I'm a fullstack software engineer with a zeal for creating
                  simple but ingenious solutions on both the backend and the
                  frontend.
                </p>
                <a
                  className="pp-main__right__content__resume-btn"
                  href="https://enejakc.netlify.app/kingsley_eneja_resume.pdf"
                  data-aos="fade-up"
                  data-aos-delay={1000}
                >
                  View Resume
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </Div>
  );
}

export default ProfileMain2;
