import React from 'react';
import styled from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import ProjectCard from './ProjectCard';
import showTowerImg from '../assets/show_tower.png';
import img2 from '../assets/logo_2.jpg';
import img3 from '../assets/my_profile_img.jpg';

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
      <ProfileSectionHeader title="Products" subtitle="My Projects" />

      <div className="projects">
        <ProjectCard
          imageSrc={showTowerImg}
          redirectTo="/chingsley/projects/1"
        />
        <ProjectCard imageSrc={img2} redirectTo="/chingsley/projects/1" />
        <ProjectCard imageSrc={img3} redirectTo="/chingsley/projects/1" />
      </div>
    </Section>
  );
}

export default ProfileProjectListing;
