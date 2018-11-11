import React, { Component } from 'react';
import styled from 'styled-components';


//------ Images
import logo from "../img/logo.png";

//-------


//------- Elements
import SvgArrow from './elements/SvgArrow'
//-------

const Wrapper = styled.section`
  background-color: #f4f4f4;
  width: 100%;
  margin: 2rem 0;
  position: relative;
`;

const Container = styled.div `
  width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  letter-spacing: 3px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
  margin-bottom: 40px;
  font-weight: 600;
`;

const SecondaryTitle = styled.h3`
  letter-spacing: 3px;
  text-align: center;
  font-size: 2rem;
  color: #32363e;
  margin-bottom: 20px;
`;

const Img = styled.img`
  display: block;
  margin: 10px auto;
`

const Text = styled.p`
  font-size: 1.3em;
  text-align: center;
  display: block;
  width: auto;
  margin: 10px auto;
`;

class Experience extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Experience</Title>
          <SvgArrow /> 
          <Img src={logo}/>
          <SecondaryTitle>Frontend Developer</SecondaryTitle>
          <Text>Focus with <strong>Javascript</strong>, SCSS and DOM manipulation</Text>
          

          <SecondaryTitle></SecondaryTitle>
        </Container>
      </Wrapper>
    )
    
  }
}

export default Experience;

