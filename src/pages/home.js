import React from "react"
import styled from "styled-components"

import NavBar from "../components/NavBar/NavBar"
import Logo from "../components/Logo/Logo"
import SocialsContainer from "../components/SocialsContainer/SocialsContainer"
import AddressContainer from "../components/AddressContainer"
import ScrollDownButton from "../components/ScrollDownButton"
import DeliveriesContainer from "../components/DeliveriesContainer/DeliveriesContainer"

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Cairo";
  font-size: 1em;
  color: white;

  overflow-x: hidden;

  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`
const Home = () => {
  return (
    <StyledWrapper id="home">
      <NavBar />
      <Logo />
      <SocialsContainer />
      <AddressContainer />
      <ScrollDownButton anchor="#news" />
      <DeliveriesContainer />
    </StyledWrapper>
  )
}

export default Home
