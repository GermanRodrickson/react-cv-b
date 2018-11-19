import React, { Component } from 'react';
import styled from 'styled-components';


//------ Images
import logo from "../img/logo.png";

//-------


//------- Elements
import SvgArrow from './elements/SvgArrow'
import SvgArrowHosp from './elements/SvgArrowHosp'
//-------

const Wrapper = styled.section`
  background-color: #f4f4f4;
  width: 100%;
  padding: 2rem 0;
  position: relative;
`;

const Container = styled.div `
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

const SecondaryTitle = styled.h3`
  letter-spacing: 3px;
  text-align: center;
  font-size: 2rem;
  color: #32363e;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Img = styled.img`
  display: block;
  margin: 10px auto;
`

const Text = styled.p`
  font-size: 1.3em;
  text-align: center;
  display: block;
  margin: 10px auto;
`;

const DeveloperWrapper = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #32363e;
  width: 60%;
  margin: 50px auto;
`;

const Place = styled.p`
  letter-spacing: 3px;
  text-align: center;
  font-size: 1.5rem;
  color: #32363e;
  margin-bottom: 20px;
`;

class Experience extends Component {
  render() {
    
    return <Wrapper>
        <Container>
          <Title>Experience</Title>
          {/* <SvgArrow /> */}

          <DeveloperWrapper>
            <Img src={logo} />
            <SecondaryTitle>Frontend Developer</SecondaryTitle>
            <Text>🗓 2018 - Present</Text>
            <Text>
              Focus on <strong>JavaScript</strong>, <strong>SCSS</strong> and <strong>React</strong>
            </Text>
          </DeveloperWrapper>

          {/* <SvgArrowHosp/> */}
          <Place>Hospital de Sant Joan Despí Moisès Broggi</Place>
          <SecondaryTitle>Medical imaging technician</SecondaryTitle>
          <Text>🗓 2016-2018 </Text>
          <br></br>
          <br></br>
          <Place>Centre Mèdic Alomar</Place>
          <SecondaryTitle>Medical imaging technician</SecondaryTitle>
          <Text>🗓 2017 </Text>
        </Container>
      </Wrapper>;
    
  }
}

export default Experience;

