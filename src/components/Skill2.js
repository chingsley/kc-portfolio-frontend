import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Aos from 'aos';
import 'react-sweet-progress/lib/style.css';
import { categories } from '../data/skills2.data';
import { color } from '../utils/variables';
const { backend, frontend, design, testingAndMonitoring } = categories;

const StyledSkill = styled.div`
  ${(props) => {
    return css`
      // border: 1px solid blue;
      .header {
        // border: 1px solid #4a99d3;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
        &__category-icon {
          // border: 1px solid red;
          display: flex;
          width: 215px;
          height: 215px;
          border-radius: 50%;
          background-image: linear-gradient(
            360deg,
            rgba(74, 153, 211, 0.1) 0%,
            rgba(74, 153, 211, 0.1),
            50%,
            ${color.lightGrey} 50%
          );
        }
        &__title {
          // border: 2px solid green;
          color: ${color.navyBlue};
          font-size: 16px;
          text-transform: uppercase;
          margin-top: 1rem;
        }
      }
      .tools {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;

        &__tool {
          // border: 1px solid blue;
          padding: 5px 7px;
          // background: rgba(74, 153, 211, 0.1);
          // background-color: #fafbfc;
          border: 1px solid rgba(74, 153, 211, 0.2);
          margin: 5px;
          border-radius: 5px;
          font-size: 14px;
        }
      }
      .fas {
        // border: 1px solid blue;
        font-size: 4rem;
        font-weight: 30px;
        margin: auto;
        // color: #4a99d3;
        color: ${color.navyBlue};
      }
    `;
  }}
`;

const getIcon = (category) => {
  const iconDictionary = {
    [backend]: <i className="fas fa-server"></i>,
    [frontend]: <i className="fas fa-tv"></i>,
    [design]: <i className="fas fa-drafting-compass"></i>,
    [testingAndMonitoring]: <i className="fas fa-flask"></i>,
  };
  return iconDictionary[category];
};

function Skill(props) {
  const { skill } = props;
  useEffect(() => {
    Aos.init({ duration: 1000, easing: '' });
  }, []);

  return (
    <StyledSkill>
      <div className="header">
        <span className="header__category-icon">{getIcon(skill.category)}</span>
        <h4 className="header__title">{skill.category}</h4>
      </div>
      <div className="tools">
        {skill.tools.map((tool, index) => (
          <span
            key={index}
            className="tools__tool"
            data-aos="zoom-in"
            data-aos-delay={index * 50}
          >
            {tool}
          </span>
        ))}
      </div>
    </StyledSkill>
  );
}
export default Skill;
