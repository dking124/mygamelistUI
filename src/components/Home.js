import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchAppBar from './AppBar';
import './Styles.css';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchAppBar/>
    </ThemeProvider>
  );
};

export default Home;
