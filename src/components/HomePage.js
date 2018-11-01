import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.section`
  background-color: #32363e;
  width: 100%;
`;


const Title = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  font-size: 30px;
`;

const Button = styled.button`

`;

const Text = styled.p`
  color: #bec6d5;
  width: 50%;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const Link = styled.a`
  display: inline-block;
  transition: all 100ms linear;
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
    background-size: 100% 10px;
  }
`;


class HomePage extends Component {
  render() {
    return <Wrapper>
        <Title>Frontend Developer</Title>
        <Text>
          Hi, I'm Germán! I'm a <Link href="https://www.ironhack.com/" target="_blank">Ironhacker</Link> graduate in Full
          Stack Development. Previously, I was working in a hospital where I
          was dealing with pressure on a daily basis. Looking to leave my
          comfort zone and learn new things, I dove into an unknown sector
          to start a new adventure and grow as a person. I'm known to
          behands-on, dynamic, communicative, enthusiastic, eager to learn,
          easy going and a team player.
        </Text>
        <Button>Get in Touch</Button>
      </Wrapper>;
  }
}

export default HomePage;
