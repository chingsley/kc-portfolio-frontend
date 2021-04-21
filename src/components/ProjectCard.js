import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { number, object } from 'prop-types';
import placeholderImg from '../assets/Rectangle.png';
import { ModalContext } from '../context/ModalContext';

const CardWrapper = styled.div`
  ${(props) => css`
    .card {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.164);
      border-radius: 3px;
      overflow: hidden;
      width: ${props.widthInRem}rem;
      height: ${props.heightInRem}rem;
      position: relative;

      &__default-img-title {
        // border: 1px solid orangered;
        // font-size: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgba(255, 255, 255, 0.5);
      }

      &__img {
        // border: 1px solid yellow;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
        // object-fit: contain;
      }
      &__info {
        // border: 1px solid green;
        padding: 1rem;
        position: absolute;
        bottom: 0;
        background-color: #f8f9fa;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;
        white-space: nowrap;

        /*** transition properties ***/
        height: 30%;
        background-color: #f8f9fa;
        transition: 0.5s ease-in-out;

        &__title {
          // border: 1px solid black;
          // color: #4a99d3;
          overflow: hidden;
          min-height: 1.5rem;
          text-overflow: ellipsis;
        }

        &__short-description {
          // border: 1px solid black;
          overflow: hidden;
          min-height: 2rem;
          max-height: 5.5rem;
          text-overflow: ellipsis;
        }

        &__btn-wrapper {
          // border: 1px solid red;
          display: inline-block;

          &__website-link,
          &__btn-show-modal {
            float: right;
            cursor: pointer;
            background-color: #4a99d3;
            color: white;
            padding: 5px 1rem;
            border-radius: 2px;
          }
          &__website-link {
            text-decoration: none;
          }
          &__btn-show-modal {
            outline: none;
            border: none;
          }
        }
      }
      &:hover {
        position: relative;

        .card__info {
          border-top: 2px solid #4a99d3;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.95);
          text-overflow: initial;
          white-space: normal;
        }
        .card__default-img-title {
          // z-index: -1;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .card {
        width: 15rem;
      }
    }
  `}
`;

function ProjectCard(props) {
  const modalContext = useContext(ModalContext);
  const { openModal } = modalContext;
  const {
    name: title,
    image = placeholderImg,
    role,
    websiteLink,
    shortDescription,
    reasonForMissingWebsiteLink,
  } = props.project;
  // console.log('props => ', props);
  return (
    <CardWrapper {...props}>
      <div className="card">
        <img src={image} alt="show-tower-homepage" className="card__img" />
        {!props.imageSrc && (
          <h2 className="card__default-img-title">{title}</h2>
        )}
        <div className="card__info">
          <h5 className="card__info__title">{title}</h5>
          <div className="card__info__user-role">
            <strong>Role:</strong> <i>{role}</i>
          </div>
          <p className="card__info__short-description">{shortDescription}</p>
          <div className="card__info__btn-wrapper">
            {websiteLink ? (
              <a
                href={websiteLink}
                className="card__info__btn-wrapper__website-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Goto Website
              </a>
            ) : (
              <button
                className="card__info__btn-wrapper__btn-show-modal"
                onClick={() =>
                  openModal({ withMsg: reasonForMissingWebsiteLink })
                }
              >
                Goto Website
              </button>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

ProjectCard.propType = {
  widthInRem: number,
  heightInRem: number,
  project: object.isRequired,
};

ProjectCard.defaultProps = {
  widthInRem: 20,
  heightInRem: 15,
};

export default ProjectCard;
