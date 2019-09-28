import React from 'react';
import { AboutContainer, WrapperCol, ProfilePicture } from './about-styled';
import profilePic from './../../resources/img/profile.png';

const About = () => {
  return (
    <AboutContainer>
      <WrapperCol>
        <ProfilePicture src={profilePic} alt="Profile" />
      </WrapperCol>
      <WrapperCol>
        <p>I am Janus Kiong, a software developer currently working for Credit Suisse. My interest in coding is mainly towards full stack development and machine learning.</p>
        <p>I believe that life is about new experiences while building on past knowledge.</p>
        <p>When not working, I am usually traveling, reading or playing computer games.</p>
      </WrapperCol>

    </AboutContainer>
  );
};

export default About;
