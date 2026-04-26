import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import Framhome from './farmerDashboard/Framhome';

import Footer from './footer';
import Signup from './signup';
import Login from './login';
import Aboutus from './Aboutus';
<<<<<<< Updated upstream
import Marketplace from './marketPlace';
=======
import Marketplace from './userDashboard/marketPlace';
import ProductListing from './farmerDashboard/ProductListing';
>>>>>>> Stashed changes


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
          <Route path='/productListing'element={<ProductListing/>}/>
        </Routes>
      </>
    );
}

export default App;