import React, { Component } from 'react';
import styled from 'styled-components';
import SvgArrow from './elements/SvgArrow'

const Wrapper = styled.section`
  background-color: #f4f4f4;
  width: 100%;
  margin: 2rem 0;
`;

const Prueba = styled.div`
  svg {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    .draw-arrow {
      stroke-width: 5;
      stroke: dodgerblue;
      fill: none;
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-name: draw;
      &.tail-1 {
        animation-delay: 0.5s;
      }
      &.tail-2 {
        animation-delay: 0.7s;
      }
    }
  }
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;


class Experience extends Component {
  render() {
    return (
      <Wrapper>
        <SvgArrow />
      </Wrapper>
    )
    
  }
}

export default Experience;

