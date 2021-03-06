import React from 'react';
import styled, { css } from 'styled-components';
import 'react-sweet-progress/lib/style.css';
import ProfileSectionHeader from './ProfileSectionHeader';
import { skills } from '../data/skills.data';
import Skill from './Skill2';
import { color } from '../utils/variables';

const Section = styled.section`
  ${(props) => {
    // console.log(props.skillColor);
    return css`
      // border: 1px solid blue;
      position: relative;
      .skills {
        // border: 1px solid #4a69bd;
        min-height: 10rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        // border-left: 2px solid #4a99d3;
        // border-right: 2px solid #4a99d3;
        padding: 1rem;
        background-image: linear-gradient(
            90deg,
            rgba(74, 153, 211, 0.1) 0%,
            rgba(74, 153, 211, 0.1),
            50%,
            #fafbfc 50%
          ),
          url();
      }
      .btn-new {
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        font-size: 2rem;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        .fa-plus-circle:before {
          // color: ${color.reddish};
        }
      }

      @media only screen and (max-width: 540px) {
        .skills {
          flex-direction: column;
          background-image: linear-gradient(
              105deg,
              rgba(74, 153, 211, 0.1) 0%,
              rgba(74, 153, 211, 0.1),
              50%,
              #fafbfc 50%
            ),
            url();
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
        {skills
          .sort((s1, s2) => s2.level - s1.level)
          .map((skill, index) => {
            return <Skill skill={skill} aosIndex={index} key={index} />;
          })}
      </div>
      {/* <button className="btn-new">
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </button> */}
    </Section>
  );
}

export default ProfileSkills;
