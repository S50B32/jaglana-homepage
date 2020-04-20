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


const StyledScrollDownButton = styled.img`
    width: 9vw;
    display: block;
    position: absolute;

    opacity: .7;
    z-index: 100;

        bottom: 5%;
        left: 50%;

        transform: translate(-50%, 35%);


        :hover{
        opacity: .6;
        cursor: pointer;
        animation: ${pulse} linear 1s infinite;
        }

        :active{
            opacity: .2;
        } 
`

const ScrollDownButton = ({anchor}) => (

    <StyledScrollDownButton
        src={scrollDownIcon}
        onClick={() => scrollTo(`${anchor}`)}
    />

)

export default ScrollDownButton
