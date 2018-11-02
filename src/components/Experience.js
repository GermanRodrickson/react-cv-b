import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  background-color: #32363e;
  width: 100%;
  padding: 6rem 0;
`;


const Title = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #44bafc;
`;

const Text = styled.p`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
  margin: 40px 0;
`;



class HomePage extends Component {
  render() {
    return( 
    <Wrapper>
      <Title>Experience</Title>
    </Wrapper>
    )
  }
}

export default HomePage;

