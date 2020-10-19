import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import PageTitle from "../components/PageTitle"
import Post from "../components/Post"

import background from "../images/background.jpg"

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px;
    box-sizing: border-box;
  }
  
  *{
    scroll-behavior: smooth;
   
  }
  
  body {
    padding: 0;
    margin: 0;

    background-color: grey;
    font-family: 'Cairo';

    overflow-x: hidden;

    background-image: linear-gradient(0deg, rgba(2,0,36,0.4) 0%, rgba(1,0,22,0.3) 10%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.5) 100%), url(${background});
    background-size: cover;
    background-position-y: 64%;
    background-attachment: fixed;

    h1{
        font-family: 'Cairo';
        margin: 0;
    }
    p{
      margin: 0;
    }
  }

  .e-mail__link{
    color: inherit;
    text-decoration: none;
  }

    @media (max-width: 1800px) {
    html{
    font-size: 9px;
    }
  }
`
const StyledLink = styled(Link)`
  background-color: rgba(226, 226, 226, 0.5);
  font-size: 2rem;
  box-sizing: border-box;

  background-color: rgba(239, 167, 57, 0.7);
  background-color: rgba(226, 226, 226, 0.5);
  width: calc(100% / 2 - 1rem);

  backdrop-filter: blur(15px) brightness(1.2);

  font-size: 1.5rem;

  padding: 0 1.5rem 1.5rem;
  margin: 0.5rem;
`
const StyledWrapper = styled.div`
  box-sizing: border-box;

  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;

  position: relative;
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

  justify-content: flex-start;

  overflow: hidden;
`
const Careers = () => (
  <>
    <GlobalStyle />
    <StyledWrapper id="careers">
      <PageTitle title="kariera" />
      <NewsContainer>
        <Post
          title="Dołącz do nas"
          content="Informacja o stanowiskach, na które rekrutujecie. Na dole formularz kontaktowy."
        />
        <StyledLink to="/">Wróć do strony głównej</StyledLink>
      </NewsContainer>
    </StyledWrapper>
  </>
)

export default Careers
