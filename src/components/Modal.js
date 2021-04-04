import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ModalContext } from '../context/ModalContext';

const ModalWindow = styled.div`
  ${(props) => {
    console.log(props);
    return css`
      display: ${props.showModal ? 'flex' : 'none'};
      position: fixed;
      z-index: 20000;
      top: 0;
      width: 100%;
      height: 100%;
      border: 1px solid red;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .modal-view {
        border: 1px solid;
        background: #54a0ff;
        width: 50%;
        height: 50%;
      }
    `;
  }}
`;

function Modal(props) {
  const modalContext = useContext(ModalContext);
  const { showModal, setShowModal, closeModal } = modalContext;
  return (
    <ModalWindow {...props} showModal={showModal}>
      <div className="modal-view">
        <button onClick={closeModal}>close</button>
      </div>
    </ModalWindow>
  );
}

export default Modal;
