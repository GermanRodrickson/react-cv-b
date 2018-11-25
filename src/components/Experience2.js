import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  height: 400px;
`

const Line = styled.div`
  position: absolute;
  height: 300px;
  width: 2px;
  top: 0;
  right: 50%;
  margin-left: -1px;
  background-color: red;
`

const Circle = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  top: 0;
  right: 50%;
  margin-right: -5px;
  background-color: red;
`;

class Experience2 extends Component {
  render() {
    return(
    <Wrapper>
      <Circle />
      <Line />
    </Wrapper>)
  }
}

export default Experience2;

