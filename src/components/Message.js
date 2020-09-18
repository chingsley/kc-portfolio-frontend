import React from 'react';
import styled, { css } from 'styled-components';

const Message = styled.div`
  ${(props) => css`
    color: #53535c;
    border: none;
    border-radius: 4px;
    background-color: #dceff6;

    // border: 1px solid green;
    // border-radius: 3px;
    // background: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    top: 12vh;
    left: 10%;
    width: 80%;
    margin: 0 auto;
    display: ${props.message ? 'block' : 'none'};
  `}
`;

export default (props) => <Message {...props}>{props.message}</Message>;
