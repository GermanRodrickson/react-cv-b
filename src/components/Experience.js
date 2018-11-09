import React, { Component } from 'react';
import styled from 'styled-components';
import SvgArrow from './elements/SvgArrow'

const Wrapper = styled.section`
  background-color: #f4f4f4;
  width: 100%;
  margin: 2rem 0;
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


class Experience extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Experience</Title>
          <SvgArrow />
        </Container>
      </Wrapper>
    )
    
  }
}

export default Experience;

