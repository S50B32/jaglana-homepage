import React from "react"
import styled from 'styled-components'


import ScrollDownButton from '../components/ScrollDownButton'
import PageTitle from "../components/PageTitle"
import Post from '../components/Post'

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
    padding: .5rem;

    background-color: rgba(0, 0, 0, .3);
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
const AboutUs = () => (

    <StyledWrapper id='about-us'>
        <PageTitle title='o nas' />
        <NewsContainer>
            <Post title='O nas' content='Miejsce stworzone z miłości do kuchni bezcukrowej i bezglutenowej. U nas napijesz się aromatycznej kawy oraz zjesz naleśniki gryczane, gofry kasztanowe i amarantusowe, szakszuki, omlety, jaglanki.'
            />
        </NewsContainer>
        <ScrollDownButton anchor='#gallery' />
    </StyledWrapper>
)

export default AboutUs