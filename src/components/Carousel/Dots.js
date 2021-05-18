import React from 'react';
import { quotes } from '../../data/quotes.data';

function Dots(props) {
  return (
    <div className="all-dots">
      {quotes.map((slide, index) => (
        <span
          key={index}
          className={`${
            props.activeIndex === index ? 'dot active-dot' : 'dot'
          }`}
          onClick={(e) => props.onClick((e.target.value = index))}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
