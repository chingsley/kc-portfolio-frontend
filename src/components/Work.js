import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import placeholderImg from '../assets/placeholder_1.png';

const Div = styled.div`
  ${(props) => {
    return css`
      // border: 1px solid #ee5a24;
      text-align: center;

      .img-div {
        // border: 1px solid #12cbc4;
        border: 1px solid rgba(74, 153, 211, 0.1);
        margin: auto;
        height: 215px;
        width: 215px;
        border-radius: 50%;
        background-color: #ffffff;
        background-image: url(${props.companyLogoUrl});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        // border: 1px solid rgba(0, 0, 0, 0.05);
        // box-shadow: 2px 2px 25px rgb(0 0 0 / 16%);
      }
      .text {
        // border: 1px solid #1b1464;
        padding: 1rem;
        &__caption {
          // border: 1px solid #12cbc4;
        }
        &__details {
          // border: 1px solid #12cbc4;
          margin: 0;
          padding: 0;
        }
      }
      @media only screen and (max-width: 540px) {
      }
    `;
  }}
`;

const Work = (props) => {
  // console.log('work = ', props);
  return (
    <Div {...props}>
      <div className="img-div"></div>
      <div className="text">
        <h3 className="text__caption">{props.companyName}</h3>
        <p className="text__details">{props.details}</p>
      </div>
    </Div>
  );
};

Work.propTypes = {
  subject: string,
  period: string,
  companyName: string,
  companyLogoUrl: string,
};
Work.defaultProps = {
  subject: 'no subject specified',
  period: null,
  companyName: '',
  companyLogoUrl: placeholderImg,
};

export default Work;
