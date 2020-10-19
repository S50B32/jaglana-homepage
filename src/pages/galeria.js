import React from "react"
import styled from "styled-components"

import InstagramGrid from "../components/InstagramGallery/InstagramGrid"
import ScrollDownButton from "../components/ScrollDownButton"
import PageTitle from "../components/PageTitle"
import LogoReusable from "../components/Logo/LogoReusable"

const StyledWrapper = styled.div`
  box-sizing: border-box;

  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  position: relative;

  backdrop-filter: blur(15px) brightness(1.2);

  overflow: hidden;

  @media (max-width: 800px) {
    width: 100%;
    height: 100vh;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  right: 5vw;
  height: 15rem;
  width: 15rem;

  margin: 0;
  padding: 0;

  background-color: rgba(255, 255, 255, 0.3);
`

const Gallery = () => (
<<<<<<< HEAD
  <StyledWrapper id="gallery">
    <PageTitle title="galeria" />
    <LogoWrapper>
      <LogoReusable type="white" />
    </LogoWrapper>
    <InstagramGrid />
    <ScrollDownButton anchor="#location" />
  </StyledWrapper>
=======
    
        <StyledWrapper id='gallery'>
            <PageTitle title='galeria' />
            <InstagramGrid />
            <ScrollDownButton anchor='#location' />
        </StyledWrapper>
>>>>>>> master
)

export default Gallery
