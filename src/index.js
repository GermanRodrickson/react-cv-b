import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


//------ Components
import Nav from './components/Nav';
import HomePage from './components/HomePage';


const root = document.getElementById('root');

ReactDOM.render(
  <section>
    <Nav />
    <HomePage />
  </section>
  
  ,root);

