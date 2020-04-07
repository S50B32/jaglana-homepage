import React from 'react'
import styled from 'styled-components'
import uberLogo from '../images/uber-logo.png'
import pyszneLogo from '../images/pyszne-logo.png'


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

    :hover{
        opacity: .4;
    }

    :active{
        opacity: .2;
    }
`

const DeliveriesContainerReusable = () => (
    <>
        <StyledLink href='https://www.ubereats.com/pl/poznan/food-delivery/jaglana/nYqW-VJCRVmDWj7e7OBg3w'><StyledLogo src={uberLogo}></StyledLogo></StyledLink>
        <StyledLink href='https://www.pyszne.pl/menu/jaglana-1'><StyledLogo src={pyszneLogo}></StyledLogo></StyledLink>
    </>
)

export default DeliveriesContainerReusable