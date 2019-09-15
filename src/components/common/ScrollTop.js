import React, { useState, useEffect } from 'react';
import { ScrollTopButton } from './Main-styled';

const ScrollTop = () => {
  const [yOffset, setYOffset] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  }, []);

  const handleScroll = () => {
    setYOffset(window.scrollY);
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <ScrollTopButton>
      {yOffset > 20 && <span className="fas fa-chevron-up fa-border fa-2x" onClick={scrollToTop}></span>}
    </ScrollTopButton>
  );
}

export default ScrollTop;
