import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0 20%;
`;

const Box = styled.div`
  transition: all 200ms ease;
  padding: 2.5rem;
  background: #fff;
  border: 1px solid #ebecec;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  display: inline-block;
  width: 20%;
`;


class Skills extends Component {
  render() {
    return (
      <Wrapper>
        <Box>React</Box>
        <Box>AngularJS</Box>
        <Box>Node.js</Box>
        <Box>HTML</Box>
        <Box>SASS</Box>
        <Box>MongoDB</Box>
        <Box>jQuery</Box>
        <Box>Git</Box>
        <Box>Github</Box>
      </Wrapper>
    );
  }
}

export default Skills;
