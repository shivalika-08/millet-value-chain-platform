import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import Framhome from './farmerDashboard/Framhome';

import Footer from './footer';
import Signup from './signup';
import Login from './login';
import Aboutus from './Aboutus';
import Marketplace from './userDashboard/marketPlace';


function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Framhome' element={<Framhome/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Footer'element={<Footer/>}/>
          <Route path='/marketPlace' element={<Marketplace/>}/>
        </Routes>
      </>
    );
}

export default App;