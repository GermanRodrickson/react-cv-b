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
  color: ${props => props.developer ? "#bec6d5" : "#000000"};
`;

const ColumnHosp = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 50%;
  display: inline-block;
  font-size: 0px;
  height: 400px;
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
  color: ${props => props.developer ? "#bec6d5" : "#000000"};
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
  left: ${props => props.developer ? "10%" : "90%"};
  `;

const Date = styled.p`
  position: absolute;
  top: ${props => props.developer ? "45%" : "90%"};
  left: ${props => props.developer ? "11%" : "0%"};
  font-size: 1.2rem;
`;

const List = styled.li`
  font-size: 1.3rem;
  color: #bec6d5;
  margin: 0 30px;
  padding-bottom: 5px;
`;

const BarcelonaVirtual = styled.a`
  color: #c64145;

  &:hover {
    text-decoration: underline;
    color: #c64145;
  }
`;

const DateHospital = styled.p`
  color: #000000;
  font-size: 1.2rem;
`;

const TextWrapperHosp = styled.div`
  top: 30%;
  position: absolute;
  left: 35%;
  width: 50%;
`;


class Experience extends Component {
  render() {
    return <Wrapper>
        <Title>Experience</Title>
        <ColumnDev>
          <SecondaryTitle developer>As a Developer <span role="img" aria-label="laptop">💻</span></SecondaryTitle>
          <TextWrapper>
            <Works dev>Frotend Developer</Works>
            <Text developer>This is my firts job as a Frontend Developer, working in <BarcelonaVirtual href="https://www.bvirtual.com/">Barcelona Virtual</BarcelonaVirtual></Text>
            <List>UI Developer using SASS and gulp, also with Javascript and DOM manipulation</List>
            <List>React</List>
            <List>Newsletter using Selligent</List>
          </TextWrapper>
            <Img developer src={logo}></Img>
            <Date developer>2018 - actualidad</Date>
        </ColumnDev>
        <ColumnHosp>
          <SecondaryTitle>As a medical imaging technician <span role="img" aria-label="hospital">🏥</span></SecondaryTitle>
            <TextWrapperHosp>
              <DateHospital>2016 - 2018</DateHospital>
              <Works>Medical imaging technician</Works>
              <Text>Hospital de Sant Joan Despí Moisès Broggi</Text>
              
              <DateHospital>2016 - 2018</DateHospital>
              <Works>Medical imaging technician</Works>
              <Text>Hospital de Sant Joan Despí Moisès Broggi</Text>
            </TextWrapperHosp>
        </ColumnHosp>
      </Wrapper>;
  }
}

export default Experience;

