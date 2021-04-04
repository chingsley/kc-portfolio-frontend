import React, { useState, useEffect } from 'react';
const ModalContext = React.createContext();
const ModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  // console.log(showModal, setShowModal);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // useEffect(() => {
  //   fetchRecipe();
  // }, []);
  return (
    <ModalContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        setShowModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export { ModalProvider, ModalContext };
