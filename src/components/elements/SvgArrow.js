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
      <Text>As a Developer <span >💻</span></Text>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 43.1 85.9">
        <path strokeLinecap="round" strokeLinejoin="round" className="st0 draw-arrow" d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1" />
        <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-1" d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58" />
        <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-2" d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9" />
      </svg>
    </ContainerArrow>
  )
}

export default SvgArrow;

