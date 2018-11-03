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
`

const Img = styled.img`
  width: 350px;
  height: 350px;
  display: inline-block;
  border-radius: 50%;
`


const Title = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
  margin: 40px 0px 0px 0px;
`

const Text = styled.p`
  width: 500px;
  font-size: 1.2rem;
  display: inline-block;
  align-content: top;
  margin-top: 45px;
  line-height: 1.6;
  margin-left: 140px;
`

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
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
`

const Word = styled.strong`
  color: #44bafc;
`

class About extends Component {
  render() {
    return <Wrapper>
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

