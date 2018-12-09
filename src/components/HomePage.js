import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
  background-color: #32363e;
  width: 100%;
  padding: 10rem 0;
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
    color: #FFFFFF;
    border: 2px solid #bec6d5;
  }
`;

const Text = styled.p`
  color: #bec6d5;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
  margin: 40px 0;
  @media only screen and (max-width: 400px) {
    & {
      padding: 0 1em;
    }
  }
`;

const Link = styled.a`
  color: #44BAFC;
  display: inline-block;
  transition: all .2s linear;
  background: (
    linear,
    left top,
    right top,
    from(#45bafc),
    to(#f4f4f4)
  );
  background: linear-gradient(to right, #45bafc 0%, #f4f4f4 100%);
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
        Hi, I'm <Link href="#bio" >Germán</Link>! 👋🏻 I'm an <Link href="https://www.ironhack.com/" target="_blank">Ironhacker</Link> & Full
          Stack Developer.
        </Text>
      <a href=" #contacto"> <Button>Get in Touch</Button></a>
      </Wrapper>;
  }
}

export default HomePage;
