import React from 'react';
import Carousel from './carousel';
import { TravelLandingViewContainer } from './home-styled';
import {TravelList} from "../../resources/travel/travel-list";

const TravelLandingView = () => {
  return (
    <TravelLandingViewContainer>
      <Carousel interval={10000} components={TravelList}/>
    </TravelLandingViewContainer>
  )
};

export default TravelLandingView;
