import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import bgImgMain from '../assets/bgimg-main.jpeg';

import style, { css } from 'styled-components';
import SvgDots from '../svg/SvgDots';
import LoginForm from '../components/LoginForm';
import { color } from '../utils/variables';

const MIN_HEIGHT = '32rem';

const Section = style.section`
  ${(props) => {
    return css`
      // border: 1px solid red;
      color: black;
      background: linear-gradient(
        180deg,
        rgba(74, 153, 211, 0.5) -71%,
        rgba(74, 153, 211, 0) 71%,
        #ffffff
      );

      .main {
        // border: 1px solid red;
        padding: 2rem 3rem;
        width: 77%;
        margin: 0 auto;
        position: relative;
        &__dots-1 {
          // border: 3px solid red;
          position: absolute;
          top: 0;
          right: 0;
        }
        &__dots-2 {
          // border: 3px solid red;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        &__contents {
          // border: 1px solid red;
          background: #ffffff;
          box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
          border-radius: 10px;
          overflow: hidden;
          // padding: 3rem;
          position: relative; // so that z-index will take effect and position this div above the span of the SVGs. The span of the SVGs with a position of
          z-index: 1;

          &__flex {
            // border: 1px solid red;
            display: flex;
            // flex-direction: row-reverse;
            justify-content: space-between;
            background-image: linear-gradient(
                110deg,
                rgba(74, 153, 211, 0.5) 0%,
                rgba(74, 153, 211, 0.5),
                45%,
                ${color.lightGrey} 45%
              ),
              url(${bgImgMain});
            background-repeat: no-repeat;
            background-size: cover;

            &__left,
            &__right {
              // border: 1px solid salmon;
              // background: rgba(74, 153, 211, 0.1);
              min-height: ${MIN_HEIGHT};
              width: 50%;
            }
            &__left {
              // background-image: linear-gradient(
              //     rgba(74, 153, 211, 0.5) 0%,
              //     rgba(74, 153, 211, 0.5),
              //     100%,
              //     ${color.lightGrey} 100%
              //   ),
              //   url(${bgImgMain});
              // border-top-right-radius: 50%;
              background-repeat: no-repeat;
              background-size: cover;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              &__subtitle {
                // border: 1px solid red;
                color: #183153;
                // background-color: #a3b2be;
                font-weight: bold;
                // text-shadow: 10px -5px rgba(0, 0, 0, 0.1);
                font-size: 1.3rem;
                letter-spacing: 2px;
                display: block;
                margin-bottom: 1.5rem;
              }
            }
            &__right {
              // border: 1px solid red;
              padding: 1rem;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              &__title {
                // border: 1px solid red;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                color: #4a99d3;
                letter-spacing: 0.01em;
                position: absolute;
                top: 2rem;
                &__wrapper {
                  padding-bottom: 0.4rem;
                  border-bottom: 2px solid #4a99d3;
                }
              }
              &__form-container {
                // border: 1px solid red;
                width: 100%;
              }
            }
          }
        }
      }
      @media only screen and (max-width: 768px) {
        .main {
          width: 100%;
          &__contents {
            padding: 1rem;
            &__flex {
              flex-direction: column;
              background-image: none;
              &__right {
                width: 100%;
                &:not(:first-child) {
                  margin-bottom: 4rem;
                }
              }
              &__left {
                display: none;
              }
            }
          }
        }
      }
      @media only screen and (max-width: 540px) {
        .main {
          width: 100%;
          padding: 0;
          &__contents {
            border-radius: 0;
          }
        }
      }
    `;
  }}
`;

function AuthPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <div className="main">
        <span className="main__dots-1">
          <SvgDots />
        </span>
        <div className="main__contents">
          <div className="main__contents__flex">
            <div className="main__contents__flex__left">
              <span
                className="main__contents__flex__left__subtitle"
                data-aos="fade-up"
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(40)
                      .typeString(` Welcome back Kingsley,`)
                      .start();
                  }}
                />
              </span>
              <span
                className="main__contents__flex__left__subtitle"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Please Login
              </span>
            </div>
            <div className="main__contents__flex__right">
              <h6 className="main__contents__flex__right__title">
                <span className="main__contents__flex__right__title__wrapper">
                  Login
                </span>
              </h6>
              <div className="main__contents__flex__right__form-container">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
        <span className="main__dots-2">
          <SvgDots />
        </span>
      </div>
    </Section>
  );
}

export default AuthPage;
