import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';
import { string, bool } from 'prop-types';

const Div = styled.div`
  margin-bottom: 0.2rem;
  .header {
    // border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    background: #e9ecef;
    cursor: pointer;
    position: relative;

    &__title {
      // border 1px solid blue;
      display: inline-block;

      &__subject {
        // border: 1px solid red;
        font-weight: 400;
        font-size: 1rem;
        // color: rgba(0, 0, 0, 1);
        margin-right: 1rem;
      }
      &__period {
        // border: 1px solid lightgreen;
        font-style: italic;
        &:before {
          content: '';
          border: 1px solid red;
          margin-right: 1rem;
        }
        &:after {
          content: '';
          // border: 1px solid red;
        }
      }
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
  const [isOpen, setIsOpen] = useState(props.expandAsDefault);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Div>
      <div className="header" onClick={toggle}>
        <div className="header__title">
          <span className="header__title__subject">{props.subject}</span>
          {props.period && (
            <span className="header__title__period">{props.period}</span>
          )}
        </div>
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

Collapsible.prototype = {
  subject: string,
  period: string,
  expandAsDefault: bool,
};
Collapsible.defaultProps = {
  subject: 'no subject specified',
  period: null,
  expandAsDefault: false,
};

export default Collapsible;
