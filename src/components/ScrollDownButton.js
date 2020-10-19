import React from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

import scrollDownIcon from "../images/expand_more.svg"

import styled from "styled-components"

const StyledScrollDownButton = styled.img`
  width: 9vw;
  display: block;
  position: absolute;

  opacity: 0.7;
  z-index: 100;

  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 50%);

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }

  :active {
    opacity: 0.2;
  }
`

const ScrollDownButton = ({ anchor }) => (
  <StyledScrollDownButton
    src={scrollDownIcon}
    onClick={() => scrollTo(`${anchor}`)}
  />
)

export default ScrollDownButton
