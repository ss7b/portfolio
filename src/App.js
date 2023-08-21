import Footer from './components/footer/Footer';
import './App.css';
// mui
import { Container, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import {   Route, Routes } from 'react-router-dom';
import { Home,Contact, Portfolio, Resume } from './containers';
import NavMenu from './components/nav-menu/NavMenu';

import WorkDetails from './containers/workDetails/WorkDetails';


const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"]
  },
  palette: {
    primary: {
      main:'#e6ff00'
    },
    secondary:{
      main: '#fff',
      light: '#ffffff33',
    }
  },
});
function App() {

  


  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <Container maxWidth="lg">
        <div className='page-wraper'>
          <NavMenu/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/:workId' element={<WorkDetails/>}/>
          </Routes>


        <Footer/>
        </div>
      </Container>

    </div>

    </ThemeProvider>
  );
}

export default App;
