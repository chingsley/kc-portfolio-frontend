import React from 'react';
import styled from 'styled-components';
import KcLink from './KcLink';
import ProfileSectionHeader from './ProfileSectionHeader';

const Section = styled.section`
  // border: 1px solid red;

  .pp-about {
    &__description {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.164);
      border-radius: 5px;
      padding: 2rem;
      color: rgba(0, 0, 0, 0.7);
      font-size: 1.25vw;
      line-height: 1.4;
      text-rendering: optimizeLegibility;
      font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      -moz-osx-fon-smoothing: grayscale;

      &__quote:before,
      &__quote:after {
        // border: 1px solid red;
        content: '"';
        font-size: 2rem;
        font-style: italic;
        font-weight: bold;
      }
    }
    &__main-skills {
      // border: 1px solid gray;
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
          <q className="pp-about__description__quote">
            I am a professional software engineer, a graduate of Nnamdi Azikiwe
            university with a degree in computer engineering, and an Alumni of
            Andela Fellowship. I have gotten core software engineering
            experience from different companies including Andela and Access
            Bank. In Andela I served as a technical coordinator in my team
            working to deliver high quality applications. In Access bank, I took
            on the role of a solutions architect and software developer where
            some of my notable projects include automation of account reporting
            and the Access payment gateway application. <br />
            While freelancing, I have worked on a number of exciting products
            both for professional and personally gain. Some of which include a
            Ship management application for the military, a customisable
            portfolio/cv application, Show Tower, that improves users’ chances
            of getting hired by recruiting managers, a crime/crisis reporting
            app called iReporter. My main stack is Javascript NodeJS with React,
            but I also have experience with Python flask.
            {/* <br /> I find it
            particularly interesting working on database designs having worked
            with a wide array of databases including but not limited to mongoDB,
            Postgres, mysql, mssql and sqlite3. I enjoy solving problems and I’m
            a frequent user of hackerrank and codility. Additionally I enjoy
            working with a team of smart professionals, bringing out the best in
            each other and working to provide an innovative solution to any form
            of challenges. */}
          </q>
        </p>
        {/* <div className="pp-about__main-skills">
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
        </div> */}
        {/* <div className="pp-about__banner">
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
        </div> */}
      </div>
    </Section>
  );
}

export default ProfileMain;
