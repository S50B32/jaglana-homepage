import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Gdzie/Footer';
import ContactColumn from '../components/Gdzie/ContactColumn';

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const LocationDataContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
`


const MapColumn = styled.div`
    width: 37vw;
    height: 75vh;

    @media (max-width: 600px) {
        width: 100%;
        height: 50vh;
    }

    iframe{
        width: 100%;
        height: 100%;
        border: none;
        opacity: .85;
        
        backdrop-filter: blur(10px) brightness(.5);     
    }
`


const Location = () => (
    <>
        <StyledWrapper id='location'>
            <LocationDataContainer>
                <ContactColumn />
                <MapColumn>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9735.40845723797!2d16.9331704!3d52.4093564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf9b7ea50eced02b!2sJaglana!5e0!3m2!1spl!2spl!4v1585427075755!5m2!1spl!2spl'></iframe>
                </MapColumn>
            </LocationDataContainer>
            <Footer />
        </StyledWrapper>
    </>
)

export default Location