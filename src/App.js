import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import { Routes ,Route,Navigate} from 'react-router-dom';

const theme = createTheme({
  direction:"rtl",
})

function App() {

  useEffect(()=>{
    document.body.dir="rtl"
  },[])


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
