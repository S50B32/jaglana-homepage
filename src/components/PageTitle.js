import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: inline-block;
    position: absolute;
    
    left: 5vw;
    top: 0;
`

const Title = styled.h1`
    font-size: 5.2rem;
    color: rgba(255, 255, 255, .9);

    ::after{
        content: '';
        display: block;
        height: 10vh;
        width: 5px;
        background-color: rgba(239, 167, 57, .7);

        position: absolute;
        right: -3vw;
        top: 50%;
        height: 10vh;
        margin-top: -5vh;
    }
`


const PageTitle = ({title, color}) => {
    return(
        <StyledWrapper>
            <Title>{title}</Title>
        </StyledWrapper>
    )
}

export default PageTitle