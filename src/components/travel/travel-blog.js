import React from 'react';
import ReactMarkdown from "react-markdown";
import {TravelList} from './../../resources/travel/travel-list';
import {BlogContainer} from "./travel-styled";

const TravelBlog = ({match}) => {

  return (
    <BlogContainer>
      {TravelList.map((travel, index) => {
        if (('/travel/' + match.params.year + '/' + match.params.trip) === travel.link) {
          return (<ReactMarkdown source={travel.md} key={index} />);
        }
        else return null;
      })}
    </BlogContainer>
  );
};

export default TravelBlog;