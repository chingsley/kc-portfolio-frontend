import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import ProfileSectionHeader from './ProfileSectionHeader';
import Collapsible from './Collapsible';
import { workHistories } from '../data/work.data';

// will contain the organization, the timeline, the role and the job description
const Section = styled.section`
  // border: 1px solid red;
  // .works {
  //   // border: 1px solid blue;
  //   justify-content: space-between;
  //   display: flex;
  //   flex-wrap: wrap;
  //   &__work {
  //     // border: 1px solid yellow;
  //     width: 49%;
  //   }
  // }
  .role {
    font-weight: 400;
    font-size: 1.2rem;
  }
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
          const { subject, role, details, from, to } = workHistory;
          const aosDelay = index % 2 === 0 ? 'fade-down' : 'fade-down';
          return (
            <div
              key={index}
              className="works__work"
              data-aos={aosDelay}
              data-aos-delay={100 + index * 50}
            >
              <Collapsible
                subject={subject}
                period={from + ' - ' + to}
                expandAsDefault={false}
              >
                <h4 className="role">{role}</h4>
                {details}
              </Collapsible>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProfileEducation;
