import React, { Component } from 'react';
import styled from 'styled-components';

//-------- Images

import profile from '../img/descarga.png'

//----------


const Wrapper = styled.section`
  background-color: #f4f4f4;
  width: 100%;
  padding: 2rem 0;
  position: relative;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 350px;
  height: 350px;
  display: block;
  margin: 0 auto;
`


const Title = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
  margin: 40px 0px;
`

const Text = styled.p`
  width: 900px;
  font-size: 1.2rem;
  display: block;
  margin: 0 auto;
  align-content: top;
  margin-top: 45px;
`;

const WrapperText = styled.div`

`

const Triange = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 40px 0 40px;
  border-color: #FFFFFF transparent transparent transparent;
  position: absolute;
  top: 0;
  margin: 0 auto;
  right: 50%;
  margin-right: -40px;
`;


class About extends Component {
  render() {
    return <Wrapper>
        <Triange></Triange>
        <Title>Bio</Title>
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

