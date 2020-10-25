import React from 'react';
import styled from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import ProjectCard from './ProjectCard';
import showTowerImg from '../assets/show_tower.png';
import nnsManagerImg from '../assets/nns_mgt.png';
import accessGatewayImg from '../assets/access_gateway.png';

const Section = styled.section`
  // border: 1px solid green;
  padding-top: 5rem;
  .projects {
    // border: 1px solid green;
    display: flex;
    justify-content: space-between;
  }
`;

function ProfileProjectListing() {
  return (
    <Section>
      <ProfileSectionHeader
        title="Projects And Contributions"
        subtitle="Projects"
      />

      <div className="projects">
        <ProjectCard
          title="Show tower"
          userRole="fullstack developer"
          imageSrc={showTowerImg}
          redirectTo="/chingsley/projects/1"
          shortDescription="A customizable portfolio application, bridging the divide between
              employers and potential employees."
        />
        <ProjectCard
          title="Ship mgt app"
          userRole="backend developer"
          imageSrc={nnsManagerImg}
          shortDescription="A ship management application that automatically notifies ship officers about due maintenance requests"
          redirectTo="/chingsley/projects/1"
        />
        <ProjectCard
          title="Access gateway"
          userRole="backend developer"
          imageSrc={accessGatewayImg}
          shortDescription="An access bank payment gateway that offers a simple and secure way to send and receive payments globally"
          redirectTo="/chingsley/projects/1"
        />
      </div>
    </Section>
  );
}

export default ProfileProjectListing;
