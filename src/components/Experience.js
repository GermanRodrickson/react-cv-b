import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  position: relative;
  background-color: #e73c7e;
  width: 100%;
  padding: 2rem 0;
  position: relative;
`;

const Title = styled.h2`
  letter-spacing: 3px;
  text-align: center;
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 40px;
  font-weight: 600;
  margin-top: 30px;
`;


const Cards = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  background-color: #ffffff;
  color: #666;
  padding: 10px;
  width: 40%;
  margin: 5px auto;

  p {
    line-height: 1.8em;
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 70%;
    }
  }

  @media only screen and (max-width: 850px) {
    & {
      width: 60%;
    }
  }
`;

const TitleCard = styled.h3`
  color: #e73c7e;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 40px 0 40px;
  border-color: #ffffff transparent transparent transparent;
  position: absolute;
  top: 0;
  margin: 0 auto;
  right: 50%;
  margin-right: -40px;
`;


class Experience2 extends Component {
  render() {
    return <Wrapper>
        <Triangle />
        <Title>Experience</Title>
        <Cards>
          <TitleCard>Frontend Developer <span role="img" aria-label="laptop">💻</span></TitleCard> <p>🗓 2018 - Present</p>Focus on <strong>
            JavaScript
          </strong>, <strong>SCSS</strong> and <strong>React</strong>
        </Cards>

        <Cards>
          <TitleCard>Hospital de Sant Joan Despí Moisès Broggi <span role="img" aria-label="hospital">🏥</span> </TitleCard> <p>
            🗓 2016-2018
          </p> Medical imaging technician
        </Cards>

        <Cards>
        <TitleCard>Centre Mèdic Alomar <span role="img" aria-label="hospital">🏥</span> </TitleCard> <p>🗓 2017 </p> Medical imaging technician
        </Cards>
      </Wrapper>;
  }
}

export default Experience2;

