import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import profileImg from '../assets/my_profile_img.jpg';
import KcLink from './KcLink';
import Typewriter from 'typewriter-effect';
import SvgSquareDotsCombo from '../svg/SvgSquareDotsCombo';
import SvgSquareRings from '../svg/SvgSquareRings';
import SvgDots from '../svg/SvgDots';

const Div = styled.div`
  .pp-main {
    // border: 1px solid red;
    position: relative;
    width: 100%;
    min-height: 25rem;
    color: black;
    background: linear-gradient(
      180deg,
      rgba(74, 153, 211, 0.5) -71%,
      rgba(74, 153, 211, 0) 71%,
      #ffffff
    );
    display: flex;
    justify-content: center;
    gap: 5%;
    flex-wrap: wrap;

    &__svg-rings {
      position: absolute;
      left: 0;
      bottom: 0;
      transform: rotateY(180deg);
    }
    &__svg-dots-n-rings {
      position: absolute;
      right: 0;
      // bottom: 0;
    }
    &__left {
      // border: 1px solid #b8e994;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      &__img {
        // border: 1px solid red;
        border-bottom: 2px solid #d3844a;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: block;
        object-fit: cover;
        object-position: 0 0;
      }
    }

    &__right {
      // border: 1px solid #34ace0;
      width: 40%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &__name {
        // border: 1px solid #706fd3;
        // color: #0a3d62;
        color: #260041;
        // font-size: 32px;
        margin: 0;
        padding: 0;
        margin-bottom: 0.8rem;

        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 70px;
        letter-spacing: 0.02em;
      }
      &__profession,
      &__location {
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
        // color: #0a3d62;
        color: #260041;
        font-size: 18px;
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
        // height: 38vh;
        &__img {
          width: 100px;
          height: 100px;
        }
      }
      &__right {
        width: 100%;
        height: 50vh;
        align-items: center;
        &__name {
          font-size: 38px;
        }
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
          {/* <SvgSquareRings color="#D3844A" opacity="0.2" /> */}
          <SvgDots />
        </span>
        <span className="pp-main__svg-dots-n-rings">
          {/* <SvgSquareDotsCombo /> */}
          <SvgSquareRings />
        </span>
        <div className="pp-main__left">
          <img src={profileImg} alt="profile" className="pp-main__left__img" />
        </div>
        <div className="pp-main__right">
          <p className="pp-main__right__name">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString('Kingsley Eneja')
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
          </p>
          <p className="pp-main__right__profession">Software Engineer</p>
          <p className="pp-main__right__location">Lagos, Nigeria</p>
          {showMainBtns && (
            <div className="pp-main__right__contact-btns">
              <KcLink
                color="white"
                bgColor="#4a99d3"
                bgColorOnHover="#4a99d3"
                fontSize="0.8rem"
                colorOnHover="white"
                // border="1px solid grey"
                text="RESUME"
                to="/resume/download"
                data-aos="fade-down"
                data-aos-delay={100}
              />{' '}
              <KcLink
                color="white"
                bgColor="#4a99d3"
                bgColorOnHover="black"
                colorOnHover="white"
                // border="1px solid grey"
                text="PROJECTS"
                fontSize="0.8rem"
                to="/projects"
                data-aos="fade-down"
                data-aos-delay={500}
              />
            </div>
          )}
        </div>
      </div>
    </Div>
  );
}

export default ProfileMain2;

/* New E-commerce App best for You */

// position: absolute;
// width: 595px;
// height: 140px;
// left: 245px;
// top: 233px;

// font-family: Objective;
// width: 595px;
// height: 140px;
// font-style: normal;
// font-weight: 500;
// font-size: 50px;
// line-height: 70px;
// letter-spacing: 0.02em;

// color: #260041;
