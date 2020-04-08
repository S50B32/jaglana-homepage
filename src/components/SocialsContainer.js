import React from 'react'
import styled from 'styled-components'
import fbLogo from '../images/fb-logo.png'
import instaLogo from '../images/insta-logo.png'

const StyledSocialsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;

    position: absolute;
    bottom: 7%;
    right: 5%;

    opacity: 80%;
`

const StyledLogo = styled.img`
    height: 6em;
    width: 6em;
    padding: 0 1.5em 0;
    opacity: .9;

    :hover{
        opacity: .4;
    }

    :active{
        opacity: .2;
    }   
        
`



const SocialsContainer = () => (
    <>
        <StyledSocialsContainer>
        <a target="_blank" href='https://www.facebook.com/JaglanaPoznan/'><StyledLogo src={fbLogo}></StyledLogo></a>
        <a target="_blank" href='https://www.instagram.com/jaglana_poznan/'><StyledLogo src={instaLogo}></StyledLogo></a>
        </StyledSocialsContainer>
    </>
)

export default SocialsContainer