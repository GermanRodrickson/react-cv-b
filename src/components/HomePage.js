import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.section`
  background-color: #32363e;
  width: 100%;
  padding: 6rem 0;
`;


const Title = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #44bafc;
`;

const Button = styled.button`
  background: none;
  border: 2px solid;
  line-height: 1;
  margin: 0 auto;
  padding: 1em 2em;
  color: #bec6d5;
  display: block;
  transition: 0.3s;
  letter-spacing: 2px;

  &:hover {
    box-shadow: inset -6.5em 0 0 0 #44bafc, inset 6.5em 0 0 0 #44bafc;
    color: #000000;
    border: 2px solid #bec6d5;
  }
`;

const Text = styled.p`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
  margin: 40px 0;
`;

const Link = styled.a`
  color: #44BAFC;
  display: inline-block;
  transition: all .2s linear;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#45bafc),
    to(#57eea1)
  );
  background: linear-gradient(to right, #45bafc 0%, #57eea1 100%);
  background-size: 0 6px;
  background-repeat: no-repeat;
  background-position: left 95%;

  &:hover {
    background-size: 100% 6px;
    color: #FFFFFF;
  }
`;


class HomePage extends Component {
  render() {
    return <Wrapper>
        <Title>Frontend Developer</Title>
        <Text>
          Hi, I'm <Link href="#">Germán</Link>! I'm a <Link href="https://www.ironhack.com/" target="_blank">Ironhacker</Link> graduate in Full
          Stack Development.
        </Text>
        <Button>Get in Touch</Button>
      </Wrapper>;
  }
}

export default HomePage;
