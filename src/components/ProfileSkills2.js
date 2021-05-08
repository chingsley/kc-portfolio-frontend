import React from 'react';
import styled, { css } from 'styled-components';
import 'react-sweet-progress/lib/style.css';
import ProfileSectionHeader from './ProfileSectionHeader';
import { skills } from '../data/skills2.data';
import Skill from './Skill2';

const Section = styled.section`
  ${(props) => {
    // console.log(props.skillColor);
    return css`
      // border: 1px solid blue;
      position: relative;
      .skills {
        // border: 1px solid #4a69bd;
        min-height: 10rem;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        overflow: auto;

        &__skill {
          // border: 1px solid red;
          border-radius: 5px;
          // background-color: #fafbfc;
          // background: rgba(74, 153, 211, 0.2);
          border-bottom: 2px solid #4a99d3;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
      }
    `;
  }}
`;

function ProfileSkills() {
  return (
    <Section>
      <ProfileSectionHeader title="My Specialty" subtitle="Major Skills" />
      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <div key={skill.id} className="skills__skill">
              <Skill skill={skill} aosIndex={index} key={index} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProfileSkills;
