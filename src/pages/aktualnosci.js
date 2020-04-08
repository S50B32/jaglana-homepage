import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import PageTitle from '../components/PageTitle'
import ScrollDownButton from "../components/ScrollDownButton"
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

    background-color: rgba(226, 226, 226, .3);
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
const News = () => (
    <StyledWrapper id='news'>
        <PageTitle title='aktualności' />
        <NewsContainer>
            <Post
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus imperdiet pellentesque. Pellentesque feugiat, odio sed tempus ullamcorper, felis elit blandit magna, vitae congue justo mauris mollis metus. Phasellus tristique lectus a nulla scelerisque, non mollis lectus efficitur. In elementum nisi dapibus, tempor dolor et, facilisis neque. Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper. Phasellus ut leo eros. 
                Nunc dictum risus non est venenatis ullamcorper. Vivamus varius nisi eu risus elementum, a luctus ligula feugiat. Mauris tempus commodo purus. Vivamus id erat porttitor, malesuada enim a, euismod orci. Curabitur pulvinar elementum lectus vulputate malesuada. Etiam blandit dui sed.'
            />
            <Post
                content='In elementum nisi dapibus, tempor dolor et, facilisis neque. Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper.'
            />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </NewsContainer>
        <ScrollDownButton anchor='#about-us' />
    </StyledWrapper>
)

export default News