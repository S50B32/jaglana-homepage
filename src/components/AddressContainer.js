import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;

    position: absolute;
    bottom: 6.5%;
    left: 5%;

    h1{
        font-size: 3.4rem;
        font-weight: 400;
        opacity: .8;
    }
`


const AddressContainer = () => (
    <StyledWrapper>
      <h1> Poznań — Kramarska 1/5 — <a href="tel:+48 884 666 906">884 666 906</a> </h1>
    </StyledWrapper>
)

export default AddressContainer