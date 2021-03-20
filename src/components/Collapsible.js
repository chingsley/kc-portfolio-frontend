import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';
import { string, bool } from 'prop-types';

const Div = styled.div`
  // border: 1px solid red;
  margin-bottom: 0.2rem;
  border-radius: 5px;
  overflow: hidden;
  .header {
    // border: 1px solid black;
    padding: 1rem;
    background: rgba(74, 153, 211, 0.1);
    cursor: pointer;
    position: relative;
    transition: background 1s;

    &:hover {
      background: rgba(74, 153, 211, 0.2);
    }

    &__title {
      // border 1px solid blue;
      display: flex;

      &__subject {
        // border: 1px solid red;
        font-weight: 400;
        font-size: 1rem;
        // color: rgba(0, 0, 0, 1);
        margin-right: 1rem;
      }
      &__period {
        // border: 1px solid lightgreen;
        color: rgba(0, 0, 0, 0.6);
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &__state {
      // border: 1px solid red;
      font-size: 1.5rem;
      display: inline-block;
      position: absolute;
      right: 1rem;
      bottom: 22px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .body {
    padding: 1rem;
  }
  .fa-chevron-right,
  .fa-chevron-down {
    // border: 1px solid red;
    font-size: 0.8rem;
    color: #4a99d3;
    display: block;
  }
  .card {
    // border: 1px solid red;
    border-radius: 0px !important;
  }
  .card-body {
    // color: #4a99d3;
  }

  @media only screen and (max-width: 540px) {
    margin-bottom: 0.8rem;
    .header {
      &__title {
        // width: 90%;
        justify-content: space-between;
        &__period {
          text-align: right;
        }
      }

      &__state {
        display: none;
      }
    }
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
        <div className="header__state">
          {isOpen ? (
            <i className="fa fa-chevron-down"></i>
          ) : (
            <i className="fa fa-chevron-right"></i>
          )}
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
