import React from "react"
import styled from "styled-components"

import PageTitle from "../components/PageTitle"
import ScrollDownButton from "../components/ScrollDownButton"
<<<<<<< HEAD
import Post from "../components/Post"
import LogoReusable from "../components/Logo/LogoReusable"
=======
import Post from '../components/Post'
>>>>>>> master

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

  justify-content: flex-start;

  overflow: hidden;

  @media (max-width: 600px) {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    left: 0;
    top: 5%;
    width: 100%;

    align-items: center;
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

const News = () => (
<<<<<<< HEAD
  <StyledWrapper id="news">
    <PageTitle title="aktualności" />
    <LogoWrapper>
      <LogoReusable type="white" />
    </LogoWrapper>
    <NewsContainer>
      <Post
        title="Post 1"
        date="08.04.2020"
        pic="https://images.happycow.net/venues/1024/95/46/hcmp95463_277109.jpeg"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus imperdiet pellentesque. Pellentesque feugiat, odio sed tempus ullamcorper, felis elit blandit magna, vitae congue justo mauris mollis metus. Phasellus tristique lectus a nulla scelerisque, non mollis lectus efficitur. In elementum nisi dapibus, tempor dolor et, facilisis neque. Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper. Phasellus ut leo eros. 
                Nunc dictum risus non est venenatis ullamcorper. Vivamus varius nisi eu risus elementum, a luctus ligula feugiat. Mauris tempus commodo purus. Vivamus id erat porttitor, malesuada enim a, euismod orci. Curabitur pulvinar elementum lectus vulputate malesuada. Etiam blandit dui sed."
      />
      <Post
        title="Post 2"
        date="06.04.2020"
        content="In elementum nisi dapibus, tempor dolor et, facilisis neque. Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper."
      />
      <Post
        title="Post 3"
        date="04.04.2020"
        content="Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper. Phasellus ut leo eros. Nunc dictum risus non est venenatis ullamcorper."
      />
      <Post
        title="Post 4"
        date="01.04.2020"
        pic="https://annasudol.pl/wp-content/uploads/2018/01/jaglana-6-of-6.jpg"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus imperdiet pellentesque. Pellentesque feugiat, odio sed tempus ullamcorper, felis elit blandit magna, vitae congue justo mauris mollis metus. Phasellus tristique lectus a nulla scelerisque, non mollis lectus efficitur. In elementum nisi dapibus, tempor dolor et, facilisis neque. Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper. Phasellus ut leo eros. 
                Nunc dictum risus non est venenatis ullamcorper. Vivamus varius nisi eu risus elementum, a luctus ligula feugiat. Mauris tempus commodo purus. Vivamus id erat porttitor, malesuada enim a, euismod orci. Curabitur pulvinar elementum lectus vulputate malesuada. Etiam blandit dui sed."
      />
    </NewsContainer>
    <ScrollDownButton anchor="#about-us" />
  </StyledWrapper>
=======
    <StyledWrapper id='news'>
        <PageTitle title='aktualności' />
        <NewsContainer>
            <Post
                title='Post 1'
                date='08.04.2020'
                pic='https://images.happycow.net/venues/1024/95/46/hcmp95463_277109.jpeg'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus imperdiet pellentesque. Pellentesque feugiat, odio sed tempus ullamcorper, felis elit blandit magna, vitae congue justo mauris mollis metus. Phasellus tristique lectus a nulla scelerisque, non mollis lectus efficitur. In elementum nisi dapibus, tempor dolor et, facilisis neque. Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper. Phasellus ut leo eros. 
                Nunc dictum risus non est venenatis ullamcorper. Vivamus varius nisi eu risus elementum, a luctus ligula feugiat. Mauris tempus commodo purus. Vivamus id erat porttitor, malesuada enim a, euismod orci. Curabitur pulvinar elementum lectus vulputate malesuada. Etiam blandit dui sed.'
            />
            <Post
                title='Post 2'
                date='06.04.2020'              
                content='In elementum nisi dapibus, tempor dolor et, facilisis neque. Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper.'
            />
            <Post
                title='Post 3'
                date='04.04.2020'              
                content='Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper. Phasellus ut leo eros. Nunc dictum risus non est venenatis ullamcorper.'
            />
             <Post
                title='Post 4'
                date='01.04.2020'
                pic='https://annasudol.pl/wp-content/uploads/2018/01/jaglana-6-of-6.jpg'              
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus imperdiet pellentesque. Pellentesque feugiat, odio sed tempus ullamcorper, felis elit blandit magna, vitae congue justo mauris mollis metus. Phasellus tristique lectus a nulla scelerisque, non mollis lectus efficitur. In elementum nisi dapibus, tempor dolor et, facilisis neque. Suspendisse potenti. Nulla interdum velit eu velit venenatis aliquam sit amet et nisl. Praesent id tempus lorem, pellentesque bibendum eros. Nunc et consequat dui. Aenean finibus mi erat, id cursus quam cursus et. Duis rhoncus mi et eros faucibus euismod. Donec aliquam tempor mi, nec imperdiet ligula cursus ut. Proin laoreet sapien sed risus scelerisque, vel dictum nibh ullamcorper. Phasellus ut leo eros. 
                Nunc dictum risus non est venenatis ullamcorper. Vivamus varius nisi eu risus elementum, a luctus ligula feugiat. Mauris tempus commodo purus. Vivamus id erat porttitor, malesuada enim a, euismod orci. Curabitur pulvinar elementum lectus vulputate malesuada. Etiam blandit dui sed.'
            />
        </NewsContainer>
        <ScrollDownButton anchor='#about-us' />
    </StyledWrapper>
>>>>>>> master
)

export default News
