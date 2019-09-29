import React from 'react';
import ReactMarkdown from "react-markdown";
import {TravelList} from './../../resources/travel/travel-list';

const TravelBlog = ({match}) => {

  return (
    <>
      <div>{match.params.year}</div>
      <div>{match.params.trip}</div>
      {TravelList.map((travel, index) => {
        if (('/travel/' + match.params.year + '/' + match.params.trip) === travel.link) {
          console.log(travel.md);
          return (<ReactMarkdown source={travel.md} key={index} />);
        }
        else return null;
      })}
    </>
  );
};

export default TravelBlog;