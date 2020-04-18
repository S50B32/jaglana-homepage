import React from 'react'
import styled from 'styled-components'
import jaglanaLogo from '../../images/jaglana-logo-white.png'
import scrollTo from 'gatsby-plugin-smoothscroll'


const StyledLogo = styled.div`
    height: 32rem;
    width: 32rem;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%);

    img{
        height: 100%;
        opacity: .8;
    }
`

const Logo = () => (
    <StyledLogo>
        <img src={jaglanaLogo} onClick={() => scrollTo(`#about-us`)} />
    </StyledLogo>
)

export default Logo;