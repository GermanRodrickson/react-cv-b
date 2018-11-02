import React, { Component } from 'react';
import styled from 'styled-components';


//-------- Images

import github from "../img/github-brands.svg";
import linkedin from "../img/linkedin-brands.svg";



//----------


const Wrapper = styled.section`
  background-color: #32363e;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h3`
  font-size: 2.2rem;
  color: #bec6d5;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Email = styled.p`
  font-size: 1rem;
  color: #bec6d5;
  text-transform: uppercase;
`;

const WrapperIcons = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`

const WrapperText = styled.div`
  padding: 10px;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  transition: .5s;
  padding: 0px 40px;
  &:hover {
    transform: translate3d(0px,5px,0px);
  }
`;




class HomePage extends Component {
  render() {
    return <Wrapper>
        <a href="mailto:germanrodrickson@gmail.com?subject=Hello,%20I%20saw%20your%20web!">
          <WrapperText>
            <Title>Germán R. Ojeda</Title>
            <Email>germanrodrickson@gmail.com</Email>
          </WrapperText>
        </a>
        <WrapperIcons>
          <Img src={github} />
          <Img src={linkedin} />
        </WrapperIcons>
      </Wrapper>;
  }
}

export default HomePage;

