import React from 'react';
import styled from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import Collapsible from './Collapsible';

const Section = styled.section`
  padding-top: 5rem;
`;

function ProfileEducation() {
  return (
    <Section>
      <ProfileSectionHeader subject="Education" subtitle="Education" />
      <Collapsible
        subject="B.ENG Computer Engineering"
        period="2020-02-19 - 2020-09-21"
      >
        I'm a B.ENG in Computer Engineering from Nnamdi Azikiwe University Awka,
        Anambra state, Nigeria. I graduated with a CGPA of 4.46
      </Collapsible>
      <Collapsible subject="Secondary Certificate">
        I got my Seniour School Certificate from College of Immaculate
        Conception, Enugu State, Nigeria
      </Collapsible>
      <Collapsible subject="Primary Certificate">
        I got my Primary School Cetificate from Hill-top Primary School, Enugu
        Ngwo, Enugu State, Nigeria
      </Collapsible>
    </Section>
  );
}

export default ProfileEducation;
