import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  position: relative;
  top: 0;
  background-color: #000000;
  width: 100%;
`;

const Navlist = styled.section`
  display: flex;
  list-style: none;
  padding: 25px 0px;
  justify-content: flex-end;
`;

const NavContent = styled.li`
  color: #FFFFFF;
  padding-right: 20px;
`;

class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <Navlist>
          <NavContent>About</NavContent>
          <NavContent>Experience</NavContent>
          <NavContent>Portfolio</NavContent>
          <NavContent>Contact</NavContent>
        </Navlist>
      </Wrapper>
    );
  }
}

export default Nav;
