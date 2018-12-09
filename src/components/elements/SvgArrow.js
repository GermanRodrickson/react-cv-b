import React from 'react';
import styled from 'styled-components';

const ContainerArrow = styled.div`
    position: absolute;
    top: 40px;
    left: 10%;
    @media only screen and (max-width: 800px) {
    & {
      left: 0;
    }
  }
    @media only screen and (max-width: 780px) {
    & {
      display: none;
    }
  }
  svg {
    transform: rotate(-20deg);
    width: 100px;
    height: 100px;
    position: absolute;
    right: 30px;
    
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


const Text = styled.p`
  font-size: 1.8rem;
  color: #32363e;
  transform: rotate(-20deg);
  opacity: 0;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-name: prueba;
  @keyframes prueba {
    to {
      opacity:1;
    }
  }
`;


const SvgArrow = (props) => {

  return (
    <ContainerArrow>
      <svg id="" preserveAspectRatio="xMidYMax meet" class="svg-separator sep3" viewBox="0 0 1600 100" style="display: block;" data-height="100">
      <path class="" style="opacity: 1;fill: #273a4c;" d="M-40,71.627C20.307,71.627,20.058,32,80,32s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,26H-60V72L-40,71.627z"></path>
      <path class="" style="opacity: 1;fill: #2a3f54;" d="M-40,83.627C20.307,83.627,20.058,44,80,44s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,14H-60V84L-40,83.627z"></path>
      <path class="" style="fill: rgb(34, 49, 63);" d="M-40,95.627C20.307,95.627,20.058,56,80,56s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,138H-60V96L-40,95.627z"></path></svg>
          </ContainerArrow>
  )
}

export default SvgArrow;

