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
`;

const Text = styled.p`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const ColumnHosp = styled.div`
  background-color: #FFFFFF;
  width: 50%;
  display: inline-block;
  font-size: 0px;
`;
const ColumnDev = styled.div`
  background-color: #32363e;
  width: 50%;
  display: inline-block;
  font-size: 0px;
`;

const SecondaryTitle = styled.h3`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 2rem;
  margin: 20px 0px;
`;

const Works = styled.h4`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 1.5rem;
`;

const WrapperText = styled.div `
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  float: left;
`;






class Experience extends Component {
  render() {
    return <Wrapper>
        <Title>Experience</Title>
        <ColumnDev>
          <SecondaryTitle>As a Developer <span role="img" aria-label="laptop">💻</span></SecondaryTitle>
            <Works>Barcelona Virtual</Works>
            <Text>Frontend Developer</Text>
            <Text>This is my firts job as a developer, we are using php, sass and now we are implementing React.</Text>
            <Img src={nodejs}></Img>
        </ColumnDev>
        <ColumnHosp>
          <SecondaryTitle>As a medical imaging technician <span role="img" aria-label="hospital">🏥</span></SecondaryTitle>
        </ColumnHosp>
      </Wrapper>;
  }
}

export default Experience;

