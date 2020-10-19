import React from "react"
import styled from "styled-components"
import uberLogo from "../../images/uber-logo.png"
import pyszneLogo from "../../images/pyszne-logo.png"

const StyledDeliveriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;

  position: absolute;
  bottom: 7%;
  right: 17%;

  opacity: 80%;
`

const StyledLink = styled.a`
  display: inline-block;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
`

const StyledLogo = styled.img`
  width: 20em;
  padding: 0 1.5em 0;
  opacity: 0.9;

  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  :hover {
    opacity: 0.4;
  }

  :active {
    opacity: 0.2;
  }
`

const DeliveriesContainer = () => (
  <>
    <StyledDeliveriesContainer>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://www.ubereats.com/pl/poznan/food-delivery/jaglana/nYqW-VJCRVmDWj7e7OBg3w"
      >
        <StyledLogo src={uberLogo}></StyledLogo>
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://www.pyszne.pl/menu/jaglana-1"
      >
        <StyledLogo src={pyszneLogo}></StyledLogo>
      </StyledLink>
    </StyledDeliveriesContainer>
  </>
)

export default DeliveriesContainer
