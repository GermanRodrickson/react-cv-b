import React, { Component } from 'react';
import styled from 'styled-components';

//-------Images

import nodejs from "../img/nodejs.png";

//-------


const Wrapper = styled.section`
  background-color: #fdfdfd;
  width: 100%;
  padding: 2rem 0;
`;

const Title = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
  margin-bottom: 40px;
  font-weight: 600;
`;

const Text = styled.p`
  color: #bec6d5;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const ColumnHosp = styled.div`
  position: relative;
  background-color: #FFFFFF;
  width: 50%;
  display: inline-block;
  font-size: 0px;
`;
const ColumnDev = styled.div`
  position: relative;
  background-color: #32363e;
  width: 50%;
  display: inline-block;
  font-size: 0px;
  height: 300px;
`;

const SecondaryTitle = styled.h3`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 2rem;
  margin: 20px 0px;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 50%;
`

const Works = styled.h4`
  margin: 0 auto;
  font-size: 1.7rem;

  color
`;


const Img = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 15%;
  left: 10%;
`;


class Experience extends Component {
  render() {
    return <Wrapper>
        <Title>Experience</Title>
        <ColumnDev>
          <SecondaryTitle>As a Developer <span role="img" aria-label="laptop">💻</span></SecondaryTitle>
          <TextWrapper>
            <Works>Barcelona Virtual</Works>
            <Text>2018 - actualidad <br/><br/>Frontend Developer</Text>
            <Text>This is my firts job as a developer, we are using <strong>PHP</strong>, <strong>SASS</strong> and now we are implementing <strong>React</strong>.</Text>
          </TextWrapper>
            <Img src={nodejs}></Img>
        </ColumnDev>
        <ColumnHosp>
          <SecondaryTitle>As a medical imaging technician <span role="img" aria-label="hospital">🏥</span></SecondaryTitle>
          
        </ColumnHosp>
      </Wrapper>;
  }
}

export default Experience;

