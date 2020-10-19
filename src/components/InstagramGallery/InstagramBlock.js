import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-column-start: ${props => props.stylingDetails.columnStart};
  grid-column-end: ${props => props.stylingDetails.columnEnd};
  grid-row-start: ${props => props.stylingDetails.rowStart};
  grid-row-end: ${props => props.stylingDetails.rowEnd};

  opacity: 0.9;

  background-size: cover;
  background-color: ${props =>
    props.stylingDetails.position === "rightTop"
      ? "rgba(239, 167, 57, .7)"
      : "none"};

  -webkit-box-shadow: 0px 0px 103px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 103px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 103px -9px rgba(0, 0, 0, 0.75);

  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.3;
  }
`
const StyledLink = styled.a`
  display: block;
  padding: 20px;
`
const StylesImgContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`
const InstagramBlock = ({ details }) => {
  return details.link ? (
    <StyledBlock stylingDetails={details}>
      <StylesImgContainer>
        <StyledLink target="_blank" rel="noreferrer" href={details.link}>
          <Img fluid={details.src.childImageSharp.fluid} />
        </StyledLink>
      </StylesImgContainer>
    </StyledBlock>
  ) : (
    <StyledBlock stylingDetails={details}>
      <StylesImgContainer>
        <Img fluid={details.src.childImageSharp.fluid} />
      </StylesImgContainer>
    </StyledBlock>
  )
}

export default InstagramBlock
