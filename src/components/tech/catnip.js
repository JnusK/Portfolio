import React from 'react';
import {
  ContentImage,
  ContentText,
  HeaderByline,
  ProjectContent,
  ProjectHeader,
  ProjectTitle,
  SectionHeader, TextContainer
} from "./tech-styled";
import {catnipImg} from './../../resources/img/tech-img';

const Catnip = () => {


  return (
    <>
      <ProjectHeader>
        <ProjectTitle>Catnip</ProjectTitle>
        <HeaderByline>Priority based time management app</HeaderByline>
      </ProjectHeader>
      <ProjectContent>
        <TextContainer>
          <ContentText>Catnip is a time management app which helps users prioritise their tasks to reduce stress. Catnip was conceptualised as the capstone project in the Design Thinking and Doing course during my exchange at Northwestern University. Our team of four designed, prototyped and tested the app.</ContentText>
          <SectionHeader>Research</SectionHeader>
          <ContentText>Through reading research papers on behavioral change, we learned to involve users in planning their time to instill a sense of ownership.</ContentText>
        </TextContainer>
        <ContentImage src={catnipImg.logo} alt="Catnip" />
      </ProjectContent>
      <ProjectContent>
        <TextContainer>
          <SectionHeader>Ideate</SectionHeader>
          <ContentText>We held brainstorm sessions to generate ideas for user interfaces. We gave post-it notes to participants to sketch their ideas before we discussed them. This meant that participants were not constrained by other participants before generating their ideas.</ContentText>
        </TextContainer>
          <ContentImage src={catnipImg.brainstorm} alt="Brainstorm" />
      </ProjectContent>
      <ProjectContent>
        <TextContainer>
        <SectionHeader>Prototype</SectionHeader>
        <ContentText>For the initial prototypes of the UI, we sketched out the wireframes to conduct user testing. After soliciting feedback from focus groups, we narrowed down the number of prototypes and used proto.io to build a more comprehensive prototype. </ContentText>
        </TextContainer>
          <ContentImage src={catnipImg.sketch} alt="Sketches" />
      </ProjectContent>
      <ProjectContent>
        <TextContainer>
        <SectionHeader>Develop</SectionHeader>
        <ContentText>We decided to use Python and Kivy to build the user interface due to our familiarity with Python. We split the app into 4 main sections: priority view, list view, calendar view and the backend.
          The backend was written in Python which consists of API calls to pull data from Canvas and CAESAR.
          The data was then parsed for the desired information before being stored in JSON files for persistent data storage.</ContentText>
        </TextContainer>
          <ContentImage src={catnipImg.develop} alt="Layouts" />
      </ProjectContent>
    </>
  )
};

export default Catnip;