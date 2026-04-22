import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import Framnav from './farmerDashboard/Framnav';


import Signup from './signup';
import Login from './login';
import Aboutus from './Aboutus';
import Header from './farmerDashboard/header';
import Framhome from './farmerDashboard/Framhome';


function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Framhome' element={<Framhome/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/header'element={<Header/>}/>
        </Routes>
      </>
    );
}

export default App;