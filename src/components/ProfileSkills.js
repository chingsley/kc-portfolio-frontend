import React from 'react';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import ProfileSectionHeader from './ProfileSectionHeader';

const Section = styled.section`
  padding-top: 5rem;
  .skills {
    border: 1px solid green;
    min-height: 10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__skill {
      // border: 1px solid lightblue;
      width: 45%;
      margin-bottom: 1rem;
    }
  }
  .react-sweet-progress-line-inner {
    // border: 1px solid red;
    background: rgba(0, 0, 0, 0.5) !important;
    min-height: 5px;
    &:after {
      position: absolute;
      top: -2px;
      right: 0;
      width: 10px;
      height: 10px;
      content: '';
      // background: #2c98f0;
      background: rgba(0, 0, 0, 1);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%;
    }
  }
`;

function ProfileSkills() {
  return (
    <Section>
      <ProfileSectionHeader title="My Specialty" subtitle="My Skills" />
      <div className="skills">
        <div className="skills__skill">
          NodeJS
          <Progress percent={88} />
        </div>
        <div className="skills__skill">
          ReactJS
          <Progress percent={69} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
        <div className="skills__skill">
          Data Science
          <Progress percent={30} />
        </div>
      </div>
    </Section>
  );
}

export default ProfileSkills;
