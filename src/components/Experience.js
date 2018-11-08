import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import posed from "react-pose";

//-------Images

import arrow from "../img/arrow.svg";

//-------

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});


const Wrapper = styled.section`
  background-color: #f4f4f4;
  width: 100%;
  margin: 2rem 0;
`;


class Experience extends Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }
  render() {
    const { isVisible } = this.state;
    return (
      <Wrapper>
        <Box className="box" pose={isVisible ? "visible" : "hidden"} />
      </Wrapper>
    )
    
  }
}

export default Experience;

