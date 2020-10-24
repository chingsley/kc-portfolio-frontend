import React from 'react';
import styled from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import showTowerImg from '../assets/show_tower.png';

const Section = styled.section`
  // border: 1px solid green;
  padding-top: 5rem;

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
        z-index: -1;
      }
      &__info {
        // border: 1px solid green;
        padding: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 20rem;
        white-space: nowrap;
        position: absolute;
        bottom: 0;
        background-color: white;
        color: black;
        /*** transition properties ***/
        height: 4.5rem;
        background-color: white;
        transition: 0.5s ease-in-out;
      }
      &:hover {
        cursor: pointer;
        position: relative;

        .projects__card__info {
          height: 90%;
          background-color: rgba(255, 255, 255, 0.9);
          text-overflow: initial;
          // width: 100%;
          white-space: normal;
        }
      }
    }
  }
`;

function ProfileProjectListing() {
  return (
    <Section>
      <ProfileSectionHeader title="Products" subtitle="My Projects" />
      <div className="projects">
        <div className="projects__card">
          <img
            src={showTowerImg}
            alt="show-tower-homepage"
            className="projects__card__img"
          />
          <div className="projects__card__info">
            <h5 className="projects__card__info__title">ShowTower</h5>A
            customizable portfolio application, bridging the divide between
            employers and potential employees.
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProfileProjectListing;
