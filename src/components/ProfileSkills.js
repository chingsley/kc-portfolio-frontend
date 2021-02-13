import React from 'react';
import styled, { css } from 'styled-components';
import 'react-sweet-progress/lib/style.css';
import ProfileSectionHeader from './ProfileSectionHeader';
import { skills } from '../data/skills.data';
import Skill from './Skill';

const Section = styled.section`
  ${(props) => {
    console.log(props.skillColor);
    return css`
      // border: 1px solid red;
      .skills {
        // border: 1px solid green;
        min-height: 10rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    `;
  }}
`;

function ProfileSkills() {
  return (
    <Section>
      <ProfileSectionHeader title="My Specialty" subtitle="Major Skills" />
      <div className="skills">
        {skills
          .sort((s1, s2) => s2.level - s1.level)
          .map((skill, index) => {
            return <Skill skill={skill} aosIndex={index} key={index} />;
          })}
      </div>
    </Section>
  );
}

export default ProfileSkills;
