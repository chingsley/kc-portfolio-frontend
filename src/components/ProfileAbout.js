import React from 'react';
import styled from 'styled-components';
import KcLink from './KcLink';
import ProfileSectionHeader from './ProfileSectionHeader';

const Section = styled.section`
  // border: 1px solid red;

  .pp-about {
    &__description {
      border: 1px solid gray;
    }
    &__main-skills {
      border: 1px solid gray;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;

      &__skill {
        // border: 1px solid red;
        width: 33.333%;
        width: 30%;
        height: 8rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.17) 0px 0px 56px -8px;
        // padding: 1.5em;
        // border-bottom: 2px solid rgb(44, 152, 240);
        border-bottom: 2px solid rgb(236, 84, 83);

        &__icon {
          // border: 1px solid blue;
          font-size: 30px;
          color: rgb(44, 152, 240);
          // color: rgb(236, 84, 83);
        }
        &__title {
          font-family: Quicksand, Arial, sans-serif;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    &__banner {
      padding: 2em;
      // background: rgb(249, 191, 63);
      // background: #fafbfc;
      background: #e9ecef;

      &__text {
        line-height: 1.5;
      }
      &__btn {
        // border: 1px solid black;
        // border-radius: 3px;
        padding: 0;
      }
    }
  }
`;

function ProfileMain() {
  return (
    <Section>
      <div className="pp-about">
        <ProfileSectionHeader title="About me" subtitle="Who Am I?" />
        <p className="pp-about__description">
          <strong>Kingsley Eneja C</strong> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat, in minus? Vitae animi vero quia,
          tempore aperiam eveniet rem rerum at exercitationem? Maxime deserunt
          minima, cupiditate ratione commodi consequuntur dicta.
        </p>
        <div className="pp-about__main-skills">
          <div className="pp-about__main-skills__skill pp-about__main-skills__skill-1">
            <i className="fas fa-code pp-about__main-skills__skill__icon"></i>
            <h3 className="pp-about__main-skills__skill__title">
              Backend NodeJS
            </h3>
          </div>
          <div className="pp-about__main-skills__skill pp-about__main-skills__skill-1">
            <i className="fas fa-code pp-about__main-skills__skill__icon"></i>
            <h3 className="pp-about__main-skills__skill__title">
              Frontend ReactJS
            </h3>
          </div>
          <div className="pp-about__main-skills__skill pp-about__main-skills__skill-1">
            <i className="fas fa-code pp-about__main-skills__skill__icon"></i>
            <h3 className="pp-about__main-skills__skill__title">
              Python Flask
            </h3>
          </div>
        </div>
        <div className="pp-about__banner">
          <h2 className="pp-about__banner__text">
            I am happy to tell you that I've 3+ years of experience with REACT +
            NODE.
          </h2>
          <KcLink
            text="HIRE ME"
            color="black"
            className="pp-about__banner__btn"
            colorOnHover="white"
            borderRadius="3px"
            border="1px solid black"
            bgColorOnHover="black"
          />
        </div>
      </div>
    </Section>
  );
}

export default ProfileMain;
