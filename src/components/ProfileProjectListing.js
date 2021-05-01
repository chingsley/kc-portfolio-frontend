import React, { useEffect } from 'react';
import Aos from 'aos';
import styled, { css } from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects.data';

const Section = styled.section`
  ${(props) => {
    return css`
      // border: 1px solid green;

      .projects {
        // border: 1px solid darkred;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

        &__card {
          // border: 1px solid red;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 2px 2px 25px rgb(0 0 0 / 16%);
        }
      }
    `;
  }}
`;

function ProfileProjectListing(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section {...props}>
      <ProfileSectionHeader
        title="Projects And Contributions"
        subtitle="Projects"
      />
      <div className="projects">
        {projects
          .sort((p1, p2) => Number(p2.rank) - Number(p1.rank))
          // .slice(0, 5)
          .map((project, index) => {
            const {
              id,
              name,
              image,
              role,
              shortDescription,
              websiteLink,
            } = project;
            return (
              <div
                key={project.id}
                className="projects__card"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay={index * 50}
                data-aos-easing={'ease'}
              >
                <ProjectCard
                  key={id}
                  title={name}
                  userRole={role}
                  imageSrc={image}
                  websiteLink={websiteLink}
                  shortDescription={shortDescription}
                  project={project}
                />
              </div>
            );
          })}
      </div>
    </Section>
  );
}

export default ProfileProjectListing;
