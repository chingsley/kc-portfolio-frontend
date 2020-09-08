import React from 'react';
import styled from 'styled-components';

const FileArea = styled.div`
  // border: 3px solid yellow;
  @media only screen and (min-width: 600px) {
    display: none;
  }
  width: 100%;
  position: relative;

  & > * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  label {
    // border: 1px solid red;
    display: inline-block;
    margin-bottom: 0;
    width: 100%;
  }

  label span {
    text-align: center;
    text-transform: none;
    font-weight: 200;
    line-height: 1em;
    font-style: italic;
    opacity: 0.8;
  }

  input[type='file'] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }

  .file-dummy {
    width: 100%;
    padding: 15px 30px;
    background: rgba(255, 255, 255, 0.2);
    border: 2px dashed rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: background 0.3s ease-in-out;

    .success {
      display: none;
    }
  }

  &:hover .file-dummy {
    background: rgba(255, 255, 255, 0.1);
  }

  input[type='file']:focus + .file-dummy {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline: -webkit-focus-ring-color auto 5px;
  }

  input[type='file']:valid + .file-dummy {
    // border-color: rgba(0, 255, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 255, 0, 0.3);

    .success {
      display: inline-block;
    }
    .default {
      display: none;
    }
  }
`;

const ImageUploadMobile = () => (
  <FileArea className="form-group file-area">
    <label htmlFor="images">
      <span>select your profile image (optional)</span>
    </label>
    <input
      type="file"
      name="images"
      id="images"
      // required="required"
      // multiple="multiple"
    />
    <div className="file-dummy">
      <div className="success">your file has been selected. Keep on.</div>
      <div className="default">Image must be less than 5MB</div>
    </div>
  </FileArea>
);

export default ImageUploadMobile;
