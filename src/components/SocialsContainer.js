import React from 'react'
import styled from 'styled-components'
import fbLogo from '../images/fb-logo.png'
import instaLogo from '../images/insta-logo.png'

const StyledSocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;

    position: absolute;
    bottom: 30%;
    right: 5%;

    opacity: 80%;
`

const StyledLogo = styled.img`
    height: 6em;
    width: 6em;
    padding: 1.5em;
    opacity: .9;
        
`



const SocialsContainer = () => (
    <>
        <StyledSocialsContainer>
        <a href='https://www.facebook.com/JaglanaPoznan/'><StyledLogo src={fbLogo}></StyledLogo></a>
        <a href='https://www.instagram.com/jaglana_poznan/'><StyledLogo src={instaLogo}></StyledLogo></a>
        </StyledSocialsContainer>
    </>
)

export default SocialsContainer