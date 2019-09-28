import styled from 'styled-components';

export const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  img {
    display: table;
    height: 90%;
    margin: 0 auto;
  }
`;

const CarouselButton = styled.div`
  position: absolute;
  opacity: 0.2;
  margin: auto;
  z-index: 3;

  :hover {
    background-color: #f2f2ff;
    opacity: 1;
  }
`;

export const PreviousCarouselButton = styled(CarouselButton)`
  left: 0px;
`;

export const NextCarouselButton = styled(CarouselButton)`
  right: 0px;
`;