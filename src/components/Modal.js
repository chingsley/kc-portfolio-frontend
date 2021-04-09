import React, { useContext, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ModalContext } from '../context/ModalContext';

const ModalWindow = styled.div`
  ${(props) => {
    // console.log(props);
    return css`
      // border: 1px solid red;
      display: ${props.showModal ? 'flex' : 'none'};
      position: fixed;
      z-index: 20000;
      top: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      animation: modalFadeIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

      .modal-view {
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        width: 0%;
        height: 0%;
        overflow: hidden;
        background: rgba(255, 255, 255, 1);
        animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        animation-delay: 0.3s;

        &__header {
          // border: 1px solid salmon;
          // border-bottom: 1px solid #4a99d3;
          height: 20%;
          display: flex;
          align-items: center;
          padding-left: 2rem;
          & > strong {
            font-size: 1.5rem;
          }
        }
        &__body {
          // border: 1px solid lightgreen;
          height: 60%;
          margin: 0;
          padding: 2rem;
        }
        &__footer {
          // border: 1px solid lightblue;
          border-top: 1px solid #4a99d3;
          height: 20%;
          position: relative;
          & > button {
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translate(-50%, -50%);
            background-color: #4a99d3;
            color: #ffffff;
            border: none;
            outline: none;
            padding: 0.5rem 1.5rem;
            border-radius: 3px;
          }
        }
      }

      @keyframes fadeIn {
        0% {
          width: 0%;
          height: 0%;
        }
        50% {
          width: 0%;
          height: 50%;
        }
        100% {
          width: 50%;
          height: 50%;
        }
      }
      @keyframes modalFadeIn {
        0% {
          background-color: transparent;
        }
        50% {
          background-color: rgba(0, 0, 0, 0.5);
        }
        100% {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
      @media only screen and (max-width: 768px) {
        .modal-view {
          width: 0%;
          height: 0%;
          // animation: none;
          animation: fadeInMobile 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
            forwards;
          animation-delay: 0.3s;
        }
        @keyframes fadeInMobile {
          0% {
            width: 0%;
            height: 0%;
          }
          50% {
            width: 0%;
            height: 100%;
          }
          100% {
            width: 100%;
            height: 100%;
          }
        }
      }
    `;
  }}
`;

function Modal(props) {
  const modalContext = useContext(ModalContext);
  const refModalView = useRef(null);
  const { showModal, modalMsg, closeModal } = modalContext;

  const handleOutsideClick = (e) => {
    if (!refModalView?.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  return (
    <ModalWindow {...props} showModal={showModal}>
      <div className="modal-view" ref={refModalView}>
        <div className="modal-view__header">
          <strong>Hi there!</strong>
        </div>
        <p className="modal-view__body">{modalMsg}</p>
        <div className="modal-view__footer">
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </ModalWindow>
  );
}

export default Modal;
