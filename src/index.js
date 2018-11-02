import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


//------ Components
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';


const root = document.getElementById('root');

ReactDOM.render(
  <section>
    <Nav />
    <HomePage />
    <Skills />
    <Experience />

    <Contact />
  </section>,

  root
);

