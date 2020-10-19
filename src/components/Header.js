import React from "react"
import PropTypes from "prop-types"
import NavBar from "./NavBar/NavBar"
import styled from "styled-components"

const StyledHeader = styled.header`
  h1 {
    display: none;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader id="header">
      <h1>{siteTitle}</h1>
      <NavBar />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
