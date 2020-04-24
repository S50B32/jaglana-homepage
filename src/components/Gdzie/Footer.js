import React from 'react'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import LogoReusable from '../Logo/LogoReusable'
import SocialsContainerReusable from '../SocialsContainer/SocialsContainerReusable'
import DeliveriesContainerReusable from '../DeliveriesContainer/DeliveriesContainerReusable'

import {StyledWrapper, FooterData, CreditsBar} from './StyledFooter'

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