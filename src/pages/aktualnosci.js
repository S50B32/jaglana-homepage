import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import PageTitle from '../components/PageTitle'
import ScrollDownButton from "../components/ScrollDownButton"

const StyledWrapper = styled.div`
    box-sizing: border-box;
    
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;

    position: relative;

`
const News = () => (
    <StyledWrapper id='news'>
        <PageTitle title='aktualności' />
        
        <ScrollDownButton anchor='#about-us' />
    </StyledWrapper>
)

export default News