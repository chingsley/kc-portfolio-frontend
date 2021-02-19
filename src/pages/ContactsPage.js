import React from 'react';
import style, { css } from 'styled-components';
import EmailIcon from '../svg/EmailIcon';
import FacebookIcon from '../svg/FacebookIcon';
import InstagramIcon from '../svg/InstagramIcon';
import LocationIcon from '../svg/LocationIcon';
import PhoneIcon from '../svg/PhoneIcon';
import Svg1 from '../svg/Svg1';
import TwitterIcon from '../svg/TwitterIcon';
import locationImage from '../assets/my_location.png';

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
          // border: 1px solid lightblue;
          background: #ffffff;
          box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
          border-radius: 10px;
          padding: 3rem;
          position: relative; // so that z-index will take effect and position this div above the span of the SVGs. The span of the SVGs with a position of
          z-index: 1;
          &__title {
            // border: 1px solid red;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 25px;
            letter-spacing: 0.01em;
            color: #4a99d3;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto 2rem;
            &__wrapper {
              padding-bottom: 0.4rem;
              border-bottom: 2px solid #4a99d3;
            }
          }
          &__subtitle {
            font-weight: 500;
            font-size: 1.2rem;
            display: inline-block;
            margin-bottom: 1.5rem;
          }
          &__flex {
            // border: 1px solid yellow;
            display: flex;
            justify-content: space-between;

            &__left {
              // border: 1px solid salmon;
              width: 47%;
              min-height: 22rem;
              &__form {
                // border: 1px solid green;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                &__input,
                &__textarea {
                  padding: 0.8rem;
                  width: 100%;
                  border: 1.2px solid #b4bec8;
                  box-sizing: border-box;
                  border-radius: 4px;
                  outline: none;
                }
                &__input {
                  height: 2.8rem;
                }
                &__btn {
                  background: #4a99d3;
                  border: none;
                  outline: none;
                  border-radius: 4px;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 18px;
                  height: 2.8rem;
                  line-height: 19px;
                  color: #ffffff;
                  margin-top: 1rem;
                }
              }
            }
            &__right {
              // border: 1px solid salmon;
              min-height: 22rem;
              width: 47%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: space-between;
              &__contact-details {
                // border: 1px solid blue;
                margin: 0;
                display: flex;

                &__icon {
                  // border: 1px solid red;
                  margin-right: 1rem;
                }
                &__map-img {
                  // border: 2px solid red;
                  width: 20rem;
                  border-radius: 4px;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
    `;
  }}
`;

function ContactsPage() {
  return (
    <Section>
      <div className="main">
        <span className="main__dots-1">
          <Svg1 />
        </span>
        <div className="main__contents">
          <h6 className="main__contents__title">
            <span className="main__contents__title__wrapper">Get In Touch</span>
          </h6>
          <span className="main__contents__subtitle">Leave me a message</span>
          <div className="main__contents__flex">
            <div className="main__contents__flex__left">
              <form action="" className="main__contents__flex__left__form">
                <input
                  type="text"
                  className="main__contents__flex__left__form__input"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="main__contents__flex__left__form__input"
                  placeholder="Your Email Address"
                />
                <textarea
                  className="main__contents__flex__left__form__textarea"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
                <button className="main__contents__flex__left__form__btn">
                  Send
                </button>
              </form>
            </div>
            <div className="main__contents__flex__right">
              <p className="main__contents__flex__right__contact-details">
                <div className="main__contents__flex__right__contact-details__icon">
                  <LocationIcon />
                </div>

                <div>
                  13 Adeniji Street, The View Apartment, Atlantic View estate,
                  New Road Lekki, Lagos Nigeria
                </div>
              </p>
              <p className="main__contents__flex__right__contact-details">
                <div className="main__contents__flex__right__contact-details__icon">
                  <PhoneIcon />
                </div>
                +234 0810 903 7816
              </p>
              <p className="main__contents__flex__right__contact-details">
                <div className="main__contents__flex__right__contact-details__icon">
                  <EmailIcon />
                </div>
                eneja.kc@gmail.com
              </p>
              <p className="main__contents__flex__right__contact-details">
                <div className="main__contents__flex__right__contact-details__icon">
                  <FacebookIcon />
                </div>
                <div className="main__contents__flex__right__contact-details__icon">
                  <InstagramIcon />
                </div>
                <div className="main__contents__flex__right__contact-details__icon">
                  <TwitterIcon />
                </div>
              </p>
              <p className="main__contents__flex__right__contact-details">
                <img
                  className="main__contents__flex__right__contact-details__map-img"
                  src={locationImage}
                  alt="my location"
                />
              </p>
            </div>
          </div>
        </div>
        <span className="main__dots-2">
          <Svg1 />
        </span>
      </div>
    </Section>
  );
}

export default ContactsPage;
