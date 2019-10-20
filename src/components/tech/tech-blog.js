import {BackLink, BlogContainer, BlogHeader, BlogTitle, ContentContainer} from "../travel/travel-styled";
import {NavLink} from "react-router-dom";
import React from "react";


const TechBlog = ({match, child}) => {

  return (
    <BlogContainer>
      <BlogHeader>
        <NavLink exact to='/tech'>
          <BackLink className="fas fa-chevron-left fa-border fa-2x" />
        </NavLink>
        <BlogTitle>{match.params.project}</BlogTitle>
      </BlogHeader>
      <ContentContainer>
        {child}
      </ContentContainer>
    </BlogContainer>
  )
};

export default TechBlog;