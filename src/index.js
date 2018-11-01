import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


//------ Components
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Skills from './components/Skills';


const root = document.getElementById('root');

ReactDOM.render(
  <section>
    <Nav />
    <HomePage />
    <Skills />
  </section>
  
  ,root);

