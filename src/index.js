import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


//------ Components
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';

const root = document.getElementById('root');

ReactDOM.render(
  <section>
    <HomePage />
    <Skills />
    <Experience />
    <Portfolio /> 
    <About /> 
  
    <Contact />  
  </section>,

  root
);

