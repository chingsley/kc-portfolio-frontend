import React from 'react';
import styled, { css } from 'styled-components';

const StyledModal = styled.div`
  ${(props) => {
    return css`
      border: 1px solid;
      background: #54a0ff;
      position: fixed;
      width: 50%;
      top: 0;
    `;
  }}
`;

function Modal() {
  return (
    <StyledModal>
      <div>this is the modal</div>
    </StyledModal>
  );
}

export default Modal;
