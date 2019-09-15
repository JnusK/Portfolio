import React from 'react';
import LandingView from './landing-view';
import ProjectsLandingView from './projects-landing-view';
import About from './../about/about';

const Home = () => {
  return (
    <div>
      <LandingView />
      <ProjectsLandingView />
      <About />
    </div>
  );
}

export default Home;
