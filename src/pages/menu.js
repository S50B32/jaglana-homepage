import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import ScrollDownButton from '../components/ScrollDownButton'
import dishImage from '../images/dish.png'


const StyledWrapper = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    

   

    position: relative;



    iframe{
        width: 600px;
        height: 450px;     
    }


`
const PageImage = styled.img`
    position: absolute;
    top: -10%;
    right: -10%;
    height: 100%;
`

const Menu = () => (
    <>
        <StyledWrapper id='menu'>
            <h1>Menu</h1>
            <p>Jaglana</p>
            <br />
            <PageImage src={dishImage}></PageImage>
            <ScrollDownButton anchor='#location'></ScrollDownButton>

        </StyledWrapper> 
    </>
)

export default Menu