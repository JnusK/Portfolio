import styled from 'styled-components';

export const BlogContainer = styled.div`
  width: calc(100% - 40px);
  margin-left: 20px;
`;

export const ContentContainer = styled.div`
  padding-top: 40px;
  
  blockquote {
    font-style: italic;
  }
  
  p img {
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const BlogHeader = styled.div`
  width: 100%;
  margin-top: -8px;
  position: fixed;
  background-color: white;
`;

export const BackLink = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  text-decoration: none;
`;

export const BlogTitle = styled.h1`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  text-transform: capitalize;
`;