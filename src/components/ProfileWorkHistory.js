import React, { useEffect } from 'react';
import Aos from 'aos';
import styled, { css } from 'styled-components';
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
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        &__work {
          // border: 1px solid #1b1464;
          padding-top: 1rem;
          background-color: rgba(74, 153, 211, 0.1);
          border-radius: 5px;
        }
      }
    `;
  }}
`;

function ProfileWorkHistory() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <ProfileSectionHeader title="Experience" subtitle="Work Experience" />
      <div className="works">
        {workHistories.map((workHistory, index) => {
          return (
            <div
              key={index}
              className="works__work"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay={index * 50}
              data-aos-easing={'ease'}
            >
              <Work {...workHistory} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProfileWorkHistory;
