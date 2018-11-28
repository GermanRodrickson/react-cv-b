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

const CardsLeft = styled.div`
  border: 1px solid black;
  background-color: red;
  position: absolute;
  right: 25%;
`;

const CardsRight = styled.div`
  border: 1px solid black;
  background-color: red;
  position: absolute;
  left: 25%;
  top: 30%;
`;


const Date = styled.div`
  background-color: #000000;
  color: white;
  position: absolute;
  right: 50%;
  top: ${props => (props.primary ? "25%" : "80%")};
  text-align: center;
  width: 50px;
  margin-right: -25px;
`;

class Experience2 extends Component {
  render() {
    return(
    <Wrapper>
      <Title>Experience</Title>
      <CardsLeft >
          Frontend Developer <br></br> 🗓 2018 - Present <br></br> Focus on <strong>JavaScript</strong>, <strong>SCSS</strong> and <strong>React</strong>
      </CardsLeft>

      <CardsRight >
          Hospital de Sant Joan Despí Moisès Broggi <br></br> Medical imaging technician <br></br> 🗓 2016-2018
      </CardsRight>
      <Circle />
      <Line />
      <Date primary>2018</Date>
    </Wrapper>)
  }
}

export default Experience2;

