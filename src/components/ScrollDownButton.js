<<<<<<< HEAD
import React from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

import scrollDownIcon from "../images/expand_more.svg"
=======
import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import scrollDownIcon from '../images/expand_more.svg'
import styled, {keyframes} from 'styled-components'

const pulse = keyframes`
    from{
        transform: translate(-50%, 35%);
    }
    
    to {
        transform: translate(-50%, 55%);
    }
`
>>>>>>> master

import styled from "styled-components"

const StyledScrollDownButton = styled.img`
  width: 9vw;
  display: block;
  position: absolute;

  opacity: 0.7;
  z-index: 100;

<<<<<<< HEAD
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 50%);

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
=======
        bottom: 5%;
        left: 50%;

        transform: translate(-50%, 35%);


        :hover{
        opacity: .6;
        cursor: pointer;
        animation: ${pulse} linear 1s infinite;
        }
>>>>>>> master

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
