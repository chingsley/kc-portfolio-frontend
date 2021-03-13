import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Aos from 'aos';
import ProfileSectionHeader from './ProfileSectionHeader';

const Section = styled.section`
  ${(props) => {
    return css`
  // border: 1px solid red;
  // background: rgba(74, 153, 211, 0.1);

  .pp-about {
    // border: 1px solid red;
    &__parent {
      // border: 1px solid red;
      display: flex;
      gap: 2%;
      // flex-wrap: wrap;
      border-left: 2px solid #4A99D3;
      border-right: 2px solid #4A99D3;
      position: relative;
      z-index: 2;
      &__left,
      &__right {
        // border: 1px solid #0a3d62;
        width: 50%;
        padding: 1rem;
      }
      &__left {
        // border: 4px solid  rgba(74, 153, 211, 0.1);
      }
      &__right {
        background: rgba(74, 153, 211, 0.1);
      }
    }
  }
  @media only screen and (max-width: 720px) {
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
  }}
`;

function ProfileAbout() {
  // const [writeupFading, setView] = useState(null);

  const [view, setView] = useState(
    window.innerWidth > 720 ? 'desktop' : 'mobile'
  );

  const dataAos = {
    desktop: {
      delay: '500',
      animation: 'fade-left',
    },
    mobile: {
      delay: '0',
      animation: 'fade-up',
    },
  };

  function changeView() {
    console.log(window.innerWidth);
    if (window.innerWidth < 720) {
      setView('mobile');
    } else {
      setView('desktop');
    }
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener('resize', changeView);
    return (_) => {
      window.removeEventListener('resize', changeView);
    };
  }, []);
  return (
    <Section>
      <div className="pp-about">
        <ProfileSectionHeader title="Who Am I?" subtitle="About me" />
        <div className="pp-about__parent">
          <div
            className="pp-about__parent__left"
            data-aos-delay={dataAos[view].delay}
            data-aos={dataAos[view].animation}
          >
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
          <div
            className="pp-about__parent__right"
            data-aos-delay="500"
            data-aos="fade-right"
          >
            My favorite quotes:
            <p>carousel animation of my favorite quotes / tech quotes</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProfileAbout;
