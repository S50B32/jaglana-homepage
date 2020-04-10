import React from 'react'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import styled from 'styled-components'

import LogoReusable from './LogoReusable'
import SocialsContainerReusable from './SocialsContainerReusable'
import DeliveriesContainer from './DeliveriesContainer'
import DeliveriesContainerReusable from './DeliveriesContainerReusable'

const StyledWrapper = styled.footer`
    height: 21vh;
    width: 100%;
    margin: 0;
    padding: 0;

    position: relative;
    bottom: 0;
    left: 0;
    color: rgba(255, 255, 255, .5);
    font-size: 1.2rem;
`
const FooterData = styled.div`
    height: 87%;
    width: 100%;
    background-color: rgba(239, 167, 57, 1);


    display: flex;
    justify-content: left;
    align-items: center;

    position: relative;

    .footerSection{
        display: flex;
        box-sizing: border-box;

        position: relative;
        height: 100%;
        width: 10%;

        padding: 1.5rem 0 0;
        margin: 0;

        justify-content: center;

        ul{
            padding: 0;
            margin: 0;
            list-style: none;
        }
        h4{
            padding: 0;
            margin: 0;
        }
    }

    .footerSection__logo{
        padding: 0;
        align-items: center;
        margin-left: 10.5%;

    }
    .footerSection__contact{
        width: 7%;

    }
    .footerSection__about{
        width: 7%;

    }
    .footerSection__info{
        width: 7%;

    }
    .footerSection__media{
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        
        margin-left: 22.5%;

        span{
            
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: center;

            a{
                width: 15%;
                opacity: .6;
                margin: .8rem;
            }
    
        }
        
    }
    .footerSection__deliveries{
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;

        

        span{
            
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: center;

            a{
                width: 50%;
                opacity: .6;
                margin: .7rem;
            
        }
    }

    Link{
        font-family: 'Cairo';
        background: none;
        font-size: 4rem;
        opacity: .85;
        border: none;
        text-decoration: none;
        color: white;
        text-transform: lowercase;
        margin: 0;
        padding: 0;

        :hover{
            cursor: pointer;
    }
    }
`

const CreditsBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
    height: 13%;
    width: 100%;
    background-color: rgba(0, 0, 0, .7);
`

const Footer = () => (
    <StyledWrapper>
        <FooterData>
            <section class='footerSection footerSection__logo'>
                <LogoReusable type='white'></LogoReusable>
            </section>
            <section class='footerSection footerSection__contact'>
                <ul>
                    <h4>KONTAKT</h4>
                    <li>tel. 884 666 906</li>
                    <li>ul. Kramarska 1/5</li>
                    <li>61-765 Poznań</li>
                    <li><a class='e-mail__link' href="mailto:biuro@jaglana.pl">biuro@jaglana.pl</a></li>   
                </ul>
            </section>
            <section class='footerSection footerSection__about'>
                <ul>
                    <h4>RESTAURACJA</h4>
                    <li><a target="_blank" href='http://larybar.pl/wp-content/uploads/2016/07/LaryBar_przykladowe_menu.pdf'>Menu</a></li>
                    <li><button onClick={() => scrollTo('#about-us')}>O nas</button></li>
                    <li><Link to='/kariera/'>Kariera</Link></li>
                    <li>FAQ</li>   
                </ul>
            </section>
            <section class='footerSection footerSection__info'>
                <ul>
                    <h4>INFORMACJE</h4>
                    <li>Informacja prawna</li>
                    <li>Polityka prywatności</li>  
                </ul>
            </section>
            <section class='footerSection footerSection__media'>
                <h4>Śledź nasze profile</h4>
                    <span>
                    <SocialsContainerReusable type='white'></SocialsContainerReusable>
                    </span>
            </section>
            <section class='footerSection footerSection__deliveries'>
                <h4>Zamów z dowozem</h4>
                    <span>
                        <DeliveriesContainerReusable type='white' />
                    </span>
            </section>

        </FooterData>
        <CreditsBar>
            <span> © 2020 Restauracja Jaglana. Wszelkie prawa zastrzeżone. Projekt i realizacja Przemysław Wielgosik.</span>
        </CreditsBar>

    </StyledWrapper>
)

export default Footer