import React from "react"
import {createGlobalStyle} from 'styled-components'

import Home from './home'
import AboutUs from './o-nas'
import Gallery from './galeria'
import News from './aktualnosci'
import Location from './gdzie'

import background from '../images/background.jpg'

import ScrollBack from '../components/doWyjebania/ScrollBack'


const GlobalStyle = createGlobalStyle`
 /* to do: adjust all margins to border-box
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }*/

  html{
    font-size: 10px;
    box-sizing: border-box;
    max-width: 100vw;
    overflow-x: hidden;
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
  a{
    color: inherit;
    text-decoration: none;
  }

  button{
    border: none;
    background: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
    margin: 0;

    :hover{
      cursor: pointer;
    }   
  }

  @media (max-width: 1800px) {
    html{
    font-size: 9px;
    }
  }
  @media (max-width: 1600px) {
    html{
    font-size: 8px;
    }
  }
  @media (max-width: 1400px) {
    html{
    font-size: 7px;
    }
  }
  @media (max-width: 1200px) {
    html{
    font-size: 6px;
    }
  }
  @media (max-width: 1000px) {
    html{
    font-size: 5px;
    }
  }
  @media (max-width: 800px) {
    html{
    font-size: 4px;
    }
  }
  @media (max-width: 600px) {
    html{
    font-size: 3px;
    }
  }
  @media (max-width: 400px) {
    html{
    font-size: 2px;
    }
  }
  
`


const IndexPage = () => (
  <> 
    <GlobalStyle />
      <ScrollBack />
      <Home />
      <News />
      <AboutUs />
      <Gallery />
      <Location />
      
  </>
)

export default IndexPage
