import React, { Component } from 'react'
import styled from 'styled-components'

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
  width: 350px;
  height: 350px;
  display: inline-block;
  border-radius: 50%;
  @media only screen and (max-width: 900px) {
    & {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 500px) {
    & {
      width: 250px;
      height: 250px;
    }
  }
`;


const Title = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #000000;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  color: #000000;
  width: 500px;
  font-size: 1.2rem;
  display: inline-block;
  align-content: top;
  margin-top: 45px;
  line-height: 1.6;
  margin-left: 140px;
  @media only screen and (max-width: 900px) {
    & {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 500px) {
    & {
      width: 80%;
    }
  }
`;

const WrapperText = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  @media only screen and (max-width: 900px) {
    & {
      display: block;
      margin: 0 auto;
    }
  }
`;

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
`

const Word = styled.strong`
  color: #000000;
`

class About extends Component {
  render() {
    return <Wrapper id="bio">
        <Triange />
        <Title>Bio</Title>
          <WrapperText>
            <Img src={profile} />
            <Text>
              Previously, I was working in a <Word>hospital</Word> where I was dealing with pressure on a daily basis. Looking to <Word>leave my comfort zone</Word> and learn new things, I dove into an unknown sector to start a new adventure and <Word>grow as a person.</Word>
              <br /> <br />
              I'm known to be hands-on, dynamic, communicative, enthusiastic, eager to learn, easy going and a team player.
            </Text>
        </WrapperText>
      </Wrapper>;
  }
}

export default About;

