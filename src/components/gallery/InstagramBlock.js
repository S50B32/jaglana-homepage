import React from "react";
import styled from 'styled-components';

const StyledBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    grid-column-start: ${props => props.stylingDetails.columnStart};
    grid-column-end: ${props => props.stylingDetails.columnEnd};
    grid-row-start: ${props => props.stylingDetails.rowStart};
    grid-row-end: ${props => props.stylingDetails.rowEnd};

    opacity: .9;

    background-image: url(${props => props.stylingDetails.link ? null : props.stylingDetails.img });
    background-size: cover;
    background-color: ${props => props.stylingDetails.position === 'rightTop' ? 'rgba(239, 167, 57, .7)' : 'none'};7

    -webkit-box-shadow: 0px 0px 103px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 103px -9px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 103px -9px rgba(0,0,0,0.75);
`
const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledImg = styled.img`
    max-width: 45%;
    opacity: .9;

    &:hover{
        opacity: .6;
    }
    &:active{
        opacity: .3;
    }
`

const InstagramBlock = ({details}) => {
    return( details.link ?
        (<StyledBlock stylingDetails={details}>
            <StyledLink target="_blank" href={details.link}>
                <StyledImg src={details.img} />
            </StyledLink>
        </StyledBlock>)
         :
        <StyledBlock stylingDetails={details} /> )
}

export default InstagramBlock;