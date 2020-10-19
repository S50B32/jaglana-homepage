import React from "react"
import styled from "styled-components"

import uberLogo from "../../images/uber-logo.png"
import pyszneLogo from "../../images/pyszne-logo.png"
import uberLogoBlack from "../../images/uber-logo-black.png"
import pyszneLogoBlack from "../../images/pyszne-logo-black.png"

const StyledLink = styled.a`
  display: inline-block;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
`

const StyledLogo = styled.img`
  width: 100%;
  opacity: ${props => (props.type === "white" ? 1 : 0.6)};

  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  :hover {
    opacity: ${props => (props.type === "white" ? 0.8 : 0.8)};
  }
  :active {
    opacity: ${props => (props.type === "white" ? 0.6 : 1)};
  }
`

const DeliveriesContainerReusable = ({ type }) => {
  if (type === "black") {
    return (
      <>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ubereats.com/pl/poznan/food-delivery/jaglana/nYqW-VJCRVmDWj7e7OBg3w"
        >
          <StyledLogo type={type} src={uberLogoBlack} />
        </StyledLink>
        <StyledLink target="_blank" href="https://www.pyszne.pl/menu/jaglana-1">
          <StyledLogo type={type} src={pyszneLogoBlack} />
        </StyledLink>
      </>
    )
  } else if (type === "white") {
    return (
      <>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ubereats.com/pl/poznan/food-delivery/jaglana/nYqW-VJCRVmDWj7e7OBg3w"
        >
          <StyledLogo type={type} src={uberLogo} />
        </StyledLink>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pyszne.pl/menu/jaglana-1"
        >
          <StyledLogo type={type} src={pyszneLogo} />
        </StyledLink>
      </>
    )
  } else return null
}

export default DeliveriesContainerReusable
