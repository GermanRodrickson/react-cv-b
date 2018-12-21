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
import react from '../img/react-brands.svg'
import mongodb from '../img/mongodb.png'
import jquery from '../img/jquery.png'
import javascript from '../img/javascript.png'
import nodejs from '../img/nodejs.png'


//-----------

const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  margin-bottom: 30px;
  position: relative;
  @media only screen and (max-width: 1200px) {
    & {
      width: 900px;
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      width: 600px;
    }
  }
  @media only screen and (max-width: 600px) {
    & {
      width: 400px;
    }
  }
  @media only screen and (max-width: 400px) {
    & {
      width: 300px;
    }
  }
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
  height: 80px;
  text-align: center;
  vertical-align: top;

  &:hover {
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 100px;
      height: 80px;
      border: none;
      box-shadow: none;
      padding: 0;
      margin: 0;
      margin-top: 10px;
    }
  }
`;

const Img = styled.img`
  width: 50px; 
  display: block;
  margin: 0 auto; 
  margin-bottom: 20px;
`

const Title = styled.h2`
  text-align: center;
  letter-spacing: 2px;
  font-size: 3rem;
  color: #32363e;
  margin: 30px 0px;
`;



class Skills extends Component {
  render() {
    return <Wrapper>
        <Title>Skills</Title>
        <Box><Img src={react} />React</Box>
        <Box><Img src={angular} />AngularJS</Box>
        <Box><Img src={nodejs} />Node.js</Box>
        <Box><Img src={javascript} />JavaScript</Box>
        <Box><Img src={html} />HTML</Box>
        <Box><Img src={sass} />SASS</Box>
        <Box><Img src={mongodb} />MongoDB</Box>
        <Box><Img src={typescript} />TypeScript</Box>
        <Box><Img src={git} />Git</Box>
        <Box><Img src={github} />Github</Box>
        <Box><Img src={commandline} />Command Line</Box>
        <Box><Img src={jquery} />jQuery</Box>
      </Wrapper>;
  }
}

export default Skills;
