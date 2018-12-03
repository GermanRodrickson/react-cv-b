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
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  background-color: #ffffff;
  color: #666;
  padding: 10px;
  position: absolute;
  right: 25%;
  top: ${props => (props.primary ? "30%" : "25%")};

  p {
    line-height: 1.8em;
  }
`;

const CardsRight = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  background-color: #ffffff;
  color: #666;
  padding: 10px;
  position: absolute;
  left: 25%;
  top: ${props => (props.primary ? "30%" : "50%")};

  p {
    line-height: 1.8em;
  }
`;


const Date = styled.div`
  background-color: #000000;
  color: white;
  position: absolute;
  right: 50%;
  top: ${props => (props.primary ? "25%" : "45%")};
  text-align: center;
  width: 50px;
  margin-right: -25px;
`;

const TitleCard = styled.h3`
  color: #44bafc;
`;

class Experience2 extends Component {
  render() {
    return(
    <Wrapper>
      <Title>Experience</Title>
      <CardsLeft >
          <TitleCard>Frontend Developer</TitleCard> <p>🗓 2018 - Present</p>Focus on <strong>JavaScript</strong>, <strong>SCSS</strong> and <strong>React</strong>
      </CardsLeft>

      <CardsRight primary>
          <TitleCard>Hospital de Sant Joan Despí Moisès Broggi</TitleCard> <p>🗓 2016-2018</p> Medical imaging technician 
      </CardsRight>

       <CardsLeft primary>
          <TitleCard>Centre Mèdic Alomar</TitleCard> <p>🗓 2017 </p> Medical imaging technician 
      </CardsLeft>
      <Circle />
      <Line />
      <Date primary>2018</Date>
      <Date>2017</Date>
    </Wrapper>)
  }
}

export default Experience2;

