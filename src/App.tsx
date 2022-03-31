import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
 
  return (
    <Container maxWidth="xl" sx={{ p: '0px !important' }}>
      <AppBar position="static"></AppBar>
       <Typography variant='h6'>Testing</Typography>

    </Container>
  );
}

export default App;
