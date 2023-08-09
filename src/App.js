import React, { useEffect, useState } from "react";
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Shows from './pages/Shows.js'
import Music from './pages/Music.js'
import Merch from  './pages/Merch.js'

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Music' element={<Music />} />
                <Route path='/Shows' element={<Shows />} />
                <Route path='/Merch' element={<Merch />} />
            </Routes>
        </Router>
    );
}
 
export default App;
