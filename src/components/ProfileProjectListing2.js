import React from 'react';
import styled, { css } from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects.data';
import { string } from 'prop-types';

const Section = styled.section`
  ${(props) => {
    return css`
      border: 1px solid green;

      .projects {
        border: 1px solid darkred;
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
            const { id, name, image, role, shortDescription } = project;
            return (
              <ProjectCard
                key={id}
                className="projects__card"
                title={name}
                userRole={role}
                imageSrc={image}
                redirectTo={`/chingsley/projects/${id}`}
                shortDescription={shortDescription}
              />
            );
          })}
        {/* <ProjectCard
          className="projects__card"
          title="Ship mgt app"
          userRole="backend developer"
          imageSrc={nnsManagerImg}
          shortDescription="A ship management application that automatically notifies ship officers about due maintenance requests"
          redirectTo="/chingsley/projects/1"
        />
        <ProjectCard
          className="projects__card"
          title="Access gateway"
          userRole="backend developer"
          imageSrc={accessGatewayImg}
          shortDescription="An access bank payment gateway that offers a simple and secure way to send and receive payments globally"
          redirectTo="/chingsley/projects/1"
        />
        <ProjectCard
          className="projects__card"
          title="ICAD"
          userRole="backend developer"
          imageSrc={icad}
          shortDescription="Automation of the bank's ICAD account Submission to Nigeria Interbanking settlement scheme"
          redirectTo="/chingsley/projects/1"
        />
        <ProjectCard
          className="projects__card"
          title="Authors Haven"
          userRole="fullstack developer"
          shortDescription="A blog application that connects profilic writers to avid readers all over the world"
          redirectTo="/chingsley/projects/1"
        /> */}
      </div>
    </Section>
  );
}

ProfileProjectListing.prototype = {
  justifyContent: string,
};

ProfileProjectListing.defaultProps = {
  justifyContent: 'space-between',
};

export default ProfileProjectListing;