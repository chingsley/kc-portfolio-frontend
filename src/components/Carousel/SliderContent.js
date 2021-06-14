import React from 'react';
import { quotes } from '../../data/quotes.data';

function SliderContent(props) {
  return (
    <div className="slider-content">
      {quotes.map((slide, index) => (
        <div
          key={index}
          className={
            index === props.activeIndex ? 'slides active' : 'slides inactive'
          }
        >
          {console.log({ index, activeIndex: props.activeIndex })}
          {console.log(slide.message)}
          <blockquote className="blockquote">{slide.message}</blockquote>
          <span className="author">{slide.author}</span>
        </div>
      ))}
    </div>
  );
}

export default SliderContent;
