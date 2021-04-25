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
        // border: 1px solid #009432;
        display: flex;
        justify-content: space-between;

        &__work {
          // border: 1px solid #1b1464;
          width: 23%;
          padding-top: 1rem;
          background-color: rgba(74, 153, 211, 0.1);
        }
      }
      @media only screen and (max-width: 540px) {
        .works {
          flex-direction: column;
          align-items: center;
          &__work {
            width: 90%;
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          }
        }
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
