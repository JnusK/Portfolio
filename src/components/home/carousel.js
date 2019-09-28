import  React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {CarouselContainer, NextCarouselButton, PreviousCarouselButton} from "./carousel-styled";

const Carousel = ({ interval, components }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useInterval(() => {
    if (carouselIndex < components.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    }
    else {
      setCarouselIndex(0);
    }
  }, interval);

  const previousTile = () => {
    if (carouselIndex !== 0) {
      setCarouselIndex(carouselIndex - 1);
    }
    else {
      setCarouselIndex(components.length - 1);
    }
  };

  const nextTile = () => {
    if (carouselIndex < components.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    }
    else {
      setCarouselIndex(0);
    }
  };

  return (
    <CarouselContainer>
      <PreviousCarouselButton className="fas fa-chevron-left fa-border fa-2x" onClick={previousTile} />
      {components.map((comp, index) => {
        if (index === carouselIndex) {
          return (<Link to={comp.link} ><img src={comp.image} alt={comp.location} key={index} /></Link>);
        }
        else {
          return null;
        }
      })}
      <NextCarouselButton className="fas fa-chevron-right fa-border fa-2x" onClick={nextTile} />
    </CarouselContainer>
  );
};

const useInterval = (callback, delay) => {
  //Thanks to https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

Carousel.propTypes = {
  interval: PropTypes.number
};

export default Carousel;
