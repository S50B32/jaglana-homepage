import React from "react"
import styled from "styled-components"
import ScrollDownButton from "../components/ScrollDownButton"
import PageTitle from "../components/PageTitle"
import Post from "../components/Post"
import LogoReusable from "../components/Logo/LogoReusable"

const StyledWrapper = styled.div`
  box-sizing: border-box;

  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  position: relative;

  overflow-x: hidden;

  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
  }
`

const NewsContainer = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;

  background-color: rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0);

  width: 90%;
  height: 80%;

  position: relative;
  top: 10%;
  left: 5%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: space-evenly;
  align-items: center;
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

const Avatar = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;

  opacity: 0.9;
`

const AboutUs = () => (
  <StyledWrapper id="about-us">
    <PageTitle title="o nas" />
    <LogoWrapper>
      <LogoReusable type="white" />
    </LogoWrapper>
    <NewsContainer>
      <Avatar src={require("../images/girl.jpg")}></Avatar>
      <Post
        title="Ona"
        content="Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. "
      />
      <Avatar src={require("../images/boy.jpg")}></Avatar>.
      <Post
        title="On"
        content="Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. "
      />
    </NewsContainer>
    <ScrollDownButton anchor="#gallery" />
  </StyledWrapper>
)

export default AboutUs
