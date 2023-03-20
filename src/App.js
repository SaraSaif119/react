import React from 'react';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Sec1 from './sec1.js';
import Sec2 from './sec2.js';
import Sec3 from './sec3.js';
import Contact from './Footer.js';
import Navbar from './nav';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/projects' element={<Projects/>} >
        <Route path='sec1' element={<Sec1/>} />
        <Route path='sec2' element={<Sec2/>} />
        <Route path='sec3' element={<Sec3/>} />
      </Route>
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    
   );
}
export default App;
