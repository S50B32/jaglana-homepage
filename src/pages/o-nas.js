import React from "react"
import styled from 'styled-components'


import ScrollDownButton from '../components/ScrollDownButton'
import PageTitle from "../components/PageTitle"
import Post from '../components/Post'
import LogoReusable from '../components/Logo/LogoReusable'


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

    background-color: rgba(255,255,255,.3);      
`   

const Avatar = styled.img`
    height: 15rem;
    width: 15rem;
    border-radius: 50%;

    opacity: .9;

`

const AboutUs = () => (

    <StyledWrapper id='about-us'>
        <PageTitle title='o nas' />
        <NewsContainer>
            <Avatar src={require('../images/dziewczyna.jpg')}></Avatar>
            <Post
                title='Dziewczyna Michaua, wiek nieznany'
                content='Prawdę mówiąc, to ja ogarniam cały ten burdel.
                Lubię Michaua i jego wyrzeźbione ciało.
                Założyłam restaurację, bo nie chciałam żeby jadł tyle paprykarzu.'
            />
            <Avatar src={require('../images/michau.jpg')}></Avatar>
            <Post
                title='Michau, lat 28'
                content='Lubię ćwiczyć i jeść dobre, zdrowe jedzenie. Nie lubię liczyć kalorii, dlatego tak naprawdę to ja założyłem tę restaurację, żeby moi pracownicy robili to za mnie.'
            />
        </NewsContainer>
        <ScrollDownButton anchor='#gallery' />
    </StyledWrapper>
)

export default AboutUs