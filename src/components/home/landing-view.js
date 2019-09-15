import React from 'react';
import { MainView, MainText, TagLine } from './home-styled';

const LandingView = () => {
  const tagline = ['Explore', 'Learn', 'Build'];

  return (
    <MainView>
      <MainText>
        <h1>Janus Kiong</h1>
        <div>
          {tagline.map((tag, index) => {
            return (<TagLine key={index}>{tag}</TagLine>);
          })}
        </div>
      </MainText>
    </MainView>
  );
}

export default LandingView;
