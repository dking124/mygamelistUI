import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import customTheme from './CustomTheme';
import SearchAppBar from './AppBar';
import './Styles.css';
import MainContent from './MainContent';

const Home = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <SearchAppBar/>
      <MainContent/>
    </ThemeProvider>
  );
};

export default Home;
