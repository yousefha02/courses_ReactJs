import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import { Routes ,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Categoires from './pages/Categoires';
import Courses from './pages/Courses';
import SingleCourse from './pages/SingleCourse';
import Lesson from './pages/Lesson';
import NotFound from './pages/NotFound';

const theme = createTheme({
  direction:"rtl",
  palette:{
    primary:{
      main:"#000",
      color:"white"
    },
    secondary:{
      main:"#2196f3",
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
          <Route element={<Categoires/>} path='courses'/>
          <Route element={<Courses/>} path='category/:id'/>
          <Route element={<SingleCourse/>} path='course/:id'/>
          <Route element={<Lesson/>} path='lesson/:id'/>
          <Route element={<NotFound/>} path='*'/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
