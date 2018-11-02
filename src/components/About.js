import React, { Component } from 'react';
import styled from 'styled-components';

//-------- Images

import profile from '../img/descarga.png'

//----------


const Wrapper = styled.section`
  background-color: #fcfcfc;
  width: 100%;
  padding: 2rem 0;
`

const Img = styled.img`
  border-radius: 50%;
  width: 350px;
  height: 350px;
  display: inline-block;
`

const Title = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
  margin-bottom: 40px;
`

const Text = styled.p`
  width: 500px;
  font-size: 1.2rem;
  display: inline-block;
  align-content: top;
  margin-top: 45px;
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: space-evenly;
`


class About extends Component {
  render() {
    return <Wrapper>
        <Title>About me</Title>
        <WrapperText>
          <Img src={profile} />
          <Text>
            I'm a recent Ironhack Barcelona graduate in Full Stack
            Development.<br/> <br/>Previously, I was working in a hospital where I was
            dealing with pressure on a daily basis. Looking to leave my
            comfort zone and learn new things, I dove into an unknown sector
            to start a new adventure and grow as a person.<br/> <br/>I'm known to be
            hands-on, dynamic, communicative, enthusiastic, eager to learn,
            easy going and a team player.
          </Text>
        </WrapperText>
      </Wrapper>;
  }
}

export default About;

