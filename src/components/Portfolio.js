import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  margin: 0 auto;
  padding: 2rem 0;
`;

const Title = styled.section`
  font-size: 4em;
  text-align: center;
`


class Portfolio extends Component {
  render() {
    return <Wrapper>
      <Title>Working on it</Title>
    </Wrapper>;
  }
}

export default Portfolio;
