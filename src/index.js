import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


//------ Components
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience2 from './components/Experience2';

const root = document.getElementById('root');

ReactDOM.render(
  <section>
    <HomePage />
    <Skills />
    <Experience2 />
    <Portfolio /> 
    <About /> 
  
    <Contact />  
  </section>,

  root
);

