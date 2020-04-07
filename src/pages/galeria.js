import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import InstagramGrid from '../components/gallery/InstagramGrid'
import ScrollDownButton from '../components/ScrollDownButton'
import PageTitle from "../components/PageTitle"

const StyledWrapper = styled.div`
    box-sizing: border-box;
    
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;

    position: relative;


`
const Gallery = () => (
    <>
        <StyledWrapper id='gallery'>
            <PageTitle title='galeria' />
            <InstagramGrid />
            <ScrollDownButton anchor='#location' />
        </StyledWrapper>
        
    </>
)

export default Gallery