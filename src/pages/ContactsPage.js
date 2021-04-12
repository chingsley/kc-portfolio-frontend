import React from 'react';
import style, { css } from 'styled-components';
import SvgDots from '../svg/SvgDots';
import FormContactMe2 from '../components/FormContactMe2';
import ContactInfo from '../components/ContactInfo';

const MIN_HEIGHT = '22rem';

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

            &__right,
            &__left {
              // border: 1px solid salmon;
              min-height: ${MIN_HEIGHT};
              width: 47%;
            }
            &__left {
              &__hidden-subtitle {
                // border: 1px solid red;
                font-weight: 500;
                font-size: 1.2rem;
                display: inline-block;
                margin-bottom: 1.5rem;
                display: none;
              }
            }
          }
        }
      }
      @media only screen and (max-width: 768px) {
        .main {
          width: 100%;
          &__contents {
            &__subtitle {
              display: none;
            }
            &__flex {
              flex-direction: column-reverse;
              &__left,
              &__right {
                width: 100%;
                &:not(:first-child) {
                  margin-bottom: 4rem;
                }
              }
              &__left {
                &__hidden-subtitle {
                  display: block;
                }
              }
            }
          }
        }
      }
      @media only screen and (max-width: 540px) {
        .main {
          width: 100%;
          padding: 0;
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
          <SvgDots />
        </span>
        <div className="main__contents">
          <h6 className="main__contents__title">
            <span className="main__contents__title__wrapper">Get In Touch</span>
          </h6>
          <span className="main__contents__subtitle">Leave me a message</span>
          <div className="main__contents__flex">
            <div className="main__contents__flex__left">
              <span className="main__contents__flex__left__hidden-subtitle">
                Leave me a message
              </span>
              <FormContactMe2 />
            </div>
            <div className="main__contents__flex__right">
              <ContactInfo />
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

export default ContactsPage;
