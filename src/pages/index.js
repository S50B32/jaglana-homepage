import React from "react"
//import { Link } from "gatsby"
import styled, {createGlobalStyle} from 'styled-components'
import NavBar from '../components/NavBar'
import SocialsContainer from '../components/SocialsContainer'
import background from '../images/background.jpg'
import MidSection from '../components/MidSection'
import Logo from '../components/Logo'
import DeliveriesContainer from '../components/DeliveriesContainer'
import AddressContainer from '../components/AddressContainer'


import Home from './home'
import AboutUs from './o-nas'
import Gallery from './galeria'
import News from './aktualnosci'
import Menu from './menu'
import Location from './gdzie'
import Footer from '../components/Footer'
import ScrollDownButton from '../components/ScrollDownButton'

import woodenBackground from '../images/wooden-background.png'
import { CircleIndicator } from "../components/CircleIndicator"




const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px;


  }
  
  .{
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


const IndexPage = () => (
  <> 
    <GlobalStyle />
      <Home />
      <News />
      <AboutUs />
      <Gallery />
      <Location />
      
  </>
)

export default IndexPage
