import React from 'react';
import styled from 'styled-components';


import NavBar from '../components/NavBar'
import Logo from'../components/Logo'
import SocialsContainer from '../components/SocialsContainer'
import AddressContainer from '../components/AddressContainer'
import ScrollDownButton from '../components/ScrollDownButton'
import DeliveriesContainer from '../components/DeliveriesContainer' 


const StyledWrapper = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Cairo';
    font-size: 1em;
    color: white;
`
const Home = () => {
    
    return(
        <StyledWrapper id='home'>
            <NavBar />
            <Logo />
            <SocialsContainer />
            <AddressContainer />
            <ScrollDownButton anchor='#news' />
            <DeliveriesContainer />
        </StyledWrapper>
    )
}
    
export default Home