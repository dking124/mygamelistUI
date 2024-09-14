import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './CustomTheme';
import SearchAppBar from './AppBar';
import './Styles.css';

const Home = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <SearchAppBar/>
    </ThemeProvider>
  );
};

export default Home;
