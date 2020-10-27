import React from 'react';
import styled from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import showTowerImg from '../assets/show_tower.png';
import KcLink from './KcLink';
import ProjectCard from './ProjectCard';

const Section = styled.section`
  // border: 1px solid green;

  .projects {
    &__card {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 2px solid #f43544;
      border-radius: 3px;
      overflow: hidden;
      width: 20rem;
      height: 15rem;
      position: relative;

      &__img {
        // border: 1px solid yellow;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        // height: 90%;
        // z-index: -1;
      }
      &__info {
        // border: 1px solid green;
        padding: 1rem;

        position: absolute;
        bottom: 0;
        background-color: white;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 20rem;
        white-space: nowrap;

        /*** transition properties ***/
        height: 4.5rem;
        background-color: white;
        // border-top: none;
        transition: 0.5s ease-in-out;

        &__title {
          // border: 1px solid black;
        }

        &__short-description {
          // border: 1px solid black;
          // max-width: 19rem;
          overflow: hidden;
          min-height: 2rem;

          text-overflow: ellipsis;
        }

        &__btn-wrapper {
          // border: 1px solid red;
          display: inline-block;
          &__btn {
            // border: 1px solid blue;
            float: right;
          }
        }
      }
      &:hover {
        cursor: pointer;
        position: relative;

        .projects__card__info {
          height: 100%;
          background-color: rgba(255, 255, 255, 0.9);
          text-overflow: initial;
          white-space: normal;
          // border-top: 2px solid #f43544;
        }
      }
    }
  }
`;

function ProfileProjectListing() {
  return (
    <Section>
      <ProfileSectionHeader title="Products" subtitle="My Projects" />
      <ProjectCard />
      <div className="projects">
        <div className="projects__card">
          <img
            src={showTowerImg}
            alt="show-tower-homepage"
            className="projects__card__img"
          />
          <div className="projects__card__info">
            <h5 className="projects__card__info__title">ShowTower</h5>
            <p className="projects__card__info__short-description">
              A customizable portfolio application, bridging the divide between
              employers and potential employees.
            </p>
            <div className="projects__card__info__btn-wrapper">
              <KcLink
                bgColor="black"
                color="white"
                className="projects__card__info__btn-wrapper__btn"
              >
                Details
              </KcLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProfileProjectListing;
