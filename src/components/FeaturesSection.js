import React from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Features = styled.div`
  // border: 1px solid lightblue;
  padding-top: 4rem;

  .feature-title {
    // border: 1px solid green;
    text-align: center;
    letter-spacing: 0.5px;

    &__subtitle {
      // border: 1px solid grey;
      width: 40%;
      margin: auto;
      margin-bottom: 4rem;
      text-align: center;
      font-size: 1.25rem;
      color: #0d202f;
    }
  }

  .feature-cards {
    // border: 1px solid red;
    display: flex;
    justify-content: center;

    &__card {
      // border: 1px solid lightblue;
      // background-color: lightblue;
      width: 20rem;
      height: 20rem;
      background: #fafbfc;
      padding: 1rem;

      &:nth-child(2) {
        // border: 1px solid red;
        margin: 0 2rem;
      }

      &__fa {
        // border: 1px solid gray;
        font-size: 2rem;
        margin-bottom: 1rem;
        // color: #f4505d;
        // color: #eb2f06;
        color: #f43544;
      }

      &__title {
        // border: 1px solid gray;
        display: block;
        font-size: 1.25rem;
        font-weight: 400;
        color: #0d202f;
      }
      &__text {
        color: #3b4f60;
        font-size: 1rem;
        font-weight: 400;
      }
      &__inpage-nav {
        // border: 1px solid grey;
        display: inline-block;
        width: 4rem;
        padding: 0.25rem 4rem;
        // height: 4rem;
        // line-height: 4rem;
        // border-radius: 50%;
        // text-align: center;
        // border: 1px solid #f43544;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        background: black;
        color: white;
        // color: black;
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
      <h3 className="feature-title">Demonstrate your skills without a sound</h3>
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
          <i className="fas fa-briefcase feature-cards__card__fa"></i>
          <span className="feature-cards__card__title">
            Build Your Portfolio
          </span>
          <p className="feature-cards__card__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            perferendis nemo, at ipsam, nostrum odit aliquam reprehenderit illo
            minima quos ducimus quisquam suscipit? Aperiam reiciendis laborum
            ratione voluptatibus quaerat fuga.
          </p>
          <Link to="/login" className="feature-cards__card__inpage-nav">
            <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div className="feature-cards__card" data-aos="fade-up">
          <i className="far fa-file-powerpoint feature-cards__card__fa"></i>
          <span className="feature-cards__card__title">Demo Presentation</span>
          <p className="feature-cards__card__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            perferendis nemo, at ipsam, nostrum odit aliquam reprehenderit illo
            minima quos ducimus quisquam suscipit? Aperiam reiciendis laborum
            ratione voluptatibus quaerat fuga.
          </p>
          <Link to="/login" className="feature-cards__card__inpage-nav">
            <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div
          className="feature-cards__card"
          data-aos="fade-right"
          data-aos-delay={100}
        >
          <i className="fas fa-user-tie feature-cards__card__fa"></i>
          <span className="feature-cards__card__title">
            Hire Top profossionals
          </span>
          <p className="feature-cards__card__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            perferendis nemo, at ipsam, nostrum odit aliquam reprehenderit illo
            minima quos ducimus quisquam suscipit? Aperiam reiciendis laborum
            ratione voluptatibus quaerat fuga.
          </p>
          <Link to="/signup" className="feature-cards__card__inpage-nav">
            <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </Features>
  );
};

export default withRouter(FeaturesSection);
