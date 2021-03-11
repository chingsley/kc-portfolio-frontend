import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import ProfileSectionHeader from './ProfileSectionHeader';

const Section = styled.section`
  // border: 1px solid red;

  // background: rgba(74, 153, 211, 0.1);
  .pp-about {
    // border: 1px solid red;
    &__parent {
      display: flex;
      gap: 2%;
      // flex-wrap: wrap;
      border-left: 2px solid #4A99D3;
      border-right: 2px solid #4A99D3;
      &__left,
      &__right {
        // border: 1px solid #0a3d62;
        width: 50%;
        padding: 1rem;
      }
      &__left {
        // background: rgba(74, 153, 211, 0.1);
        // border-left: 4px solid  rgba(74, 153, 211, 0.1);
      }
      &__right {
        background: rgba(74, 153, 211, 0.1);
      }
    }
    &__text {
      border: 1px solid #eb2f06;
      column-count: 2;
      column-rule: 1px solid lightblue;
      // column-gap: 40px;
    }
    &__description {
      border: 1px solid rgba(0, 0, 0, 0.1);
      // border: 1px solid blue;
      box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.164);
      border-radius: 5px;
      // color: #34495e;
      padding: 2rem;
      // font-size: 1.17vw;
      font-size: 0.95rem;
      // font-style: italic;
      // font-family: montserrat;
      letter-spacing: 0.5px;
      line-height: 1.4;
      text-rendering: optimizeLegibility;
      font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      -moz-osx-fon-smoothing: grayscale;
    }
    &__banner {
      padding: 2em;
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
  @media only screen and (max-width: 540px) {
    .pp-about { 
      // border: 1px solid blue;
      &__parent {
        // border: 1px solid #fa983a;
        display: block;
        &__left{
          // border: 1px solid #0a3d62;
          width: 100%;
          font-size: 0.95rem;
          // background: rgba(74, 153, 211, 0.1);
        }
        &__right {
          // background: rgba(74, 153, 211, 0.1);
          display: none;
        }
    }
  }
`;

function ProfileAbout() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <div className="pp-about">
        <ProfileSectionHeader title="Who Am I?" subtitle="About me" />
        <div className="pp-about__parent">
          <div className="pp-about__parent__left">
            {' '}
            Hi there! I'm Kingsley, a passionate and creative software engineer,
            who is super excited about technology and how it can be used to
            solve problems. I feel a profound sense of joy every time I see a
            solution I created being used to solve problems for fellow humans
            (even if it's for just one person). I make a point of writing clean,
            maintainable code that scales easily because while I believe in the
            quest to solve problems for the everyday man, I shouldn’t create new
            ones for developers trying to maintain my code. Please feel free to
            email me feedback on this website. It could be anything you think
            could be done better, stuff you just think would be cool if added or
            even just to let me know you liked it
          </div>
          <div className="pp-about__parent__right">My favorite tech quote:</div>
        </div>
        {/* <p className="pp-about__text">
          Hi! I'm Kingsley, a passionate and creative software engineer, who is
          super excited about technology and how it can be used to solve
          problems. I feel a profound sense of joy every time I see a solution I
          created being used to solve problems for fellow humans (even if it's
          for just one person). I make a point of writing clean, maintainable
          code that scales easily because while I believe in the quest to solve
          problems for the everyday man, I shouldn’t create new ones for
          developers trying to maintain my code. Please feel free to email me
          feedback on this website. It could be anything you think could be done
          better, stuff you just think would be cool if added or even just to
          let me know you liked it
        </p> */}
        {/* <p
          className="pp-about__description"
          data-aos="fade-up"
          data-aos-delay={100}
        >
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
            both for professional and personal gain. Some of which include a
            Ship management application for the military, a customisable
            portfolio/cv application, Show Tower, that improves users’ chances
            of getting hired by recruiting managers, a crime/crisis reporting
            app called iReporter. My main stack is Javascript NodeJS with React,
            but I also have experience with Python flask.
          </q>
        </p> */}
      </div>
    </Section>
  );
}

export default ProfileAbout;
