import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Aos from 'aos';
import ProfileSectionHeader from './ProfileSectionHeader';
import { workHistories } from '../data/work.data';
import Work from './Work';

// will contain the organization, the timeline, the role and the job description
const Section = styled.section`
  ${(props) => {
    return css`
      // border: 1px solid red;
      .works {
        // border: 1px solid blue;
        display: flex;
        justify-content: space-between;

        &__work {
          // border: 1px solid yellow;
          width: 22%;
          padding-top: 1rem;
          background-image: linear-gradient(
            rgba(74, 153, 211, 0.1) 0%,
            rgba(74, 153, 211, 0.1) 100%
          );
          // box-shadow: 2px 2px 25px rgb(0 0 0 / 16%);
        }
      }
      @media only screen and (max-width: 540px) {
      }
    `;
  }}
`;

function ProfileEducation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <ProfileSectionHeader title="Experience" subtitle="Work Experience" />
      <div className="works">
        {workHistories.map((workHistory, index) => {
          // const aosDelay = index % 2 === 0 ? 'fade-down' : 'fade-down';
          return (
            <div
              key={index}
              className="works__work"
              // data-aos={aosDelay}
              // data-aos-delay={100 + index * 50}
            >
              <Work {...workHistory} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProfileEducation;
