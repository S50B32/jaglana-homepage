import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'


import ScrollDownButton from '../components/ScrollDownButton'
import PageTitle from "../components/PageTitle"
import aboutUsImage from '../images/about-us-image.jpg'

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;


    display: flex;
    flex-direction: space-between;

    img{

    }

    
    
`

const AboutUsContainer = styled.div`
    font-family: 'Cairo';
    color: white;
    font-size: 2em;
    padding: 2em;
`

const AboutUs = () => (
    <>
    <StyledWrapper id='about-us'>
        <PageTitle title='o nas' />
        
        foty lokalu
        opis o nas

        <ScrollDownButton anchor='#gallery' />
    </StyledWrapper>  
    </>
)

export default AboutUs