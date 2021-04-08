import React, { useState } from 'react';
const ModalContext = React.createContext();
const ModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('No message');

  const openModal = ({ withMsg = modalMsg } = {}) => {
    setModalMsg(withMsg);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        setShowModal,
        modalMsg,
        setModalMsg,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export { ModalProvider, ModalContext };
