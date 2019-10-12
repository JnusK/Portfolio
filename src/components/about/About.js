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
        <p>I am Janus Kiong, a software developer currently working for Credit Suisse. I graduated from Nanyang Technological University with a Bachelors of Engineering Science (Computer Science) and a Masters of Science in Technology Management</p>
        <p>My interest in coding is mainly towards full stack development and machine learning.</p>
        <p>When not working, I am usually traveling, reading, cooking or playing computer games.</p>
      </WrapperCol>

    </AboutContainer>
  );
};

export default About;
