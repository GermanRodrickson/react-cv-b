import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../img/logo.svg'


const Wrapper = styled.section`
  border: 1px solid red;
  width: 100%;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  display:block;
  margin: 0 auto;
  background-color: #FFFFFF;
  border-radius: 50%;
`;

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <Img src={logo}/>
      </Wrapper>
    );
  }
}

export default HomePage;
