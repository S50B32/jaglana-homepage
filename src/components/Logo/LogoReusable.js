import React from 'react'
import styled from 'styled-components'
import jaglanaLogoWhite from '../../images/jaglana-logo-white.png'
import jaglanaLogoBlack from '../../images/jaglana-logo-black.png'
import scrollTo from 'gatsby-plugin-smoothscroll'


const StyledLogoReusable = styled.img`
    height: 80%;
    opacity: .6;

    transition-duration: .5s;
    transition-timing-function: ease-in-out;

    :hover{
        opacity: .4;
        cursor: pointer;
    }

    :active{
        opacity: .2;
    } 
`

const LogoReusable = ({type}) => {
    if (type==='black'){
        return(<StyledLogoReusable src={jaglanaLogoBlack} onClick={() => scrollTo(`#home`)}></StyledLogoReusable>)
    }else if (type==='white'){
        return(<StyledLogoReusable src={jaglanaLogoWhite} onClick={() => scrollTo(`#home`)}></StyledLogoReusable>)
    }else
        return null;
}
   

export default LogoReusable;