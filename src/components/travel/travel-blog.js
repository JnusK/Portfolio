import React from 'react';
import ReactMarkdown from "react-markdown";
import {TravelList} from './../../resources/travel/travel-list';
import {BackLink, BlogContainer, BlogHeader, BlogTitle, ContentContainer} from "./travel-styled";
import {NavLink} from "react-router-dom";

const TravelBlog = ({match}) => {

  return (
    <BlogContainer>
      <BlogHeader>
        <NavLink exact to='/travel'>
          <BackLink className="fas fa-chevron-left fa-border fa-2x" />
        </NavLink>
        <BlogTitle>{match.params.trip}</BlogTitle>
      </BlogHeader>
      <ContentContainer>
        {TravelList.map((travel, index) => {
          if (('/travel/' + match.params.year + '/' + match.params.trip) === travel.link) {
            return (<ReactMarkdown source={travel.md} key={index} />);
          }
          else return null;
        })}
      </ContentContainer>
    </BlogContainer>
  );
};

export default TravelBlog;