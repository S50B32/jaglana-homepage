import React from 'react'

import scrollTo from 'gatsby-plugin-smoothscroll'

import scrollDownIcon from '../images/expand_more.svg'

import styled from 'styled-components'


const StyledScrollDownButton = styled.img`
    width: 145px;
    display: block;
    position: absolute;

    opacity: .7;
    z-index: 100;

        bottom: 10%;
        left: 50%;
        transform: translate(-50%, 50%);
`

const ScrollDownButton = ({anchor}) => (

    <StyledScrollDownButton src={scrollDownIcon} onClick={() => scrollTo(`${anchor}`)}></StyledScrollDownButton>

)

export default ScrollDownButton
