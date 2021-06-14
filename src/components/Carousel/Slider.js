import React, { useState, useEffect } from 'react';
import { quotes } from '../../data/quotes.data';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import './slider.css';

const indexOfLastItem = quotes.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex >= indexOfLastItem ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="slider-container">
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? indexOfLastItem : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex >= indexOfLastItem ? 0 : activeIndex + 1)
        }
      />
      <div className="quotes-and-dots">
        {/* <div className="slider-content"> */}
        <SliderContent activeIndex={activeIndex} />
        {/* </div> */}
        <div className="slider-dots">
          <Dots
            activeIndex={activeIndex}
            onClick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
