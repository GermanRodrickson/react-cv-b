import React, { Component } from 'react';
import styled from 'styled-components';

//-------- Images

import profile from '../img/descarga.png'

//----------


const Wrapper = styled.section`
  background-color: #fcfcfc;
  width: 100%;
  padding: 2rem 0;
`;

const Img = styled.img``

const Title = styled.h2``

const Text = styled.p``



class About extends Component {
  render() {
    return (
      <Wrapper>
        <Title>About me</Title>
        <Img src={profile} />
        <Text></Text>
      </Wrapper>
    )
  }
}

export default About;

