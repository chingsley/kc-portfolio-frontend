import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const AppLoader = styled.div`
  // border: 1px solid red;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export default ({ isLoading }) => (
  <>
    {isLoading && (
      <AppLoader>
        <Loader type="ThreeDots" color="#000000" height="50" width="50" />
        {/* <p>Loading Data</p> */}
      </AppLoader>
    )}
  </>
);
