import React from 'react'
import styled from 'styled-components'
import fbLogoWhite from '../images/fb-logo-white.png'
import instaLogoWhite from '../images/insta-logo-white.png'
import fbLogoBlack from '../images/fb-logo-black.png'
import instaLogoBlack from '../images/insta-logo-black.png'

/*const StyledSocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;

    opacity: 80%;
`*/

const StyledLink = styled.a`
    display: inline-block;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 0;
    padding:0;
`

const StyledLogo = styled.img`
    width: 100%;
    height: 100%;

    :hover{
        opacity: .6;
    }

    :active{
        opacity: .2;
    }     
`

const SocialsContainerReusable = ({type}) => {
    
    if (type==='black'){
        return(
            <>
                <StyledLink target="_blank" href='https://www.facebook.com/JaglanaPoznan/'><StyledLogo src={fbLogoBlack}></StyledLogo></StyledLink> 
                <StyledLink target="_blank" href='https://www.instagram.com/jaglana_poznan/'><StyledLogo src={instaLogoBlack}></StyledLogo></StyledLink>
            </>
        )
    }else if(type==='white'){
        return(
            <>
                <StyledLink target="_blank" href='https://www.facebook.com/JaglanaPoznan/'><StyledLogo src={fbLogoWhite}></StyledLogo></StyledLink> 
                <StyledLink target="_blank" href='https://www.instagram.com/jaglana_poznan/'><StyledLogo src={instaLogoWhite}></StyledLogo></StyledLink>
            </>
        )
    }else
        return null;
    
   
}

export default SocialsContainerReusable