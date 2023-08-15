import React from 'react';
// import Header from './components/header/Header';
import Headeer from "../src/components/head/Headeer";
import Footer from './components/footer/Footer';
import './App.css';
import Carousel from './components/carousel/Carousel';
import Section from './components/section/Section';
import Navbar from './components/navbar/Navbar';
import {Box} from '@mui/material';
function App() {
  return (
    <div>

<Headeer/>
<Box style={{marginTop:"54px"}}>
<Navbar/>
</Box>
<div style={{marginTop:"10px"}}>
<Carousel/>
<Section/>
</div>
   <Footer/>
    </div>
  );
}

export default App;
