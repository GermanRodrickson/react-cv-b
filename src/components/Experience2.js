import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  background-color: #f4f4f4;
  width: 100%;
  padding: 2rem 0;
  position: relative;
  height: 600px;
`;

const Title = styled.h2`
  letter-spacing: 3px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
  margin-bottom: 40px;
  font-weight: 600;
`;

const Line = styled.div`
  position: absolute;
  height: 300px;
  width: 2px;
  top: 10;
  right: 50%;
  margin-left: -1px;
  background-color: #000000;
`

const Circle = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  top: 10;
  right: 50%;
  margin-right: -5px;
  background-color: #000000;
`;

const Cards = styled.div`
  border: 1px solid black;
  background-color: red;
  position: absolute;

  left: ${props => (props.primary ? "20%" : "52%")};
  right: ${props => (props.primary ? "52%" : "20%")};
`;

const Date = styled.div`
  background-color: #000000;
  color: white;
  position: absolute;
  right: 50%;
  top: ${props => (props.primary ? "50%" : "80%")};
  text-align: center;
  width: 50px;
  margin-right: -25px;
`;

class Experience2 extends Component {
  render() {
    return(
    <Wrapper>
      <Title>Experience</Title>
      <Cards>
        <h2>Prueba</h2>
      </Cards>
      <Circle />
      <Line />
      <Date primary>2018</Date>
    </Wrapper>)
  }
}

export default Experience2;

