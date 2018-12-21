import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
  width: 100%;
  height: 35vh;
  padding: 10rem 0;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Title = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  font-size: 3rem;
  color: #FFFFFF;
`;

const Button = styled.button`
  background: none;
  border: 2px solid #ffffff;
  line-height: 1;
  margin: 0 auto;
  padding: 1em 2em;
  color: #ffffff;
  display: block;
  transition: 0.3s;
  letter-spacing: 2px;

  &:hover {
    box-shadow: inset -6.5em 0 0 0 #ffffff, inset 6.5em 0 0 0 #ffffff;
    color: #45bafc;
    border: 2px solid #ffffff;
  }
`;

const Text = styled.p`
  color: #FFFFFF;
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
  color: #2f3640;
  display: inline-block;
  transition: all 0.2s linear;
  background: (linear, left top, right top, from(#45bafc), to(#f4f4f4));
  background: linear-gradient(to right, #45bafc 0%, #f4f4f4 100%);
  background-size: 0 6px;
  background-repeat: no-repeat;
  background-position: left 95%;

  &:hover {
    background-size: 100% 6px;
    color: #ffffff;
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
