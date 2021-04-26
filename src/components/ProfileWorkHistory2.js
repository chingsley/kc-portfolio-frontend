import React, { useEffect, useState } from 'react';
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
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

        &__work {
          // border: 1px solid #1b1464;
          padding-top: 1rem;
          background-color: rgba(74, 153, 211, 0.1);
          // background-image: linear-gradient(
          //   70deg,
          //   rgba(74, 153, 211, 0.1) 0%,
          //   rgba(74, 153, 211, 0.1),
          //   50%,
          //   #fafbfc 50%
          // );
          // box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
          // border-bottom-left-radius: 2rem;
          // border-radius: 5px;
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
            <div key={index} className="works__work">
              <Work {...workHistory} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProfileWorkHistory;
