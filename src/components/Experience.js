import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  background-color: #fcfcfc;
  width: 100%;
  padding: 6rem 0;
`;


const Title = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
`;

const Text = styled.p`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
  margin: 40px 0;
`;

const ColumnHosp = styled.div`
  background-color: #ffffff;
  width: 50%;
  height: 100px;
  display: inline-block;
  font-size: 0px;
`;
const ColumnDev = styled.div`
  background-color: #32363e;
  width: 50%;
  height: 100px ;
  display: inline-block;
  font-size: 0px;
`;

const SecondaryTitle = styled.h3`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 2rem;
`;



class HomePage extends Component {
  render() {
    return <Wrapper>
        <Title>Experience</Title>
        <ColumnDev>
          <SecondaryTitle>As a Developer</SecondaryTitle>
        </ColumnDev>
        <ColumnHosp>
          <SecondaryTitle>As a medical imaging technician</SecondaryTitle>
        </ColumnHosp>
      </Wrapper>;
  }
}

export default HomePage;

