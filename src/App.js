import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Intro from './introduction/Intro';
import About from './pages/About';
import Home from './pages/home/Home';
import Settings from './pages/Settings';

function App () {

  const [intro, setIntro] = useState(false);
  const [change, setChange] = useState(true);

  const handleChange = () => {
    setChange(!change);
}
  
  setTimeout(() => {
    setIntro(false);    
  }, 9000);

  return (
   <div className='App'>
      {
        intro ?
        <>
          <Intro />
        </> :
        <>
          <BrowserRouter>
            <Header />
            {/* here sound */}
            <Routes>
              <Route path='/' element={<Home handleChange={handleChange} change={change} />} />
              <Route path='/about' element={<About />} />
              <Route path='/undefined-2' element={<>work</>} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </BrowserRouter> 
        </>
      }
   </div>
  );
}

export default App;
