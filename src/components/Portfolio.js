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
  }
`;

const Title = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
`;

const Text = styled.a`
  font-size: 1.4em;
  text-align: center;
  display: inline-block;
  width: auto;
  margin: 0 auto;
`;


class Portfolio extends Component {
  render() {


    return <Wrapper>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
          <span> Working on it  </span>
          <Typist.Backspace count={19} delay={200} />
          <span> Trabajando en ello </span>
        </Typist>
      </Wrapper>;
  }
}

export default Portfolio;
