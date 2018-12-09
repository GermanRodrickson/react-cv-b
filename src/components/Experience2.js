import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  background-color: #f4f4f4;
  width: 100%;
  padding: 2rem 0;
  position: relative;
  height: 600px;
`;

const Title = styled.h2`
  letter-spacing: 3px;
  text-align: center;
  font-size: 3rem;
  color: #32363e;
  margin-bottom: 40px;
  font-weight: 600;
`;


const Cards = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  background-color: #ffffff;
  color: #666;
  padding: 10px;
  width: 40%;
  margin: 0 auto;

  p {
    line-height: 1.8em;
  }
`;

const TitleCard = styled.h3`
  color: #44bafc;
`;

class Experience2 extends Component {
  render() {
    return <Wrapper>
        <Title>Experience</Title>
        <Cards>
          <TitleCard>Frontend Developer</TitleCard> <p>🗓 2018 - Present</p>Focus on <strong>
            JavaScript
          </strong>, <strong>SCSS</strong> and <strong>React</strong>
        </Cards>

        <Cards>
          <TitleCard>Hospital de Sant Joan Despí Moisès Broggi</TitleCard> <p>
            🗓 2016-2018
          </p> Medical imaging technician
        </Cards>

        <Cards>
          <TitleCard>Centre Mèdic Alomar</TitleCard> <p>🗓 2017 </p> Medical imaging technician
        </Cards>
      </Wrapper>;
  }
}

export default Experience2;

