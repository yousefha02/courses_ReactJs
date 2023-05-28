import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import { Routes ,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const theme = createTheme({
  direction:"rtl",
  palette:{
    primary:{
      main:"#000",
      color:"white"
    }
  }
})

function App() {

  useEffect(()=>{
    document.body.dir="rtl"
  },[])


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path=''/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
