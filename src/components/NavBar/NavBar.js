import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

<<<<<<< HEAD
import StyledNavBar from "./StyledNavBar"
import StyledLiOrderNow from "./StyledLiOrderNow"
import StyledLink from "./StyledLink"
import StyledDeliveriesMenu from "./StyledDeliveriesMenu"
import DeliveriesContainerReusable from "../DeliveriesContainer/DeliveriesContainerReusable"
=======
import StyledNavBar from './StyledNavBar'
import StyledLiOrderNow from './StyledLiOrderNow'
import StyledLink from './StyledLink'
import {StyledDeliveriesMenuOn, StyledDeliveriesMenuOff} from './StyledDeliveriesMenu'
import DeliveriesContainerReusable from '../DeliveriesContainer/DeliveriesContainerReusable'
>>>>>>> master

const NavBar = () => {
  const [toggleOn, setToggleOn] = useState(false)

  const showDeliveries = () => setToggleOn(true)
  const hideDeliveries = () => setToggleOn(false)

<<<<<<< HEAD
  return (
    <StyledNavBar>
      <ul>
        <li>
          <StyledLink as="button" onClick={() => scrollTo("#about-us")}>
            O nas
          </StyledLink>
        </li>
        <li>
          <StyledLink as="button" onClick={() => scrollTo("#news")}>
            Aktualności
          </StyledLink>
        </li>
        <li>
          <StyledLink
            as="a"
            onMouseEnter={hideDeliveries}
            target="_blank"
            rel="noopener noreferrer"
            href="http://larybar.pl/wp-content/uploads/2016/07/LaryBar_przykladowe_menu.pdf"
          >
            Menu
          </StyledLink>
        </li>
        <StyledLiOrderNow>
          {toggleOn ? (
            <>
              <StyledDeliveriesMenu onMouseLeave={hideDeliveries}>
                <DeliveriesContainerReusable type="black" />
              </StyledDeliveriesMenu>
              <StyledLink as="button" dimmed>
                <span>Zamów</span>
                <span>teraz</span>
              </StyledLink>
            </>
          ) : (
            <StyledLink as="button" onMouseEnter={showDeliveries}>
              <span>Zamów</span>
              <span>teraz</span>
            </StyledLink>
          )}
        </StyledLiOrderNow>
        <li>
          <StyledLink
            as="button"
            onMouseLeave={hideDeliveries}
            onClick={() => scrollTo("#location")}
          >
            Kontakt
          </StyledLink>
        </li>
        <li>
          <StyledLink as="button" to={"/kariera/"}>
            Kariera
          </StyledLink>
        </li>
        <li>
          <StyledLink as="button" onClick={() => scrollTo("#gallery")}>
            Galeria
          </StyledLink>
        </li>
      </ul>
    </StyledNavBar>
  )
=======
    return(
        <StyledNavBar>
            <ul>
                <li>
                    <StyledLink as='button'
                        onClick={() => scrollTo('#about-us')}>
                        O nas
                    </StyledLink>
                </li>
                <li>
                    <StyledLink as='button'
                        onClick={() => scrollTo('#news')}>
                        Aktualności
                    </StyledLink>
                </li>
                <li>
                    <StyledLink as='a'
                        onMouseEnter={hideDeliveries}
                        target="_blank"
                        href='http://larybar.pl/wp-content/uploads/2016/07/LaryBar_przykladowe_menu.pdf'>
                        Menu
                    </StyledLink>
                </li>
                <StyledLiOrderNow>
                        {toggleOn ?
                                <>
                                    <StyledDeliveriesMenuOn onMouseLeave={hideDeliveries}>
                                        <DeliveriesContainerReusable type='black' />
                                    </StyledDeliveriesMenuOn>
                                    <StyledLink as='button' dimmed>
                                        <span>Zamów</span>
                                        <span>teraz</span>
                                    </StyledLink>
                                </>
                            :       
                                <>
                                    <StyledDeliveriesMenuOff>
                                        <DeliveriesContainerReusable type='black' />
                                    </StyledDeliveriesMenuOff>
                                    <StyledLink as='button'
                                        onMouseEnter={showDeliveries}>
                                        <span>Zamów</span>
                                        <span>teraz</span>
                                    </StyledLink>
                                </>
                        }
                        
                </StyledLiOrderNow>
                <li>
                    <StyledLink as='button'
                        onMouseLeave={hideDeliveries}
                        onClick={() => scrollTo('#location')}>
                        Kontakt
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        to={'/kariera/'}>
                        Kariera
                    </StyledLink>
                </li>
                <li>
                    <StyledLink as='button'
                        onClick={() => scrollTo('#gallery')}>
                        Galeria
                    </StyledLink>
                </li>
            </ul>
        </StyledNavBar>
    )
>>>>>>> master
}

export default NavBar
