import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';
import KcLink from './KcLink';

const Div = styled.div`
  margin-bottom: 0.2rem;
  .header {
    // border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    background: #e9ecef;
    cursor: pointer;
    // display: flex;
    // justify-content: space-between;
    position: relative;

    &__title {
      // border 1px solid red;
      display: inline-block;
      font-weight: 400;
      font-size: 1rem;
      min-width: 8rem;
      text-align: center;
      padding: 2px;
      background-color: black;
      color: white;
      border-radius: 3px;
      letter-spacing: 0.5px;
    }

    &__state {
      // border: 1px solid red;
      font-size: 1.5rem;
      display: inline-block;
      position: absolute;
      right: 1rem;
      bottom: 15px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .body {
    padding: 1rem;
  }
`;

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Div>
      <div className="header" onClick={toggle}>
        <div className="header__title">{props.title}</div>
        <div className="header__state">{isOpen ? '-' : '+'}</div>
      </div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>{props.children}</CardBody>
        </Card>
      </Collapse>
    </Div>
  );
};

export default Collapsible;
