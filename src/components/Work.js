import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import placeholderImg from '../assets/placeholder_1.png';

const Div = styled.div`
  ${(props) => {
    console.log('placehloderImg = ', placeholderImg);
    console.log('props = ', props);
    return css`
      // border: 1px solid red;
      text-align: center;

      .img-div {
        // border: 1px solid brown;
        margin: auto;
        height: 215px;
        width: 215px;
        border-radius: 50%;
        background-image: url(${props.companyLogoUrl});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border: 1px solid rgba(0, 0, 0, 0.05);
        // box-shadow: 2px 2px 25px rgb(0 0 0 / 16%);
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
      <h3 className="company-name">{props.companyName}</h3>
      <p className="text">{props.details}</p>
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
