import React, { Component } from 'react';
import styled from 'styled-components';

//----------- Images

import angular from '../img/angular.png'
import commandline from '../img/commandline.png'
import git from '../img/git.png'
import github from '../img/github.png'
import html from '../img/html.png'
import sass from '../img/sass.png'
import typescript from '../img/typescript.png'
import react from '../img/react.png'
import mongodb from '../img/mongodb.png'
import jquery from '../img/jquery.jpg'
import javascript from '../img/javascript.png'
import nodejs from '../img/nodejs.png'


//-----------

const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
`;

const Box = styled.div`
  transition: all 200ms ease;
  padding: 2.5rem;
  background: #fff;
  border: 1px solid #ebecec;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  display: inline-block;
  width: 200px;
  text-align: center;

  &:hover {
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
  }
`;

const Img = styled.img`
  width: 50px; 
  display: block;
  margin: 0 auto; 
  margin-bottom: 20px;
`


class Skills extends Component {
  render() {
    return <Wrapper>
        <Box><Img src={react} />React</Box>
        <Box><Img src={angular} />AngularJS</Box>
        <Box><Img src={nodejs} />Node.js</Box>
        <Box><Img src={javascript} />JavaScript</Box>
        <Box><Img src={html} />HTML</Box>
        <Box><Img src={sass} />SASS</Box>
        <Box><Img src={mongodb} />MongoDB</Box>
        <Box><Img src={jquery} />jQuery</Box>
        <Box><Img src={git} />Git</Box>
        <Box><Img src={github} />Github</Box>
        <Box><Img src={commandline} />Command Line</Box>
        <Box><Img src={typescript} />TypeScript</Box>
      </Wrapper>;
  }
}

export default Skills;
