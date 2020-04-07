import React from 'react'
import styled from 'styled-components'
import uberLogo from '../images/uber-logo.png'
import pyszneLogo from '../images/pyszne-logo.png'

const StyledDeliveriesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;

    position: absolute;
    bottom: 7%;
    right: 10%;

    opacity: 80%;
`

const StyledLogo = styled.img`
    width: 20em;
    padding: 0 1.5em 0;
    opacity: .9;

    :hover{
        opacity: .4;
    }

    :active{
        opacity: .2;
    }       
`




const DeliveriesContainer = () => (
    <>
        <StyledDeliveriesContainer>
            <StyledLogo src={uberLogo}></StyledLogo>
            <StyledLogo src={pyszneLogo}></StyledLogo>
        </StyledDeliveriesContainer>
    </>
)

export default DeliveriesContainer