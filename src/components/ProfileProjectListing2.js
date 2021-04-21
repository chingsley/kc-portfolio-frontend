import React from 'react';
import styled, { css } from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects.data';
import { string } from 'prop-types';

const Section = styled.section`
  ${(props) => {
    return css`
      // border: 1px solid green;

      .projects {
        // border: 1px solid darkred;
        display: flex;
        justify-content: ${props.justifyContent};
        flex-wrap: wrap;

        &__card {
          margin-right: 1rem;
          margin-top: 1rem;
          &:not(:first-child) {
            // border: 1px solid black;
          }
        }
      }
      @media only screen and (max-width: 768px) {
        .projects {
          justify-content: center;
        }
      }
    `;
  }}
`;

function ProfileProjectListing(props) {
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
              <ProjectCard
                key={id}
                className="projects__card"
                title={name}
                userRole={role}
                imageSrc={image}
                websiteLink={websiteLink}
                shortDescription={shortDescription}
                project={project}
              />
            );
          })}
      </div>
    </Section>
  );
}

ProfileProjectListing.propTypes = {
  justifyContent: string,
};

ProfileProjectListing.defaultProps = {
  // justifyContent: 'space-between',
  justifyContent: 'center',
};

export default ProfileProjectListing;
