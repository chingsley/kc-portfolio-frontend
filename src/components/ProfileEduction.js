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
      <ProfileSectionHeader title="Education" subtitle="Education" />
      <Collapsible title="University">
        I'm a B.ENG in Computer Engineering from Nnamdi Azikiwe University Awka,
        Anambra state, Nigeria. I graduated with a CGPA of 4.46
      </Collapsible>
      <Collapsible title="Secondary">
        I got my Seniour School Certificate from College of Immaculate
        Conception, Enugu State, Nigeria
      </Collapsible>
      <Collapsible title="Primary">
        I got my Primary School Cetificate from Hill-top Primary School, Enugu
        Ngwo, Enugu State, Nigeria
      </Collapsible>
    </Section>
  );
}

export default ProfileEducation;
