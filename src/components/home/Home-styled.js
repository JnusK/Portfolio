import styled from 'styled-components';

const LandingContainer = styled.div`
  height: 93vh;
  width: 100%;
`;

export const MainView = styled(LandingContainer)`
  margin: 0;
  text-align: center;
  margin-top: 0;
  background-size: cover;

`;

export const MainText = styled.div`
  position: relative;
  top: 40%

  h1 {
    color: 3b3b47;
    font-size: 48px;
  }
`;

export const TagLine = styled.div`
  display: inline-block;
  color: #6d6d7a;
  font-size: 30px;
  margin: 10px;
`;

export const TravelLandingViewContainer = styled(LandingContainer)`

`;
