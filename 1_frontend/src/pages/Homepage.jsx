import React from 'react';
import Header from '../components/Header';
import { StyledHomepageMain } from './Homepage.style';

const Homepage = () => {
  return (
    <>
      <Header />
      <StyledHomepageMain>
        <h1>Homepage</h1>
      </StyledHomepageMain>
    </>
  );
};

export default Homepage;
