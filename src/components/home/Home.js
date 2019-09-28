import React from 'react';
import LandingView from './landing-view';
import TechLandingView from './tech-landing-view';
import About from './../about/about';
import TravelLandingView from './travel-landing-view';

const Home = () => {
  return (
    <div>
      <LandingView />
      <TechLandingView />
      <About />
      <TravelLandingView />
    </div>
  );
};

export default Home;
