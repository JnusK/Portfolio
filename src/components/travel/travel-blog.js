import React from 'react';

const TravelBlog = ({match}) => {

  return (
    <>
      <div>{match.params.year}</div>
      <div>{match.params.trip}</div>
    </>
  );
};

export default TravelBlog;