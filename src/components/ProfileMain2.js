import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import profileImg from '../assets/my_profile_img.jpg';
import KcLink from './KcLink';
import Typewriter from 'typewriter-effect';
import Svg1 from '../svg/Svg1';
import SvgSquareDotsCombo from '../svg/SvgSquareDotsCombo';

const Div = styled.div`
  .pp-main {
    // border: 1px solid red;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    // border-bottom: 1px solid #4a99d3;
    position: relative;
    width: 100%;
    height: 50vh;
    color: black;
    background: linear-gradient(
      180deg,
      rgba(74, 153, 211, 0.5) -71%,
      rgba(74, 153, 211, 0) 71%,
      #ffffff
    );

    &__dots-1 {
      position: absolute;
      left: 0;
      // bottom: 0;
    }
    &__dots-2 {
      position: absolute;
      right: 0;
      // bottom: 0;
    }

    &__img {
      // border: 1px solid red;
      border-bottom: 2px solid #d3844a;
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
      // border-right: 1px solid rgba(74, 153, 211, 0.2);
      border-right: 1px solid #d3844a;
      z-index: 3;
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
        // color: #f43544;
      }
      &__location {
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
        // color: #f43544;
      }
      &__contact-btn {
        min-width: 4rem;
        position: absolute;
        bottom: 1rem;
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
        {/* <span className="pp-main__dots-1">
          <Svg1 />
        </span> */}
        <span className="pp-main__dots-2">
          <SvgSquareDotsCombo />
        </span>
        <img src={profileImg} alt="profile" className="pp-main__img" />
        <div className="pp-main__basic-info">
          <h3 className="pp-main__basic-info__name">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString('Eneja Kingsley Chinonso')
                  .callFunction(() => {
                    console.log('String typed out!');
                    setShowMainBtns(true);
                  })
                  .pauseFor(1500)
                  // .deleteAll()
                  // .callFunction(() => {
                  //   console.log('All strings were deleted');
                  // })
                  .changeDeleteSpeed(50)
                  .deleteChars(8)
                  .pauseFor(500)
                  .typeString('C.')
                  .start();
              }}
            />
          </h3>
          <p className="pp-main__basic-info__profession">Software Engineer</p>
          <p className="pp-main__basic-info__location">Lagos, Nigeria</p>
          {showMainBtns && (
            <div className="pp-main__basic-info__contact-btn">
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
              />{' '}
              {/* <KcLink
                color="white"
                bgColorOnHover="black"
                colorOnHover="white"
                border="1px solid grey"
                text="CONTACT ME"
                fontSize="0.8rem"
                to="/contacts"
                data-aos="fade-down"
                data-aos-delay={1000}
              />{' '} */}
            </div>
          )}
        </div>
      </div>
    </Div>
  );
}

export default ProfileMain2;
