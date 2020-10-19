import React from "react"
import styled from "styled-components"

import premises from '../data/premises'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;

  position: absolute;
  bottom: 6.5%;
  left: 5%;

  h1 {
    font-size: 3.4rem;
    font-weight: 400;
    opacity: 0.8;
  }
`

const AddressContainer = () => (
<<<<<<< HEAD
  <StyledWrapper>
    <h1>
      {" "}
      Poznań — Kramarska 1/5 — <a href="tel:+48 884 666 906">
        884 666 906
      </a>{" "}
    </h1>
  </StyledWrapper>
=======
    <StyledWrapper>
      <h1> {premises.contact.address.city} — {premises.contact.address.street} {premises.contact.address.streetNo} — <a href="tel:+48 884 666 906">{premises.contact.phone}</a> </h1>
    </StyledWrapper>
>>>>>>> master
)

export default AddressContainer
