import React, { Component } from 'react';
import styled from 'styled-components';

import ProfilePicture from '../img/ProfilePicture.png'


const Wrapper = styled.section`
  background-color: #ff9900;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  background-color: #FFFFFF;
  border-radius: 50%;
`;

const Text = styled.div`
`;

const Title = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  font-size: 30px;
`;

const SecondaryTitle = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  font-size: 23px;
`;

const ExplanationText = styled.p`
  width: 800px;
`;

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <Img src={ProfilePicture} />
        <Text>
          <Title>Germán Rodríguez</Title>
          <SecondaryTitle>FRONTEND DEVELOPER</SecondaryTitle>
          <ExplanationText>I'm a recent Ironhack Barcelona graduate in Full Stack Development.
          Previously, I was working in a hospital where I was dealing with pressure on a daily basis. Looking to leave my comfort zone and learn new things, I dove into an unknown sector to start a new adventure and grow as a person.
          I'm known to be hands-on, dynamic, communicative, enthusiastic, eager to learn, easy going and a team player.</ExplanationText>
        </Text>
      </Wrapper>
    )
  }
}

export default HomePage;
