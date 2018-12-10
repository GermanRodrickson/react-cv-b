import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';


const Wrapper = styled.section`
  padding: 2rem 0;
  margin: 0 auto;
  display: block;
  text-align: center;

  span {
    font-size: 3em;
    animation-name: blinker;
    animation-duration: 0.7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    @keyframes blinker {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
    }
}
`;

const Title = styled.h2`
  letter-spacing: 3px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
  margin-bottom: 40px;
`;

const Text = styled.a`
  font-size: 2.5em;
  text-align: center;
  display: inline-block;
  width: auto;
  margin: 0 auto;

  span {
    font-size: 1em;
    animation: none;
  }

  @media only screen and (max-width: 600px) {
    & {
      font-size: 2em;
    }
  }
`;



class Portfolio extends Component {
  render() {
    return <Wrapper>
      <Title>Portfolio</Title>
        <Typist>
          <Text> Working on it </Text>
          {/* <Typist.Backspace count={19} delay={200} key={Date.now()}/>
          <Text> Trabajando en ello </Text>
          <Typist.Backspace count={19} delay={200} key={Date.now()}/>
          <Text> J'y travaille </Text>
          <Typist.Backspace count={19} delay={200} key={Date.now()}/>
          <Text> Lavorando su di esso </Text>
          <Typist.Backspace count={22} delay={200} key={Date.now()}/>
          <Text> 正在努力 </Text> */}
          <Typist.Backspace count={19} delay={200} key={Date.now()} />
          <Text> Wait for it <span role="img" aria-label="arm">💪🏻</span> </Text> 
        </Typist>
      </Wrapper>;
  }
}

export default Portfolio;
