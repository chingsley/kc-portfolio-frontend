import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';
import KcLink from './KcLink';

const Div = styled.div`
  margin-bottom: 0.2rem;
  .header {
    // border: 1px solid lightblue;
    background: #e9ecef;
    cursor: pointer;
    &__title {
      // border 1px solid red;
      padding: 1rem;
      font-weight: 400;
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
        <div className="header__title">
          <KcLink
            text={props.title}
            color="black"
            className="pp-about__banner__btn"
            colorOnHover="white"
            borderRadius="3px"
            // bgColor="black"
            bgColorOnHover="black"
          />
          {/* {props.title} */}
        </div>
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
