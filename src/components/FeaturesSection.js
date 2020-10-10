import React from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import styled from 'styled-components';
import { useEffect } from 'react';

const Features = styled.div`
  border: 1px solid lightblue;
  padding-top: 4rem;

  .feature-title {
    border: 1px solid green;
    text-align: center;
    letter-spacing: 0.5px;

    &__subtitle {
      border: 1px solid grey;
      width: 20rem;
      margin: 2rem auto;
      text-align: center;
    }
  }

  .feature-cards {
    border: 1px solid red;
    display: flex;
    justify-content: center;

    &__card {
      border: 1px solid lightblue;
      background-color: lightblue;
      width: 20rem;
      height: 20rem;
      z-index: -1;

      &:nth-child(2) {
        // border: 1px solid red;
        margin: 0 2rem;
      }
    }
  }
`;

const FeaturesSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Features className="features">
      <h4 className="feature-title">Demonstrate your skills without a sound</h4>
      <div className="feature-title__subtitle">
        There's no substitute for hardwork. But we pair hardwork with
        presentation.
      </div>
      <div className="feature-cards">
        <div
          className="feature-cards__card"
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <strong>Project Organization</strong>
        </div>
        <div className="feature-cards__card" data-aos="fade-up">
          <strong>Demo Presentation</strong>
        </div>
        <div
          className="feature-cards__card"
          data-aos="fade-right"
          data-aos-delay={100}
        >
          <strong>Job Creation</strong>
        </div>
      </div>
    </Features>
  );
};

export default FeaturesSection;
