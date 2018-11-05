import React, { Component } from 'react';
import styled from 'styled-components';

//-------Images

import logo from "../img/logo.png";

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
  margin-bottom: 30px;
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
  height: 400px;
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
  margin-bottom: 15px;
  font-size: 1.7rem;
  font-weight: 600;
`;


const Img = styled.img`
  width: 200px;
  position: absolute;
  top: 30%;
  left: 10%;
`;

const Date = styled.p`
  position: absolute;
  top: 50%;
  left: 11%;
  color: #bec6d5;
  font-size: 1.2rem;
`

const List = styled.li`
  font-size: 1.3rem;
  color: #bec6d5;
  margin: 0 30px;
  padding-bottom: 5px;
`;


class Experience extends Component {
  render() {
    return <Wrapper>
        <Title>Experience</Title>
        <ColumnDev>
          <SecondaryTitle>As a Developer <span role="img" aria-label="laptop">💻</span></SecondaryTitle>
          <TextWrapper>
            <Works>Frotend Developer</Works>
            <Text>This is my firts job as a Frontend Developer.</Text>
            <List>UI Developer using SASS and gulp, also using Javascript and DOM manipulation</List>
            <List>React</List>
            <List>Newsletter using Selligent</List>
          </TextWrapper>
            <Img src={logo}></Img>
            <Date>2018 - actualidad</Date>
        </ColumnDev>
        <ColumnHosp>
          <SecondaryTitle>As a medical imaging technician <span role="img" aria-label="hospital">🏥</span></SecondaryTitle>
          
        </ColumnHosp>
      </Wrapper>;
  }
}

export default Experience;

