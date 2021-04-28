import React from 'react';
import style from 'styled-components';
import ProfileProjectsListing from '../components/ProfileProjectListing';

const Section = style.section`
padding: 2rem;
  .profile__section {
    // border: 1px solid #dfe0eb;
    padding: 4rem;
    // background-color: white;
    background-color: #fffefe;
  }
  
`;

function ProjectsPage() {
  return (
    <Section className="">
      <div className="profile__section">
        <ProfileProjectsListing justifyContent="space-between" />
      </div>
    </Section>
  );
}

export default ProjectsPage;
